/* ============================================================
   BASE DE EMBALAGENS — SINCRONIZADA COM FIREBASE
============================================================ */

// Firebase já está carregado no index.html
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-database.js";

const db = window.db;

// A base agora começa vazia e será carregada do Firebase
let embalagensBase = [];

/* ============================================================
   CARREGAR BASE DO FIREBASE (TEMPO REAL)
============================================================ */
onValue(ref(db, "embalagensBase"), snapshot => {
  embalagensBase = snapshot.val() || [];

  // Atualiza interface somente quando o DOM existir
  if (document.readyState === "complete") {
    atualizarTabelaGerenciar();
    montarCategorias();
  } else {
    document.addEventListener("DOMContentLoaded", () => {
      atualizarTabelaGerenciar();
      montarCategorias();
    });
  }
});

/* ============================================================
   SALVAR BASE NO FIREBASE
============================================================ */
function salvarBase() {
  set(ref(db, "embalagensBase"), embalagensBase);
}

/* ============================================================
   ADICIONAR EMBALAGEM
============================================================ */
function adicionarEmbalagem(categoria, codigo, nome, capacidade) {
  embalagensBase.push({
    categoria,
    codigo,
    nome,
    capacidade: Number(capacidade)
  });

  salvarBase();
}

/* ============================================================
   REMOVER EMBALAGEM
============================================================ */
function removerEmbalagem(codigo) {
  embalagensBase = embalagensBase.filter(e => e.codigo !== codigo);
  salvarBase();
}

/* ============================================================
   RECOLHER TELA DE GERENCIAMENTO
============================================================ */
function recolherGerenciar() {
  const tela = document.querySelector(".gerenciar");
  tela.style.display = "none";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ============================================================
   EDITAR EMBALAGEM
============================================================ */
function editarEmbalagem(codigo) {
  const item = embalagensBase.find(e => e.codigo === codigo);
  if (!item) return;

  const novaCategoria = prompt("Nova categoria:", item.categoria);
  const novoNome = prompt("Novo nome:", item.nome);
  const novaCapacidade = prompt("Nova capacidade:", item.capacidade);

  if (!novaCategoria || !novoNome || isNaN(novaCapacidade)) {
    alert("Valores inválidos.");
    return;
  }

  item.categoria = novaCategoria.trim();
  item.nome = novoNome.trim();
  item.capacidade = Number(novaCapacidade);

  salvarBase();
  atualizarTabelaGerenciar();
  montarCategorias();
  recolherGerenciar();
}

/* ============================================================
   MONTAR CATEGORIAS
============================================================ */
function montarCategorias() {
  const selectCategoria = document.getElementById("categoria");
  if (!selectCategoria) return;

  const categorias = [...new Set(
    embalagensBase.map(e => e.categoria?.normalize("NFC").trim())
  )].sort();

  selectCategoria.innerHTML = '<option value="">Selecione a categoria</option>';

  categorias.forEach(cat => {
    if (!cat) return;
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    selectCategoria.appendChild(opt);
  });
}

/* ============================================================
   LISTENER DE CATEGORIA (UMA VEZ SÓ)
============================================================ */
const selectCategoria = document.getElementById("categoria");
if (selectCategoria) {
  selectCategoria.addEventListener("change", () => {
    montarEmbalagens(selectCategoria.value);
  });
}

/* ============================================================
   MONTAR EMBALAGENS
============================================================ */
function montarEmbalagens(categoriaSelecionada) {
  const categoriaNormalizada = categoriaSelecionada
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toUpperCase();

  const lista = embalagensBase.filter(e =>
    e.categoria
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim()
      .toUpperCase() === categoriaNormalizada
  );

  const selectEmbalagem = document.getElementById("embalagem");
  selectEmbalagem.innerHTML = '<option value="">Selecione a embalagem</option>';

  lista.forEach(e => {
    const opt = document.createElement("option");
    opt.value = e.codigo;
    opt.textContent = `${e.codigo} - ${e.nome} (Cap: ${e.capacidade})`;
    selectEmbalagem.appendChild(opt);
  });
}

/* ============================================================
   PEDIDO — LOCALSTORAGE
============================================================ */
let itensPedido = JSON.parse(localStorage.getItem("itensPedido")) || [];

function salvarPedido() {
  localStorage.setItem("itensPedido", JSON.stringify(itensPedido));
}

function adicionarItem() {
  const data = document.getElementById("data").value;
  const categoria = document.getElementById("categoria").value;
  const codigo = document.getElementById("embalagem").value;
  const estoqueAtual = Number(document.getElementById("estoqueAtual").value || 0);

  if (!data || !categoria || !codigo) {
    alert("Preencha todos os campos.");
    return;
  }

  const itemBase = embalagensBase.find(e => e.codigo === codigo);

  const capacidade = Number(itemBase.capacidade || 0);
  const pedir = capacidade - estoqueAtual;

  itensPedido.push({
    data,
    categoria,
    codigo,
    descricao: itemBase.nome,
    capacidade,
    estoqueAtual,
    pedir
  });

  salvarPedido();
  atualizarTabela();
}

document.getElementById("addItemBtn").addEventListener("click", adicionarItem);

/* ============================================================
   TABELA PRINCIPAL
============================================================ */
function atualizarTabela() {
  const tbody = document.querySelector("#tabelaItens tbody");
  tbody.innerHTML = "";

  itensPedido.forEach(item => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.data}</td>
      <td>${item.categoria}</td>
      <td>${item.codigo}</td>
      <td>${item.descricao}</td>
      <td>${item.capacidade}</td>
      <td>${item.estoqueAtual}</td>
      <td>${item.pedir}</td>
    `;
    tbody.appendChild(tr);
  });
}

atualizarTabela();

/* ============================================================
   LIMPAR PEDIDO
============================================================ */
document.getElementById("limparBtn").addEventListener("click", () => {
  if (!confirm("Deseja limpar o pedido?")) return;
  itensPedido = [];
  salvarPedido();
  atualizarTabela();
});

/* ============================================================
   GERAR PLANILHA
============================================================ */
document.getElementById("gerarPlanilhaBtn").addEventListener("click", () => {
  if (!itensPedido.length) {
    alert("Nenhum item no pedido.");
    return;
  }

  const dados = [
    ["Data", "Categoria", "Código", "Descrição", "Pedir"],
    ...itensPedido.map(i => [
      i.data,
      i.categoria,
      i.codigo,
      i.descricao,
      i.pedir
    ])
  ];

  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(dados);
  XLSX.utils.book_append_sheet(wb, ws, "Pedido");

  XLSX.writeFile(wb, "pedido_embalagens.xlsx");
});

/* ============================================================
   GERENCIAR — TABELA
============================================================ */
function atualizarTabelaGerenciar() {
  const tbody = document.querySelector("#tabelaGerenciar tbody");
  if (!tbody) return;

  tbody.innerHTML = "";

  embalagensBase.forEach(e => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${e.categoria}</td>
      <td>${e.codigo}</td>
      <td>${e.nome}</td>
      <td>${e.capacidade}</td>
      <td>
        <button class="btnEditar" onclick="editarEmbalagem('${e.codigo}')">Editar</button>
        <button class="btnRemover" onclick="removerEmbalagem('${e.codigo}'); atualizarTabelaGerenciar(); montarCategorias();">Remover</button>
      </td>
    `;

    tbody.appendChild(tr);
  });
}

/* ============================================================
   GERENCIAR — ADICIONAR
============================================================ */
document.getElementById("btnAdicionar").addEventListener("click", () => {
  const categoria = document.getElementById("novaCategoria").value.trim();
  const codigo = document.getElementById("novoCodigo").value.trim();
  const nome = document.getElementById("novoNome").value.trim();
  const capacidade = Number(document.getElementById("novaCapacidade").value);

  if (!categoria || !codigo || !nome) {
    alert("Preencha todos os campos.");
    return;
  }

  adicionarEmbalagem(categoria, codigo, nome, capacidade);

  atualizarTabelaGerenciar();
  montarCategorias();

  document.getElementById("novaCategoria").value = "";
  document.getElementById("novoCodigo").value = "";
  document.getElementById("novoNome").value = "";
  document.getElementById("novaCapacidade").value = "";

  recolherGerenciar();
});

/* ============================================================
   ABAS
============================================================ */
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {

    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));

    const tabId = btn.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

/* ============================================================
   BOTÃO GERENCIAR
============================================================ */
document.getElementById("btnGerenciar").addEventListener("click", () => {
  const tela = document.querySelector(".gerenciar");
  tela.style.display = "block";
  tela.scrollIntoView({ behavior: "smooth" });
});

/* ============================================================
   INICIALIZAÇÃO
============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  atualizarTabela();
});

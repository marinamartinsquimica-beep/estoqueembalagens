/* ============================================================
   BASE DE EMBALAGENS (EDITÁVEL)
============================================================ */
let embalagensBase = JSON.parse(localStorage.getItem("embalagensBase")) || [
  { categoria: "PRIMÁRIA", codigo: "ETJ.001", nome: "Estojo 06 - Grande Raiar", capacidade: 6 },
  { categoria: "PRIMÁRIA", codigo: "ETJ.010", nome: "Estojo 10 - Médio Raiar", capacidade: 80 },
  { categoria: "PRIMÁRIA", codigo: "ETJ.003", nome: "Estojo 10 - Grande Raiar", capacidade: 225 },
  { categoria: "PRIMÁRIA", codigo: "ETJ.004", nome: "Estojo 10 - Jumbo Raiar", capacidade: 80 },
  { categoria: "PRIMÁRIA", codigo: "ETJ.005", nome: "Estojo 10 - Grande HNT", capacidade: 40 },
  { categoria: "PRIMÁRIA", codigo: "ETJ.006", nome: "Estojo 10 - Grande Raízs", capacidade: 40 },
  { categoria: "PRIMÁRIA", codigo: "ETJ.007", nome: "Estojo 10 - Grande Taeq", capacidade: 40 },
  { categoria: "PRIMÁRIA", codigo: "ETJ.008", nome: "Estojo 10 - Grande Mambo", capacidade: 40 },
  { categoria: "PRIMÁRIA", codigo: "ETJ.012", nome: "Estojo 10 - Grande Carrefour BIO", capacidade: 40 },
  { categoria: "PRIMÁRIA", codigo: "ETJ.011", nome: "Estojo 10 - Grande Benassi", capacidade: 40 },
  { categoria: "PRIMÁRIA", codigo: "ETJ.013", nome: "Estojo 18 - Grande Raiar", capacidade: 32 },

  { categoria: "PRIMÁRIA", codigo: "BDJ.001", nome: "Bandeja 30 Ovos - Polpa", capacidade: 30 },

  { categoria: "PRIMÁRIA", codigo: "BLT.001", nome: "Blister 20 - Grande Raiar", capacidade: 50 },
  { categoria: "PRIMÁRIA", codigo: "BLT.002", nome: "Blister 20 - Grande Sams", capacidade: 10 },
  { categoria: "PRIMÁRIA", codigo: "BLT.003", nome: "Blister 20 - Grande HNT", capacidade: 10 },
  { categoria: "PRIMÁRIA", codigo: "BLT.005", nome: "Blister 10 Ovos - OBA", capacidade: 16 },
  { categoria: "PRIMÁRIA", codigo: "BLT.006", nome: "Blister 20 - Grande OBA", capacidade: 10 },
  { categoria: "PRIMÁRIA", codigo: "BLT.009", nome: "Blister 30 - Grande Raiar", capacidade: 15 },
  { categoria: "PRIMÁRIA", codigo: "BLT.010", nome: "Blister 20 - Médio Raiar", capacidade: 15 },
  { categoria: "PRIMÁRIA", codigo: "BLT.011", nome: "Blister 30 - Médio Raiar", capacidade: 10 },
  { categoria: "PRIMÁRIA", codigo: "BLT.008", nome: "Blister 20 - Grande Benassi", capacidade: 05 },
  { categoria: "PRIMÁRIA", codigo: "BLT.007", nome: "Blister 20 - Grande Taeq", capacidade: 10 },
  { categoria: "PRIMÁRIA", codigo: "BLT.012", nome: "Blister 20 - Grande Sitio Verde", capacidade: 10 },

  { categoria: "PRIMÁRIA", codigo: "TMP.001", nome: "Tampa 30 Ovos - PVC", capacidade: 30 },
  { categoria: "PRIMÁRIA", codigo: "TMP.002", nome: "Tampa 30 Ovos - Polpa", capacidade: 10 },

  { categoria: "PRIMÁRIA", codigo: "ENC.001", nome: "Plástico Encolhível - Selagem", capacidade: 3 },

  { categoria: "SECUNDÁRIA", codigo: "CXA.001", nome: "Caixa 240/360 - Bandeja 30 Ovos", capacidade: 600 },
  { categoria: "SECUNDÁRIA", codigo: "CXA.002", nome: "Caixa 90 - Estojo 06 Ovos", capacidade: 800 },
  { categoria: "SECUNDÁRIA", codigo: "CXA.003", nome: "Caixa 240 - Estojo 10 Jumbo", capacidade: 600 },
  { categoria: "SECUNDÁRIA", codigo: "CXA.005", nome: "Caixa 240 - Estojo 10", capacidade: 1400 },
  { categoria: "SECUNDÁRIA", codigo: "CXA.006", nome: "Caixa 240 - Blister 20 Ovos", capacidade: 1600 },
  { categoria: "SECUNDÁRIA", codigo: "CXA.007", nome: "Caixa 240 - Blister 30 Ovos", capacidade: 600 },
  { categoria: "SECUNDÁRIA", codigo: "CXA.008", nome: "Caixa 270 - Estojo 18 Ovos", capacidade: 300 },

  { categoria: "DIVISÓRIAS", codigo: "DIV.001", nome: "Divisória 240/360 - Bandeja 30 Ovos", capacidade: 360 },
  { categoria: "DIVISÓRIAS", codigo: "DIV.002", nome: "Divisória 90 - Estojo 06 Ovos", capacidade: 90 },
  { categoria: "DIVISÓRIAS", codigo: "DIV.003", nome: "Divisória 240 - Estojo 10 Jumbo", capacidade: 240 },
  { categoria: "DIVISÓRIAS", codigo: "DIV.005", nome: "Divisória 240 - Estojo 10", capacidade: 240 },
  { categoria: "DIVISÓRIAS", codigo: "DIV.006", nome: "Divisória 240 - Blister 20 Ovos", capacidade: 240 },
  { categoria: "DIVISÓRIAS", codigo: "DIV.007", nome: "Divisória 240 - Blister 30 Ovos", capacidade: 240 },
  { categoria: "DIVISÓRIAS", codigo: "DIV.008", nome: "Divisória 270 - Estojo 18 Ovos", capacidade: 270 },

  { categoria: "OUTROS", codigo: "FIT.001", nome: "Fita Adesiva - Transparente", capacidade: 15 },
  { categoria: "OUTROS", codigo: "RBB.001", nome: "Ribbon", capacidade: 5 },
  { categoria: "OUTROS", codigo: "ETQ.001", nome: "Etiqueta Couche 100x130", capacidade: 5 },
  { categoria: "OUTROS", codigo: "ETQ.005", nome: "Etiqueta Couche 33x21x3", capacidade: 5 },
  { categoria: "OUTROS", codigo: "ENC.002", nome: "Cinta do Estojo de 06 (Sampling)", capacidade: 0 },
  { categoria: "OUTROS", codigo: "CNT.001", nome: "Cantoneira", capacidade: 25 },
  { categoria: "OUTROS", codigo: "STC.001", nome: "Strecht", capacidade: 40 },

  { categoria: "RÓTULOS", codigo: "RTL.003", nome: "Rótulo Papel 30 Ovos - Jumbo Raiar", capacidade: 10 },
  { categoria: "RÓTULOS", codigo: "RTL.014", nome: "Rótulo Cinta Estojo 10 - Grande Oba", capacidade: 30 },
  { categoria: "RÓTULOS", codigo: "RTL.020", nome: "Rótulo Papel 30 Ovos - Médio Raiar", capacidade: 10 }
];

/* ============================================================
   SALVAR BASE
============================================================ */
function salvarBase() {
  localStorage.setItem("embalagensBase", JSON.stringify(embalagensBase));
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

  }

/* ============================================================
   MONTAR CATEGORIAS
============================================================ */
function montarCategorias() {
  const selectCategoria = document.getElementById("categoria");

  const categorias = [...new Set(
    embalagensBase.map(e => e.categoria.normalize("NFC").trim())
  )].sort();

  selectCategoria.innerHTML = '<option value="">Selecione a categoria</option>';

  categorias.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    selectCategoria.appendChild(opt);
  });

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
   ADICIONAR ITEM AO PEDIDO
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
  ["Data", "Categoria", "Código", "Descrição", "Estoque", "Pedir"],
  ...itensPedido.map(i => [
    i.data,
    i.categoria,
    i.codigo,
    i.descricao,
    i.estoqueAtual,
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
  montarCategorias();
  atualizarTabelaGerenciar();
});
document.getElementById("btnRecolher").addEventListener("click", () => {
  recolherGerenciar();
});

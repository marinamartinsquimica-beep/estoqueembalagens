/* ============================================================
   BASE DE EMBALAGENS
============================================================ */

let embalagensBase = JSON.parse(localStorage.getItem("embalagensBase")) || [];

function salvarBase() {
  localStorage.setItem("embalagensBase", JSON.stringify(embalagensBase));
}

/* ============================================================
   PEDIDO
============================================================ */

let itensPedido = JSON.parse(localStorage.getItem("itensPedido")) || [];
let editIndex = null;

function salvarPedido() {
  localStorage.setItem("itensPedido", JSON.stringify(itensPedido));
}

/* ============================================================
   EMBALAGENS - CRUD
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

function removerEmbalagem(codigo) {
  embalagensBase = embalagensBase.filter(e => e.codigo !== codigo);
  salvarBase();
  atualizarTabelaGerenciar();
  montarCategorias();
}

function editarEmbalagem(codigo) {
  const item = embalagensBase.find(e => e.codigo === codigo);
  if (!item) return;

  const novaCategoria = prompt("Categoria:", item.categoria);
  const novoNome = prompt("Nome:", item.nome);
  const novaCapacidade = prompt("Capacidade:", item.capacidade);

  if (!novaCategoria || !novoNome || isNaN(novaCapacidade)) return;

  item.categoria = novaCategoria.trim();
  item.nome = novoNome.trim();
  item.capacidade = Number(novaCapacidade);

  salvarBase();
  atualizarTabelaGerenciar();
  montarCategorias();
}

/* ============================================================
   FORMULÁRIOS - EMBALAGENS
============================================================ */

document.getElementById("btnAdicionar").addEventListener("click", () => {
  const categoria = document.getElementById("novaCategoria").value.trim();
  const codigo = document.getElementById("novoCodigo").value.trim();
  const nome = document.getElementById("novoNome").value.trim();
  const capacidade = document.getElementById("novaCapacidade").value;

  if (!categoria || !codigo || !nome) {
    alert("Preencha todos os campos.");
    return;
  }

  adicionarEmbalagem(categoria, codigo, nome, capacidade);

  document.getElementById("novaCategoria").value = "";
  document.getElementById("novoCodigo").value = "";
  document.getElementById("novoNome").value = "";
  document.getElementById("novaCapacidade").value = "";

  atualizarTabelaGerenciar();
  montarCategorias();
});

/* ============================================================
   CATEGORIAS E EMBALAGENS
============================================================ */

function montarCategorias() {
  const select = document.getElementById("categoria");

  const categorias = [...new Set(embalagensBase.map(e => e.categoria))];

  select.innerHTML = '<option value="">Selecione</option>';

  categorias.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    select.appendChild(opt);
  });

  select.onchange = () => montarEmbalagens(select.value);
}

function montarEmbalagens(categoria) {
  const select = document.getElementById("embalagem");

  const lista = embalagensBase.filter(e => e.categoria === categoria);

  select.innerHTML = '<option value="">Selecione</option>';

  lista.forEach(e => {
    const opt = document.createElement("option");
    opt.value = e.codigo;
    opt.textContent = `${e.codigo} - ${e.nome}`;
    select.appendChild(opt);
  });
}

/* ============================================================
   PEDIDO - ADICIONAR / EDITAR
============================================================ */

document.getElementById("addItemBtn").addEventListener("click", () => {
  const data = document.getElementById("data").value;
  const categoria = document.getElementById("categoria").value;
  const codigo = document.getElementById("embalagem").value;
  const estoqueAtual = Number(document.getElementById("estoqueAtual").value);

  if (!data || !categoria || !codigo) {
    alert("Preencha todos os campos.");
    return;
  }

  const base = embalagensBase.find(e => e.codigo === codigo);
  const pedir = base.capacidade - estoqueAtual;

  const novoItem = {
    data,
    categoria,
    codigo,
    descricao: base.nome,
    capacidade: base.capacidade,
    estoqueAtual,
    pedir
  };

  if (editIndex !== null) {
    itensPedido[editIndex] = novoItem;
    editIndex = null;
    document.getElementById("addItemBtn").textContent = "Adicionar Item";
  } else {
    itensPedido.push(novoItem);
  }

  salvarPedido();
  atualizarTabela();
});

/* ============================================================
   TABELA PEDIDOS
============================================================ */

function atualizarTabela() {
  const tbody = document.querySelector("#tabelaItens tbody");
  tbody.innerHTML = "";

  itensPedido.forEach((item, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${item.data}</td>
      <td>${item.categoria}</td>
      <td>${item.codigo}</td>
      <td>${item.descricao}</td>
      <td>${item.capacidade}</td>
      <td>${item.estoqueAtual}</td>
      <td>${item.pedir}</td>
      <td>
        <button class="btnEditar" data-index="${index}">Editar</button>
        <button class="btnExcluir" data-index="${index}">Excluir</button>
      </td>
    `;

    tbody.appendChild(tr);
  });

  document.querySelectorAll(".btnExcluir").forEach(btn => {
    btn.onclick = () => {
      const i = btn.dataset.index;
      itensPedido.splice(i, 1);
      salvarPedido();
      atualizarTabela();
    };
  });

  document.querySelectorAll(".btnEditar").forEach(btn => {
    btn.onclick = () => {
      const i = btn.dataset.index;
      const item = itensPedido[i];

      document.getElementById("data").value = item.data;
      document.getElementById("categoria").value = item.categoria;
      montarEmbalagens(item.categoria);
      document.getElementById("embalagem").value = item.codigo;
      document.getElementById("estoqueAtual").value = item.estoqueAtual;

      editIndex = i;
      document.getElementById("addItemBtn").textContent = "Salvar Alteração";
    };
  });
}

/* ============================================================
   LIMPAR
============================================================ */

document.getElementById("limparBtn").onclick = () => {
  if (!confirm("Limpar pedido?")) return;
  itensPedido = [];
  salvarPedido();
  atualizarTabela();
};

/* ============================================================
   EXCEL
============================================================ */

document.getElementById("gerarPlanilhaBtn").onclick = () => {
  if (!itensPedido.length) return alert("Sem itens");

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

  XLSX.writeFile(wb, "pedido.xlsx");
};

/* ============================================================
   GERENCIAMENTO TABELA
============================================================ */

function atualizarTabelaGerenciar() {
  const tbody = document.querySelector("#tabelaGerenciar tbody");
  tbody.innerHTML = "";

  embalagensBase.forEach(e => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${e.categoria}</td>
      <td>${e.codigo}</td>
      <td>${e.nome}</td>
      <td>${e.capacidade}</td>
      <td>
        <button onclick="editarEmbalagem('${e.codigo}')">Editar</button>
        <button onclick="removerEmbalagem('${e.codigo}')">Excluir</button>
      </td>
    `;

    tbody.appendChild(tr);
  });
}

/* ============================================================
   INICIALIZAÇÃO
============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  montarCategorias();
  atualizarTabelaGerenciar();
  atualizarTabela();
});

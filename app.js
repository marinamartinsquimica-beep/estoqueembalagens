/* ============================================================
   BASE DE EMBALAGENS (EDITÁVEL)
============================================================ */
let embalagensBase = JSON.parse(localStorage.getItem("embalagensBase")) || [
  { categoria: "PRIMÁRIA", codigo: "ETJ.001", nome: "Estojo 06 - Grande Raiar", capacidade: 60 },
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

  { categoria: "PRIMÁRIA", codigo: "TMP.001", nome: "Tampa 30 Ovos - PVC", capacidade: 4 },
  { categoria: "PRIMÁRIA", codigo: "TMP.002", nome: "Tampa 30 Ovos - Polpa", capacidade: 10 },

  { categoria: "PRIMÁRIA", codigo: "ENC.001", nome: "Plástico Encolhível - Selagem", capacidade: 2 },

  { categoria: "SECUNDÁRIA", codigo: "CXA.001", nome: "Caixa 240/360 - Bandeja 30 Ovos", capacidade: 600 },
  { categoria: "SECUNDÁRIA", codigo: "CXA.002", nome: "Caixa 90 - Estojo 06 Ovos", capacidade: 800 },
  { categoria: "SECUNDÁRIA", codigo: "CXA.003", nome: "Caixa 240 - Estojo 10 Jumbo", capacidade: 600 },
  { categoria: "SECUNDÁRIA", codigo: "CXA.005", nome: "Caixa 240 - Estojo 10", capacidade: 1400 },
  { categoria: "SECUNDÁRIA", codigo: "CXA.006", nome: "Caixa 240 - Blister 20 Ovos", capacidade: 1600 },
  { categoria: "SECUNDÁRIA", codigo: "CXA.007", nome: "Caixa 240 - Blister 30 Ovos", capacidade: 600 },
  { categoria: "SECUNDÁRIA", codigo: "CXA.008", nome: "Caixa 270 - Estojo 18 Ovos", capacidade: 300 },

  { categoria: "DIVISÓRIAS", codigo: "DIV.001", nome: "Divisória 240/360 - Bandeja 30 Ovos", capacidade: 1600 },
  { categoria: "DIVISÓRIAS", codigo: "DIV.002", nome: "Divisória 90 - Estojo 06 Ovos", capacidade: 2000 },
  { categoria: "DIVISÓRIAS", codigo: "DIV.003", nome: "Divisória 240 - Estojo 10 Jumbo", capacidade: 1500 },
  { categoria: "DIVISÓRIAS", codigo: "DIV.005", nome: "Divisória 240 - Estojo 10", capacidade: 2000 },
  { categoria: "DIVISÓRIAS", codigo: "DIV.006", nome: "Divisória 240 - Blister 20 Ovos", capacidade: 4800 },
  { categoria: "DIVISÓRIAS", codigo: "DIV.007", nome: "Divisória 240 - Blister 30 Ovos", capacidade: 1600 },
  { categoria: "DIVISÓRIAS", codigo: "DIV.008", nome: "Divisória 270 - Estojo 18 Ovos", capacidade: 750 },

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

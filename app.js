/* ============================================================
   BASE DE EMBALAGENS — SINCRONIZADA COM FIREBASE
============================================================ */

const db = window.db;
let embalagensBase = [];

/* ============================================================
   CARREGAR BASE DO FIREBASE
============================================================ */
firebase.database().ref("embalagensBase").on("value", snapshot => {
  embalagensBase = snapshot.val() || [];
  montarCategorias();
  atualizarTabelaGerenciar();
});

/* ============================================================
   SALVAR BASE
============================================================ */
function salvarBase() {
  firebase.database().ref("embalagensBase").set(embalagensBase);
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
  montarCategorias();
  atualizarTabelaGerenciar();
}

/* ============================================================
   MONTAR CATEGORIAS
============================================================ */
function montarCategorias() {
  const selectCategoria = document.getElementById("categoria");
  if (!selectCategoria) return;

  const categorias = [...new Set(
    embalagensBase.map(e => e.categoria?.trim())
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
   MONTAR EMBALAGENS
============================================================ */
document.getElementById("categoria").addEventListener("change", () => {
  const categoriaSelecionada = document.getElementById("categoria").value;

  const lista = embalagensBase.filter(e => e.categoria === categoriaSelecionada);

  const selectEmbalagem = document.getElementById("embalagem");
  selectEmbalagem.innerHTML = '<option value="">Selecione a embalagem</option>';

  lista.forEach(e => {
    const opt = document.createElement("option");
    opt.value = e.codigo;
    opt.textContent = `${e.codigo} - ${e.nome} (Cap: ${e.capacidade})`;
    selectEmbalagem.appendChild(opt);
  });
});

/* ============================================================
   TABELA GERENCIAR
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
        <button onclick="editarEmbalagem('${e.codigo}')">Editar</button>
        <button onclick="removerEmbalagem('${e.codigo}'); atualizarTabelaGerenciar(); montarCategorias();">Remover</button>
      </td>
    `;

    tbody.appendChild(tr);
  });
}

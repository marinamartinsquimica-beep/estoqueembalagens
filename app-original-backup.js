/* ============================================================
   BASE DE EMBALAGENS (EDITÁVEL)
============================================================ */
const SUPABASE_URL = 'https://vlfnqhfggpztjznopfeq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsZm5xaGZnZ3B6dGp6bm9wZmVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMxMTcxODcsImV4cCI6MjA5ODY5MzE4N30.UkDHTXnZMhFExYMRbczFwKBPZS7dCB5P_u6amAFUjW0';
const supabase = (window.supabase && SUPABASE_URL && !SUPABASE_URL.includes('SEU-PROJETO') && SUPABASE_ANON_KEY && !SUPABASE_ANON_KEY.includes('SUA-CHAVE-ANON'))
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

const APP_VERSION = '2026.07.03.1';
const VERSION_CHECK_URL = 'version.json';
const UPDATE_ALERT_KEY = 'appLastAlertedVersion';

async function checkForUpdates() {
  try {
    const response = await fetch(new URL(VERSION_CHECK_URL, window.location.href), { cache: 'no-store' });
    if (!response.ok) return;

    const { version } = await response.json();
    const lastAlertedVersion = localStorage.getItem(UPDATE_ALERT_KEY);

    if (version && version !== APP_VERSION && lastAlertedVersion !== version) {
      alert('Há uma atualização disponível para este app. Recarregue a página para aplicar a nova versão.');
      localStorage.setItem(UPDATE_ALERT_KEY, version);
    } else if (!lastAlertedVersion) {
      localStorage.setItem(UPDATE_ALERT_KEY, APP_VERSION);
    }
  } catch (error) {
    console.warn('Não foi possível verificar atualizações:', error);
  }
}

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
  { categoria: "PRIMÁRIA", codigo: "BLT.008", nome: "Blister 20 - Grande Benassi", capacidade: 5 },
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

function salvarBase() {
  localStorage.setItem("embalagensBase", JSON.stringify(embalagensBase));
}

function aplicarBaseRemota(data) {
  embalagensBase = Array.isArray(data) ? data : [];
  salvarBase();
  atualizarTabelaGerenciar();
  montarCategorias();
}

async function carregarBaseRemota() {
  if (!supabase) {
    console.warn('Supabase não configurado. Usando base local.');
    salvarBase();
    return embalagensBase;
  }

  try {
    const { data, error } = await supabase.from('embalagens').select('*').order('codigo');
    if (error) throw error;
    aplicarBaseRemota(data || []);
    return data || [];
  } catch (error) {
    console.warn('Usando base local por enquanto:', error);
    salvarBase();
    return embalagensBase;
  }
}

function iniciarSincronizacaoRemota() {
  if (!supabase) return;

  const channel = supabase.channel('embalagens-sync');
  channel.on('postgres_changes', { event: '*', schema: 'public', table: 'embalagens' }, () => {
    carregarBaseRemota();
  }).subscribe();
}

/* ============================================================
   ADICIONAR / REMOVER / EDITAR EMBALAGEM
============================================================ */
async function adicionarEmbalagem(categoria, codigo, nome, capacidade) {
  if (!supabase) {
    alert('Supabase não configurado. Configure a URL e a chave anon para sincronizar.');
    return;
  }

  try {
    const { error } = await supabase.from('embalagens').insert([{ categoria, codigo, nome, capacidade: Number(capacidade) }]);
    if (error) throw error;
  } catch (error) {
    console.error(error);
    alert('Não foi possível salvar a embalagem no Supabase.');
  }
}

async function removerEmbalagem(codigo) {
  if (!supabase) {
    alert('Supabase não configurado. Configure a URL e a chave anon para sincronizar.');
    return;
  }

  try {
    const { error } = await supabase.from('embalagens').delete().eq('codigo', codigo);
    if (error) throw error;
  } catch (error) {
    console.error(error);
    alert('Não foi possível remover a embalagem no Supabase.');
  }
}

async function editarEmbalagem(codigo) {
  const item = embalagensBase.find(e => e.codigo === codigo);
  if (!item) return;

  const novaCategoria = prompt("Nova categoria:", item.categoria);
  const novoNome = prompt("Novo nome:", item.nome);
  const novaCapacidade = prompt("Nova capacidade:", item.capacidade);

  if (!novaCategoria || !novoNome || isNaN(novaCapacidade)) {
    alert("Valores inválidos.");
    return;
  }

  if (!supabase) {
    alert('Supabase não configurado. Configure a URL e a chave anon para sincronizar.');
    return;
  }

  try {
    const { error } = await supabase.from('embalagens').update({
      categoria: novaCategoria.trim(),
      nome: novoNome.trim(),
      capacidade: Number(novaCapacidade)
    }).eq('codigo', codigo);

    if (error) throw error;
  } catch (error) {
    console.error(error);
    alert('Não foi possível editar a embalagem no Supabase.');
  }
}

/* ============================================================
   MONTAR CATEGORIAS / EMBALAGENS
============================================================ */
function montarCategorias() {
  const selectCategoria = document.getElementById("categoria");
  if (!selectCategoria) return;

  const categorias = [...new Set(embalagensBase.map(e => e.categoria.trim()))].sort();

  selectCategoria.innerHTML = '<option value="">Selecione a categoria</option>';
  categorias.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    selectCategoria.appendChild(opt);
  });

  selectCategoria.onchange = () => montarEmbalagens(selectCategoria.value);
}

function montarEmbalagens(categoriaSelecionada) {
  const lista = embalagensBase.filter(e => e.categoria.toUpperCase() === categoriaSelecionada.toUpperCase());
  const selectEmbalagem = document.getElementById("embalagem");
  selectEmbalagem.innerHTML = '<option value="">Selecione a embalagem</option>';

  lista.forEach(e => {
    const opt = document.createElement("option");
    opt.value = e.codigo; // mantém o código como valor
    opt.textContent = `${e.codigo} - ${e.nome} (Cap: ${e.capacidade})`; // mostra capacidade máxima
    selectEmbalagem.appendChild(opt);
  });
}

/* ============================================================
   ITENS DO PEDIDO
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

  // Busca a embalagem selecionada na base pelo código
  const itemBase = embalagensBase.find(e => e.codigo.trim() === codigo.trim());
  if (!itemBase) {
    alert("Embalagem não encontrada na base.");
    return;
  }

  // Capacidade máxima da embalagem
  const capacidade = Number(itemBase.capacidade || 0);

  // Cálculo do que precisa pedir (não deixa negativo)
  const pedir = Math.max(capacidade - estoqueAtual, 0);

  // Adiciona ao array de itens do pedido
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

/* ============================================================
   TABELA PRINCIPAL COM BOTÕES EDITAR / REMOVER
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
      <td>PEDIDO ${item.pedir}</td>
      <td>
          <button class="btnEditar">Editar</button>
          <button class="btnExcluir">Excluir</button>
        </td>
    `;

    // Botão Excluir
    tr.querySelector(".btnExcluir").addEventListener("click", () => {
      if (!confirm(`Deseja excluir o item: ${item.codigo} - ${item.descricao}?`)) return;
      itensPedido.splice(index, 1);
      salvarPedido();
      atualizarTabela();
    });

    // Botão Editar
    tr.querySelector(".btnEditar").addEventListener("click", () => {
      document.getElementById("data").value = item.data;
      document.getElementById("categoria").value = item.categoria;
      document.getElementById("embalagem").value = item.codigo;
      document.getElementById("estoqueAtual").value = item.estoqueAtual;

      itensPedido.splice(index, 1);
      salvarPedido();
      atualizarTabela();
    });

    tbody.appendChild(tr);
  });
}

document.getElementById("addItemBtn").addEventListener("click", adicionarItem);



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
function formatDateBR(dateString) {
  if (!dateString) return "";
  const parts = dateString.split("-");
  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  const parsed = new Date(dateString);
  if (!isNaN(parsed)) {
    return parsed.toLocaleDateString("pt-BR");
  }
  return dateString;
}

document.getElementById("gerarPlanilhaBtn").addEventListener("click", () => {
  if (!itensPedido.length) {
    alert("Nenhum item no pedido.");
    return;
  }

  const dados = [
    ["Data", "Categoria", "Código", "Descrição", "Estoque", "Pedir"],
    ...itensPedido.map(i => [
      formatDateBR(i.data),
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
function preencherTabelaGerenciar(tbody, showEdit, showRemove) {
  if (!tbody) return;
  tbody.innerHTML = "";
  embalagensBase.forEach(e => {
    const tr = document.createElement("tr");
    const actions = [];

    if (showEdit) {
      actions.push(`<button class="btnEditar" onclick="editarEmbalagem('${e.codigo}')">Editar</button>`);
    }
    if (showRemove) {
      actions.push(`<button class="btnRemover" onclick="removerEmbalagem('${e.codigo}'); atualizarTabelaGerenciar(); montarCategorias();">Remover</button>`);
    }

    tr.innerHTML = `
      <td>${e.categoria}</td>
      <td>${e.codigo}</td>
      <td>${e.nome}</td>
      <td>${e.capacidade}</td>
      <td>${actions.join('')}</td>
    `;
    tbody.appendChild(tr);
  });
}

function atualizarTabelaGerenciar() {
  preencherTabelaGerenciar(document.querySelector("#tabelaGerenciarEditar tbody"), true, false);
  preencherTabelaGerenciar(document.querySelector("#tabelaGerenciarRemover tbody"), false, true);
}

function setupGerenciarTabs() {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
      const tabId = btn.getAttribute("data-tab");
      const target = document.getElementById(tabId);
      if (target) target.classList.add("active");
    });
  });
}

/* ============================================================
   INICIALIZAÇÃO
============================================================ */
document.addEventListener("DOMContentLoaded", async () => {
  await carregarBaseRemota();
  iniciarSincronizacaoRemota();
  montarCategorias();
  atualizarTabelaGerenciar();
  atualizarTabela();
  setupGerenciarTabs();
  // Listener para adicionar nova embalagem pela UI de gerenciamento
  const btnAdicionar = document.getElementById("btnAdicionar");
  if (btnAdicionar) {
    btnAdicionar.addEventListener("click", async () => {
      const categoria = (document.getElementById("novaCategoria").value || "").trim();
      const codigo = (document.getElementById("novoCodigo").value || "").trim();
      const nome = (document.getElementById("novoNome").value || "").trim();
      const capacidadeRaw = document.getElementById("novaCapacidade").value;
      const capacidade = Number(capacidadeRaw);

      if (!categoria || !codigo || !nome || isNaN(capacidade)) {
        alert("Preencha todos os campos corretamente antes de adicionar.");
        return;
      }

      await adicionarEmbalagem(categoria, codigo, nome, capacidade);

      // limpa campos
      document.getElementById("novaCategoria").value = "";
      document.getElementById("novoCodigo").value = "";
      document.getElementById("novoNome").value = "";
      document.getElementById("novaCapacidade").value = "";
    });
  }
});

// PWA install prompt handling
let deferredInstallPrompt = null;
let installHideTimeout = null;
function isStandaloneMode() {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}
function hideInstallBanner() {
  const banner = document.getElementById('installBanner');
  if (!banner) return;
  banner.classList.remove('show');
  clearTimeout(installHideTimeout);
  installHideTimeout = null;
  setTimeout(() => {
    if (banner) banner.style.display = 'none';
  }, 230);
}
function showInstallBanner() {
  const banner = document.getElementById('installBanner');
  if (banner && !isStandaloneMode()) {
    banner.style.display = 'inline-flex';
    requestAnimationFrame(() => banner.classList.add('show'));
    clearTimeout(installHideTimeout);
    installHideTimeout = setTimeout(hideInstallBanner, 6000);
  }
}

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  showInstallBanner();
});

window.addEventListener('DOMContentLoaded', () => {
  if (isStandaloneMode()) {
    const banner = document.getElementById('installBanner');
    if (banner) banner.style.display = 'none';
  }

  const installBanner = document.getElementById('installBanner');
  const installClose = document.getElementById('installClose');

  if (installBanner) {
    installBanner.addEventListener('click', async (event) => {
      if (event.target.closest('#installClose')) return;
      if (!deferredInstallPrompt) return;

      deferredInstallPrompt.prompt();
      const choice = await deferredInstallPrompt.userChoice;
      if (choice.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredInstallPrompt = null;
      hideInstallBanner();
    });
  }

  if (installClose) {
    installClose.addEventListener('click', (event) => {
      event.stopPropagation();
      hideInstallBanner();
    });
  }

  if (deferredInstallPrompt) {
    showInstallBanner();
  }
});

// Register service worker if available
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js').then(() => {
    console.log('Service Worker registered');
  }).catch(err => console.warn('SW registration failed:', err));
}

// log when installed and provide user feedback
window.addEventListener('appinstalled', (evt) => {
  console.log('PWA foi instalada.');
  alert('Aplicativo instalado com sucesso! Você pode abrir pelo menu de aplicativos.');
});

document.getElementById("btnGerenciar").addEventListener("click", () => {
  const tela = document.querySelector(".gerenciar");
  tela.style.display = "block";
  tela.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("btnRecolher").addEventListener("click", () => {
  const tela = document.querySelector(".gerenciar");
  tela.style.display = "none";
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener('load', () => {
  const splash = document.getElementById('splashOverlay');
  if (splash) {
    setTimeout(() => {
      splash.style.opacity = '0';
      setTimeout(() => splash.remove(), 500);
    }, 2200);
  }
});

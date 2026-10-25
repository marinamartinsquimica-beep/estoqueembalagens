# Controle de Embalagens — versão 2026.10.25.2

Criado por Marina Martins Costa

Versão profissional com dashboard, menu lateral, navegação mobile inferior, funcionamento offline e sincronização automática com servidor quando houver conexão.

Principais pontos:
- Sem botão sincronizar: sincroniza automaticamente.
- Guarda alterações offline e envia quando a internet volta.
- Layout responsivo com tabelas em formato de cards no celular.
- Backup local em JSON.


## Atualização automática

Esta versão possui atualização automática via Service Worker. Ao publicar uma nova versão no GitHub Pages, o app baixa os arquivos em segundo plano e exibe o aviso **Nova versão disponível**. Ao clicar em **Atualizar agora**, a página recarrega usando a versão nova, sem apagar os dados locais ou os dados do servidor.

# Supabase - passo a passo

Você já criou as tabelas e carregou a tabela `embalagens`.

Para esta versão funcionar com pedidos sincronizados, confirme que existe a tabela:

- `embalagens`
- `pedidos_embalagens`

A tabela `pedidos_embalagens` deve ter estas colunas:

```sql
id uuid primary key,
data date not null,
categoria text not null,
codigo text not null,
descricao text not null,
capacidade integer not null default 0,
estoque_atual integer not null default 0,
pedir integer not null default 0,
created_at timestamptz default now(),
updated_at timestamptz default now()
```

A sincronização é automática:

1. Se estiver online, salva no Supabase na hora.
2. Se estiver offline, salva no aparelho.
3. Quando a internet voltar, envia a fila pendente automaticamente.

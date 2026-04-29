# 🛠️ Guia de Desenvolvimento - Codworks Moz

Este guia detalha como configurar o ambiente local e utilizar as ferramentas de produtividade.

## 🔓 Bypass de Autenticação (Modo Visualização)

Para testar a plataforma sem configurar o Supabase Auth ou sem ter uma conta real, podes ativar o **Dev Bypass**.

### Como Ativar:
No teu ficheiro `.env.local` (ou no painel da Vercel/Netlify), adiciona:

```env
NEXT_PUBLIC_DEV_BYPASS_AUTH=true
```

### O que acontece:
1. **Middleware:** Ignora a verificação de sessão, permitindo acesso a todas as rotas protegidas (`/dashboard`, `/learn`, etc.).
2. **AuthContext:** Injeta um utilizador e perfil fictícios ("Engenheiro de Elite") com pontos e streak pré-configurados.
3. **Persistência:** As alterações de perfil e progresso serão refletidas apenas localmente durante a sessão de bypass.

---

## 🚀 Transição para Dados Reais (Produção)

Quando estiveres pronto para usar o Supabase real, segue estes 3 passos:

### 1. Desativar o Bypass
Muda a variável no `.env.local` para `false` ou remove-a:
```env
NEXT_PUBLIC_DEV_BYPASS_AUTH=false
```

### 2. Configurar chaves do Supabase
Garante que tens as tuas chaves oficiais configuradas:
```env
NEXT_PUBLIC_SUPABASE_URL="https://teu-projeto.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="tua-chave-anonima"
```

### 3. Preparar a Base de Dados
Copia o conteúdo de `docs/supabase_schema.sql` e executa-o no **SQL Editor** do painel do Supabase. Isto criará as tabelas de perfis, progresso e ranking necessárias.

---

## 🏗️ Estrutura do Projeto

- `src/app/`: Rotas e componentes de página.
- `src/contexts/`: Gestão de estado global (Auth, Progresso).
- `src/lib/curriculum/`: O "Cérebro" da plataforma. Todas as lições e exercícios residem aqui.

## 🧪 Testando Laboratórios

Se quiseres testar a lógica de um laboratório específico sem completar os anteriores:
1. Ativa o `DEV_BYPASS`.
2. Navega diretamente para `/learn/ID_DA_LIÇÃO` (ex: `/learn/cs-p1`).

---
© 2024 Codworks Moz. Construindo o futuro da engenharia.
# Guia de Configuração e Migração: Supabase

Este documento fornece um guia passo a passo para conectar sua aplicação a uma instância do Supabase, incluindo a configuração de autenticação e banco de dados.

## Por que Supabase?

O `localStorage` é excelente para prototipagem, mas o Supabase oferece uma solução robusta e escalável, resolvendo problemas críticos para uma aplicação em produção:
- **Persistência de Dados:** O progresso e a conta de um usuário funcionam em qualquer navegador ou dispositivo.
- **Segurança:** A autenticação é gerenciada de forma segura, e os dados são protegidos por políticas de segurança a nível de linha (RLS).
- **Escalabilidade:** Permite funcionalidades avançadas como fóruns em tempo real, leaderboards e análise de dados no servidor.

---

## Passo a Passo para a Configuração

### 1. Crie seu Projeto no Supabase

Se ainda não o fez, vá para [supabase.com](https://supabase.com), crie uma conta e um novo projeto. Escolha o plano gratuito ("Free tier"), que é mais que suficiente para começar.

### 2. Configure as Variáveis de Ambiente

Para que a sua aplicação possa se comunicar com o Supabase, você precisa das chaves da API.

1.  No painel do seu projeto Supabase, vá para **Project Settings** (ícone de engrenagem) > **API**.
2.  Encontre as seguintes chaves:
    *   **Project URL**
    *   **Project API Keys** > `anon` `public`
3.  Abra o arquivo `.env` na raiz do seu projeto e substitua os valores de placeholder pelos seus:

    ```bash
    # Substitua pelos valores do seu projeto Supabase
    NEXT_PUBLIC_SUPABASE_URL="SUA_URL_AQUI"
    NEXT_PUBLIC_SUPABASE_ANON_KEY="SUA_CHAVE_ANON_AQUI"
    ```

### 3. Aplique o Schema do Banco de Dados

A estrutura do banco de dados (tabelas, funções, políticas de segurança) está definida em `docs/supabase_schema.sql`.

1.  No painel do Supabase, vá para o **SQL Editor** (ícone de `</>`).
2.  Clique em **+ New query**.
3.  Copie **todo** o conteúdo do arquivo `docs/supabase_schema.sql` e cole no editor.
4.  Clique em **RUN**. Isso criará todas as tabelas e políticas necessárias para a aplicação funcionar.

### 4. Popule o Banco de Dados (Opcional, mas Recomendado)

Para que o currículo apareça nas páginas, você precisa popular as tabelas.

1.  Ainda no **SQL Editor**, crie uma nova query.
2.  Copie todo o conteúdo do arquivo `docs/supabase_seed.sql` e cole no editor.
3.  Clique em **RUN**. Isso irá inserir todos os níveis, áreas de conhecimento, lições e exercícios no banco de dados.

### 5. Configure a Autenticação com GitHub

Para permitir que os usuários façam login com o GitHub, você precisa configurar o provedor de OAuth.

1.  **No Supabase:**
    *   Vá para **Authentication** > **Providers**.
    *   Clique em **GitHub** e ative-o. Você verá um **Callback URL**. Copie este URL.

2.  **No GitHub:**
    *   Vá para o seu perfil > **Settings** > **Developer settings** > **OAuth Apps** > **New OAuth App**.
    *   Preencha o formulário:
        *   **Application name:** Codworks MOZ (ou o nome que preferir).
        *   **Homepage URL:** `http://localhost:9002` (para desenvolvimento local).
        *   **Authorization callback URL:** Cole o Callback URL que você copiou do Supabase.
    *   Clique em **Register application**.

3.  **Finalize a Configuração:**
    *   Na página da sua OAuth App no GitHub, clique em **Generate a new client secret**.
    *   Copie o **Client ID** e o **Client secret** gerado.
    *   Volte para o painel do Supabase (onde você ativou o GitHub) e cole o **Client ID** e o **Client Secret** nos campos correspondentes.
    *   Clique em **Save**.

---

Após seguir estes passos, sua aplicação estará totalmente configurada para rodar localmente, conectada à sua própria instância do Supabase. Basta executar `npm run dev` e começar a usar!

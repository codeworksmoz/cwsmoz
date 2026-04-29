# 🗄️ Configuração Final do Supabase - Codworks Moz

A plataforma utiliza um modelo de **Currículo Híbrido**:
- **Conteúdo (Aulas/Labs/Quizzes):** Estático, versionado no Git em `src/lib/curriculum/`.
- **Estado (Perfis/Progresso/Comunidade):** Dinâmico, armazenado no Supabase.

## 🚀 Passos para o Deploy

### 1. Executar o Schema
Aceda ao **SQL Editor** no painel do Supabase e execute o conteúdo do ficheiro:
👉 `docs/supabase_schema.sql`

### 2. Configurar os Templates de Email
Aceda a **Authentication > Email Templates** e cole o conteúdo dos ficheiros em `docs/email-templates/`:
- `signup-confirmation.html` -> Confirm signup
- `password-changed.html` -> Password change (Security)
- `email-changed.html` -> Email change (Security)
- `mfa-added.html` -> MFA added (Security)

### 3. Variáveis de Ambiente
Verifique se o seu ficheiro `.env.local` contém:
```env
NEXT_PUBLIC_SUPABASE_URL=https://teu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tua-chave-anon
```

---
**Nota:** Como as aulas estão no Git, não precisas de um script `seed` para o conteúdo. O banco de dados está pronto para registar o progresso assim que o primeiro aluno completar uma lição.
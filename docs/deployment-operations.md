# 🚀 Operações e Deployment - Codworks Moz

Guia de lançamento e manutenção da infraestrutura.

## 1. Plataformas de Lançamento
- **Vercel (Primário):** Deploy automático a cada push no branch `main`.
- **Netlify (Redundância):** Configuração via `netlify.toml` pronta.

## 2. Variáveis de Ambiente Obrigatórias
```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
GOOGLE_GENAI_API_KEY=...
NEXT_PUBLIC_DEV_BYPASS_AUTH=false
```

## 3. Pipeline de CI/CD (GitHub Actions)
1. **Linting:** Verifica o estilo de código com ESLint.
2. **Typecheck:** Valida a integridade do TypeScript.
3. **Build:** Gera a versão de produção do Next.js.
4. **Deploy:** Envia para o ambiente de Staging para validação final.

## 4. Monitorização
- **Sentry/LogRocket:** Captura de erros em runtime no cliente.
- **Supabase Logs:** Auditoria de performance de queries SQL.

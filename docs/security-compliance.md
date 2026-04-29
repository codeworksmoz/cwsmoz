# 🛡️ Segurança e Conformidade - Codworks Moz

Implementamos padrões industriais para proteger a identidade e os dados dos nossos engenheiros.

## 1. Autenticação de Elite
- **Provedores:** Google, GitHub e Magic Links (Passwordless).
- **MFA:** Suporte para autenticação de dois fatores via Supabase Auth.
- **Sessions:** Gestão de tokens JWT seguros via cookies `HttpOnly` e `SameSite=Lax`.

## 2. Proteção de Dados (GDPR/LGPD)
- **Privacidade:** Recolha mínima de dados (PII).
- **Direito ao Esquecimento:** Funcionalidade de eliminação de conta que remove todos os registos e progresso do banco.

## 3. Segurança de Interface
- **Sanitização:** Uso da **Sanitizer API** nativa e `textContent` para evitar ataques XSS.
- **CSP:** Política de segurança de conteúdo que bloqueia scripts externos não autorizados.
- **Trusted Types:** Configuração de políticas de confiança para manipulação do DOM.

## 4. Segurança de Infraestrutura
- **RLS:** Row Level Security garante que um aluno nunca veja o código ou dados privados de outro.
- **SSL:** TLS 1.3 obrigatório em todas as comunicações.

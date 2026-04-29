# 🏗️ Arquitetura do Sistema - Codworks Moz

A plataforma Codworks Moz utiliza um **Modelo de Currículo Híbrido** de última geração, desenhado para máxima performance e integridade pedagógica.

## 1. O Modelo Híbrido
O sistema separa o conteúdo estático do estado dinâmico:
- **Conteúdo (Git-based):** Lições, laboratórios e quizzes residem em ficheiros TypeScript no repositório. Isto garante versionamento, code-review de conteúdo e zero latência de base de dados para carregar aulas.
- **Estado (Cloud-based):** Progresso dos alunos, pontos, ranking e interações da comunidade residem no **Supabase**.

## 2. Stack Tecnológica
- **Framework:** Next.js 15 (App Router).
- **Rendering:** React Server Components (RSC) por padrão para SEO e velocidade.
- **Runtime:** Node.js 20+.
- **Interatividade:** Client Components isolados para o Editor de Código e Quizzes.

## 3. Fluxo de Dados
1. O utilizador acede a uma rota `/learn/[id]`.
2. O motor `findKnowledgeAreaByLessonId` localiza o conteúdo estático no diretório `src/lib/curriculum/`.
3. O `ProgressContext` verifica no Supabase se aquela lição já foi concluída.
4. O utilizador interage (escreve código ou responde quiz).
5. Ao concluir, o `progressService` envia o sinal para o Supabase, que dispara um `Trigger SQL` para atualizar o ranking global.

## 4. Decisões Arquiteturais (ADR Summary)
- **Zero-JS Inicial:** Uso massivo de CSS e RSC para que a página inicial e módulos carreguem instantaneamente.
- **Isolamento de Runtime:** Laboratórios correm em iframes com `sandbox` para proteger a thread principal do browser.
- **Tipagem Forte:** Todo o currículo é validado por interfaces TypeScript, impedindo que lições incompletas quebrem a UI.

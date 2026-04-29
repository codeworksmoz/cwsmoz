import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p12",
  language: "html",
  title: "Projeto Master: Padrões ARIA de Interface",
  description: "Implemente comportamentos complexos com semântica rica.",
  statement: "Crie a estrutura de um sistema de abas no seu portal.",
  isProjectPart: true,
  youtubeVideoId: "u044iM9xsTM",
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
  <head>
    <title>Codworks Master Studio</title>
  </head>
  <body>
    <main role="main">
      <section id="tabs-section">
        <!-- Ação 1: Construa o sistema de abas aqui -->
      </section>
    </main>
  </body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Passo a Passo: Abas Acessíveis</h3>
      <p class="text-sm">Implemente o esqueleto das abas usando ARIA:</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> Crie um <code>&lt;div role="tablist"&gt;</code>.</p>
        <p><strong>Ação 2:</strong> Adicione um <code>&lt;button role="tab" id="tab1" aria-controls="panel1"&gt;</code>.</p>
        <p><strong>Ação 3:</strong> Crie o painel: <code>&lt;div id="panel1" role="tabpanel" aria-labelledby="tab1"&gt;</code>.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "role_tablist", description: "Usar role='tablist'", test: "role=\"tablist\"" },
    { id: "aria_controls", description: "Ligar aba ao painel via aria-controls", test: "aria-controls=" },
    { id: "role_panel", description: "Usar role='tabpanel'", test: "role=\"tabpanel\"" }
  ]
};
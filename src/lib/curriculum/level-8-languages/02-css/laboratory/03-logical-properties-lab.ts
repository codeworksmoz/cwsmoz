import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p3",
  language: "html",
  title: "Projeto Master: Propriedades Lógicas Internacionais",
  description: "Desenhe layouts que se adaptam a qualquer direção de escrita.",
  statement: "Substitua margens físicas por propriedades lógicas start/end.",
  isProjectPart: true,
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
<head>
  <style>
    @layer reset, base, components;
    @layer base {
      :root { --primary: #3b82f6; }
      body { background: #0f172a; color: white; }
    }
  </style>
</head>
<body>
  <main role="main">
    <section class="card">
      <h2>Conteúdo Global</h2>
    </section>
  </main>
</body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🌍 Engenharia Multi-direcional</h3>
      <p class="text-sm">Substitua <code>margin-left</code> por <code>margin-inline-start</code>. Isto garante que em línguas RTL (como o Árabe), a margem mude de lado automaticamente.</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> Crie a camada <code>@layer components</code>.</p>
        <p><strong>Ação 2:</strong> Adicione <code>.card { margin-inline-start: 20px; padding-block: 15px; }</code>.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "logical_margin", description: "Usar margin-inline-start", test: "margin-inline-start" },
    { id: "logical_padding", description: "Usar padding-block", test: "padding-block" }
  ]
};

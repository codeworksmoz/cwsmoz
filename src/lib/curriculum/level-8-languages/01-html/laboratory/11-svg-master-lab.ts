import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p11",
  language: "html",
  title: "Projeto Master: Gráficos Vetoriais Nativos",
  description: "Integre o logotipo do portal usando SVG.",
  statement: "Adicione um gráfico SVG ao seu cabeçalho mantendo a acessibilidade.",
  isProjectPart: true,
  youtubeVideoId: "u044iM9xsTM",
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
  <head>
    <meta charset="UTF-8">
    <title>Codworks Master Studio</title>
  </head>
  <body>
    <header>
      <div class="logo-area">
        <!-- Ação 1: Adicione o SVG aqui -->
      </div>
    </header>
  </body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Passo a Passo: Vetores Master</h3>
      <p class="text-sm">No local indicado, desenhe o logo vetorial:</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> Tag <code>&lt;svg viewBox="0 0 100 100" role="img"&gt;</code>.</p>
        <p><strong>Ação 2:</strong> Adicione <code>&lt;title&gt;Logo Codworks&lt;/title&gt;</code> internamente.</p>
        <p><strong>Ação 3:</strong> Desenhe um círculo simples: <code>&lt;circle cx="50" cy="50" r="40" fill="blue" /&gt;</code>.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "svg_role", description: "Definir role='img' no SVG", test: "role=\"img\"" },
    { id: "svg_title", description: "Incluir tag <title> interna", test: "<title>" },
    { id: "svg_geometry", description: "Desenhar forma <circle>", test: "<circle" }
  ]
};
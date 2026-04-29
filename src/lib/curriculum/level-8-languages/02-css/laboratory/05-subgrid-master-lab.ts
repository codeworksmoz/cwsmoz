import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p5",
  language: "html",
  title: "Projeto Master: Alinhamento com Subgrid",
  description: "Sincronize grelhas internas com o layout pai.",
  statement: "Implemente o alinhamento de linhas de um card usando a trilha do grid pai.",
  isProjectPart: true,
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
<head>
  <style>
    .grid-parent {
      display: grid;
      grid-template-rows: auto auto;
      gap: 20px;
    }
    .card {
      display: grid;
      grid-row: span 2;
      /* Ação 1: Ative o subgrid aqui */
    }
  </style>
</head>
<body>
  <div class="grid-parent">
    <div class="card">
      <h3>Título</h3>
      <p>Descrição</p>
    </div>
  </div>
</body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">📐 Perfeição Geométrica</h3>
      <p class="text-sm">O <code>subgrid</code> permite que as linhas de um elemento filho se alinhem com as linhas definidas no pai. É a solução master para cards com tamanhos variados.</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> No seletor <code>.card</code>, adicione <code>grid-template-rows: subgrid;</code>.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "subgrid_active", description: "Utilizar a propriedade subgrid", test: "grid-template-rows: subgrid" }
  ]
};

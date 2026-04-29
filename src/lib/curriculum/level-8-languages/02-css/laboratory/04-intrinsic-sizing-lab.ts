import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p4",
  language: "html",
  title: "Projeto Master: Dimensionamento Intrínseco",
  description: "Deixe o conteúdo ditar o tamanho dos elementos de forma inteligente.",
  statement: "Utilize 'fit-content' para criar um cabeçalho que se adapta ao texto.",
  isProjectPart: true,
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
<head>
  <style>
    @layer base { body { background: #0f172a; color: white; } }
    @layer components {
      .badge { background: #3b82f6; padding: 5px 10px; }
    }
  </style>
</head>
<body>
  <span class="badge">Nível Master</span>
</body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">📏 Conteúdo Soberano</h3>
      <p class="text-sm">A propriedade <code>width: fit-content</code> garante que o elemento ocupe apenas o espaço necessário, evitando que blocos de texto "vazem" ou fiquem demasiado largos.</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> Aplique <code>width: fit-content;</code> à classe <code>.badge</code>.</p>
        <p><strong>Ação 2:</strong> Adicione <code>max-width: 200px;</code> para segurança.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "fit_content", description: "Aplicar width: fit-content", test: "width: fit-content" },
    { id: "max_w", description: "Definir max-width de segurança", test: "max-width: 200px" }
  ]
};


import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p7",
  language: "html",
  title: "Projeto Master: Tipografia Fluida com clamp()",
  description: "Elimine a necessidade de múltiplas media queries para fontes.",
  statement: "Defina o tamanho da fonte do h1 usando clamp() com valores entre 1.5rem e 4rem.",
  isProjectPart: true,
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
<head>
  <style>
    @layer base {
      body { background: #0f172a; color: white; }
      h1 {
        /* Ação 1: Use o clamp para tipografia fluida */
        font-size: clamp(1.5rem, 5vw + 1rem, 4rem);
      }
    }
  </style>
</head>
<body>
  <h1>Título de Engenharia</h1>
</body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🧮 Matemática Visual</h3>
      <p class="text-sm">O <code>clamp(min, ideal, max)</code> cria uma transição suave e automática de tamanho, garantindo legibilidade em qualquer ecrã.</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> No <code>h1</code>, aplique <code>font-size: clamp(1.5rem, 5vw + 1rem, 4rem);</code>.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "clamp_usage", description: "Utilizar font-size: clamp", test: "font-size: clamp" }
  ]
};

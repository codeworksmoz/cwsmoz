
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p10",
  language: "html",
  title: "Projeto Master: Glassmorphism e Backdrop",
  description: "Crie interfaces modernas com transparência e desfoque.",
  statement: "Aplique um 'backdrop-filter: blur(10px)' ao seu cabeçalho fixo.",
  isProjectPart: true,
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
<head>
  <style>
    body { background: linear-gradient(45deg, #0f172a, #3b82f6); height: 200vh; }
    
    header {
      position: sticky;
      top: 0;
      width: 100%;
      padding: 20px;
      /* Ação 1: Background transparente e blur */
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      color: white;
    }
  </style>
</head>
<body>
  <header>Header Master</header>
</body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">💎 Efeito Vidro</h3>
      <p class="text-sm">O <code>backdrop-filter</code> aplica efeitos ao que está ATRÁS do elemento, criando a ilusão de profundidade.</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> Use <code>backdrop-filter: blur(10px);</code> no <code>header</code>.</p>
        <p><strong>Ação 2:</strong> Garanta o fundo com alpha: <code>background: rgba(255, 255, 255, 0.1);</code>.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "backdrop_blur", description: "Aplicar backdrop-filter: blur", test: "backdrop-filter: blur" },
    { id: "alpha_bg", description: "Usar background com canal alpha", test: "rgba(" }
  ]
};

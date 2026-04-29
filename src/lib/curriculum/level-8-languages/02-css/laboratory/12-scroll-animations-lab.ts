
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p12",
  language: "html",
  title: "Projeto Master: Scroll-driven Animations",
  description: "Animações sincronizadas com a rolagem da página.",
  statement: "Utilize 'animation-timeline: scroll()' para fazer uma barra de progresso no topo da página.",
  isProjectPart: true,
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
<head>
  <style>
    body { height: 300vh; background: #0f172a; margin: 0; }
    
    .progress-bar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 10px;
      background: #3b82f6;
      transform-origin: 0% 50%;
      
      /* Ação 1: Ligue ao scroll */
      animation: grow auto linear;
      animation-timeline: scroll();
    }

    @keyframes grow {
      from { transform: scaleX(0); }
      to { transform: scaleX(1); }
    }
  </style>
</head>
<body>
  <div class="progress-bar"></div>
</body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">📜 Rolo do Tempo</h3>
      <p class="text-sm">Esta funcionalidade de elite elimina a necessidade de listeners de scroll em JavaScript.</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> Adicione <code>animation-timeline: scroll();</code> à <code>.progress-bar</code>.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "scroll_anim", description: "Usar animation-timeline: scroll()", test: "animation-timeline: scroll()" }
  ]
};

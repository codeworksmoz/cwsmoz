
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p9",
  language: "html",
  title: "Projeto Master: High-Performance Animations",
  description: "Crie animações que não travam o browser.",
  statement: "Crie um keyframe de 'fade-in' usando apenas transform e opacity para garantir 60 FPS.",
  isProjectPart: true,
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
<head>
  <style>
    @layer base {
      body { background: #0f172a; color: white; }
      
      .box {
        width: 100px;
        height: 100px;
        background: #3b82f6;
        /* Ação 1: Prepare a GPU */
        will-change: transform, opacity;
        animation: entrance 1s forwards;
      }

      /* Ação 2: Defina o Keyframe performático */
      @keyframes entrance {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🏎️ Animação de Silício</h3>
      <p class="text-sm">Animar <code>width</code> causa 'Reflow'. Animar <code>transform</code> usa apenas o chip gráfico (GPU), mantendo a fluidez total.</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> Adicione <code>will-change: transform, opacity;</code> à <code>.box</code>.</p>
        <p><strong>Ação 2:</strong> No <code>@keyframes</code>, use <code>transform: translateY(0);</code> para o estado final.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "gpu_accel", description: "Usar will-change", test: "will-change" },
    { id: "transform_anim", description: "Animar via transform", test: "transform: translateY" }
  ]
};

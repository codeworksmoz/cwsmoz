import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p13",
  language: "html",
  title: "Projeto Master: Cores Modernas e color-mix()",
  description: "Implemente o novo padrão de cores e estados dinâmicos.",
  statement: "Utilize o oklch() para a cor primária e color-mix() para o estado de hover do botão.",
  isProjectPart: true,
  youtubeVideoId: "u044iM9xsTM",
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
<head>
  <style>
    @layer base, components;
    @layer base {
      :root {
        /* Ação 1: Mude para oklch(60% 0.15 250) */
        --primary: oklch(60% 0.15 250);
        --bg: #0f172a;
      }
      body { background: var(--bg); color: white; font-family: sans-serif; }
    }
    @layer components {
      .btn {
        background: var(--primary);
        padding: 15px 30px;
        border: none;
        border-radius: 12px;
        color: white;
        font-weight: bold;
        cursor: pointer;
        transition: transform 0.2s, background 0.3s;
      }
      .btn:hover {
        transform: scale(1.05);
        /* Ação 2: Use color-mix para escurecer 20% no espaço oklab */
        background: color-mix(in oklab, var(--primary), black 20%);
      }
    }
  </style>
</head>
<body>
  <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
    <button class="btn">Botão de Elite</button>
  </div>
</body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🌈 Engenharia Cromática</h3>
      <p class="text-sm">O <code>color-mix()</code> permite criar variações dinâmicas de cores diretamente no CSS. Isto elimina a necessidade de ter centenas de variáveis para cada estado de hover ou active.</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> No <code>:root</code>, mude a variável <code>--primary</code> para <code>oklch(60% 0.15 250)</code>.</p>
        <p><strong>Ação 2:</strong> No <code>.btn:hover</code>, mude o background para <code>color-mix(in oklab, var(--primary), black 20%)</code>.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "oklch_usage", description: "Definir --primary como oklch", test: "oklch(60%" },
    { id: "cmix_usage", description: "Usar color-mix no hover", test: "color-mix(in oklab" }
  ]
};
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p21",
  language: "html",
  title: "Projeto Master: Auditoria Final e Design System de Elite",
  description: "Consolide todos os conceitos aplicados na trilha.",
  statement: "Garante que o seu ficheiro CSS utiliza @layer, OKLCH, Container Queries e Animações GPU.",
  isProjectPart: true,
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
<head>
  <style>
    /* DESIGN SYSTEM MASTER FINALIZADO */
    @layer reset, base, components, utilities;
    
    @layer base {
      :root {
        --primary: oklch(60% 0.15 250);
        --accent: oklch(70% 0.2 150);
        --bg: #0f172a;
        --card-bg: rgba(255, 255, 255, 0.05);
      }
      body { 
        background: var(--bg); 
        color: white; 
        font-family: system-ui, sans-serif;
        margin: 0;
        min-height: 200vh;
      }
    }

    @layer components {
      .master-container {
        container-type: inline-size;
        padding: 2rem;
      }

      .card {
        background: var(--card-bg);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 24px;
        padding: 2rem;
        transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        will-change: transform;
      }

      .card:hover {
        transform: scale(1.02);
        background: color-mix(in oklab, var(--card-bg), white 5%);
      }

      @container (min-width: 500px) {
        .card { border-color: var(--primary); }
      }
    }
  </style>
</head>
<body>
  <div class="master-container">
    <article class="card">
      <h1 style="font-size: clamp(1.5rem, 8vw, 4rem);">Elite Engineer</h1>
      <p>O seu Design System está validado e pronto para escala global.</p>
    </article>
  </div>
</body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary text-center">🏆 Graduação CSS Master</h3>
      <p class="text-sm leading-relaxed">
        Parabéns, Engenheiro! Você construiu uma arquitetura de estilos que é performática, acessível e escalável. 
        Este projeto utiliza as tecnologias mais modernas do mercado:
      </p>
      <ul class="grid grid-cols-2 gap-2 text-[10px] uppercase font-black">
        <li class="p-2 bg-green-500/10 border border-green-500/20 rounded">Cascade Layers</li>
        <li class="p-2 bg-blue-500/10 border border-blue-500/20 rounded">Container Queries</li>
        <li class="p-2 bg-purple-500/10 border border-purple-500/20 rounded">OKLCH Colors</li>
        <li class="p-2 bg-orange-500/10 border border-orange-500/20 rounded">GPU Animations</li>
      </ul>
    </div>
  `,
  objectives: [
    { id: "audit_complete", description: "Confirme a estrutura final do Design System.", test: "DESIGN SYSTEM MASTER" }
  ]
};

import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p6",
  language: "html",
  title: "Projeto Master: Container Queries",
  description: "Responsividade baseada no contexto do componente.",
  statement: "Transforme o card em um 'container' e mude a cor do título quando o card tiver mais de 350px de largura.",
  isProjectPart: true,
  youtubeVideoId: "raf_id",
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
<head>
  <style>
    @layer base, components;
    @layer base {
      body { background: #0f172a; color: white; font-family: sans-serif; }
    }
    @layer components {
      .card-container {
        /* Ação 1: Defina o tipo de container aqui */
        container-type: inline-size;
        width: 100%;
        max-width: 500px;
        border: 1px solid #333;
        padding: 20px;
      }
      
      .title { color: white; transition: color 0.3s; }

      /* Ação 2: Crie a Container Query para 350px */
      @container (min-width: 350px) {
        .title { color: #3b82f6; }
      }
    }
  </style>
</head>
<body>
  <div class="card-container">
    <h1 class="title">Título Adaptável</h1>
  </div>
</body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">📦 Adeus Media Queries</h3>
      <p class="text-sm">As <strong>Container Queries</strong> permitem que um componente mude de estilo baseando-se no espaço que ele tem disponível no elemento pai, não no tamanho da janela do browser.</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> No seletor <code>.card-container</code>, adicione <code>container-type: inline-size;</code>.</p>
        <p><strong>Ação 2:</strong> Adicione a regra <code>@container (min-width: 350px) { ... }</code> para mudar a cor do <code>.title</code>.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "cont_type", description: "Definir container-type: inline-size", test: "container-type: inline-size" },
    { id: "cont_query", description: "Implementar @container query", test: "@container" }
  ]
};

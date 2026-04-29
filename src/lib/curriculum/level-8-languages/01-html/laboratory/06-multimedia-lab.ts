import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p7",
  language: "html",
  title: "Projeto Master: Media e Gráficos",
  description: "Integre elementos visuais de alta performance.",
  statement: "Adicione uma área de desenho Canvas e um vídeo acessível ao seu projeto.",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <h3>🎮 Contexto Visual</h3>
    <p>Vamos preparar o site para gráficos dinâmicos e garantir que o conteúdo de vídeo pode ser entendido por todos.</p>
  `,
  objectives: [
    {
      id: "canvas",
      description: "No <main>, adicione um <canvas> com id 'dashboard-chart'.",
      hint: "<canvas id=\"dashboard-chart\"></canvas>",
      test: "id=\"dashboard-chart\""
    },
    {
      id: "track",
      description: "Adicione um elemento <track> dentro de uma tag <video> para legendas.",
      hint: "<track kind=\"subtitles\" ...>",
      test: "kind=\"subtitles\""
    }
  ]
};

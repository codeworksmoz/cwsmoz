import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p16",
  language: "html",
  title: "Projeto Master: Proporções com aspect-ratio",
  description: "Mantenha a integridade visual de imagens e vídeos.",
  statement: "Aplique 'aspect-ratio: 16 / 9' aos seus elementos multimédia para evitar saltos de layout (CLS).",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <h3>📐 Estabilidade Visual</h3>
    <p>O <code>aspect-ratio</code> reserva o espaço correto no ecrã antes mesmo da imagem carregar, garantindo que o texto não "pule" quando o conteúdo aparece.</p>
  `,
  objectives: [
    {
      id: "aspect",
      description: "Defina a proporção 16/9.",
      test: "aspect-ratio: 16 / 9"
    }
  ]
};

import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p17",
  language: "html",
  title: "Projeto Master: Motion Path",
  description: "Anime elementos ao longo de caminhos complexos.",
  statement: "Use 'offset-path' para fazer um elemento de decoração mover-se num círculo.",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <h3>🎢 Trilhos de Animação</h3>
    <p>O <code>offset-path</code> permite que um elemento siga qualquer forma SVG, criando movimentos orgânicos e sofisticados que seriam impossíveis apenas com translações X/Y.</p>
  `,
  objectives: [
    {
      id: "offset_path",
      description: "Defina um caminho usando path('...').",
      test: "offset-path"
    }
  ]
};

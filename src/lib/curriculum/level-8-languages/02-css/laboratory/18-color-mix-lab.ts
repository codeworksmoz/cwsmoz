import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p18",
  language: "html",
  title: "Projeto Master: color-mix() para Estados de UI",
  description: "Crie variantes de cores (hover/active) sem definir novas variáveis.",
  statement: "Utilize color-mix() para criar uma cor 20% mais escura baseada na sua cor primária.",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <h3>🧪 Mistura Química</h3>
    <p>O <code>color-mix()</code> permite criar variações dinâmicas de cores diretamente no CSS, ideal para estados de hover ou bordas subtis.</p>
  `,
  objectives: [
    {
      id: "color_mix",
      description: "Use color-mix(in oklab, var(--primary), black 20%).",
      test: "color-mix"
    }
  ]
};

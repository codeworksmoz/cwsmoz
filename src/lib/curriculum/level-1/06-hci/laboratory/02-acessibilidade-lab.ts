
import type { PracticeExercise } from '../../types';

export const exercise: PracticeExercise = {
  id: "hci-p2",
  language: "concept",
  title: "Laboratório: Acessibilidade Web",
  description: "Garante que todos podem usar o teu site.",
  statement: "Qual o contraste mínimo recomendado pelo WCAG para texto normal? Escreva '4.5:1'.",
  template: "let contraste = '';",
  detailedExplanation: `
    <h3>♿ Web para Todos</h3>
    <p>A acessibilidade garante que pessoas com deficiências visuais, motoras ou auditivas possam navegar sem barreiras.</p>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Saber o rácio de contraste",
      test: "contraste = '4.5:1'"
    }
  ]
};

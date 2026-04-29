
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p1",
  language: "css",
  title: "Laboratório Master: Layout Subgrid",
  description: "Crie grids aninhados perfeitamente alinhados.",
  statement: "Utilize a propriedade 'subgrid' para alinhar as linhas internas de um card com o grid principal.",
  template: `.container {
  display: grid;
  grid-template-rows: repeat(3, auto);
}

.card {
  grid-row: span 3;
  display: grid;
  grid-template-rows: ; /* Use subgrid aqui */
}`,
  detailedExplanation: `
    <h3>📐 O Poder do Subgrid</h3>
    <p>O subgrid permite que um elemento filho herde a definição de trilhas (tracks) do elemento pai, garantindo alinhamento perfeito em layouts complexos.</p>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Definir grid-template-rows como subgrid",
      test: "subgrid"
    }
  ]
};

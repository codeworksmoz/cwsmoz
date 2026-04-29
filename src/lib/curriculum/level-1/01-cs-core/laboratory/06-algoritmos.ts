import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "cs-p6",
  language: "concept",
  title: "Laboratório: Sequência Lógica",
  description: "Ordenação de passos.",
  statement: "Para fazer café, o que vem primeiro: 'Ferver Água' ou 'Beber'? Escreva 'Ferver'.",
  template: `let passo1 = "";`,
  detailedExplanation: `<h3>☕ Pensamento Algorítmico</h3><p>A ordem dos fatores altera o produto. Um erro na sequência impede o resultado correto.</p>`,
  objectives: [
    {
      id: "obj1",
      description: "Identificar a precedência lógica",
      test: "passo1 = \"Ferver\""
    }
  ]
};
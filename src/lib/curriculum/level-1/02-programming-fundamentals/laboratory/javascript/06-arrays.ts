import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p6-js",
  language: "javascript",
  title: "Lab JS: Manipulando Arrays",
  description: "Aprende a guardar listas de dados.",
  statement: "Cria um array chamado 'frutas' contendo 'Maçã' e 'Banana'.",
  template: "const frutas = [];",
  detailedExplanation: `
    <h3>🍎 Listas em JavaScript</h3>
    <p>Arrays são usados para guardar múltiplos valores numa única variável. Usamos parênteses retos <code>[ ]</code>.</p>
  `,
  objectives: [
    {
      id: "obj1",
      description: "O array deve conter as duas frutas",
      test: "frutas.includes('Maçã') && frutas.includes('Banana')"
    }
  ]
};

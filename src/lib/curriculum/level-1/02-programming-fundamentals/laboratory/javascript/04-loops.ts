import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p4-js",
  language: "javascript",
  title: "Lab JS: Contador",
  description: "Use um loop para somar números.",
  statement: "Crie um loop 'for' que some os números de 1 a 5 na variável 'total'.",
  template: `let total = 0;

// Escreve o teu loop FOR abaixo`,
  detailedExplanation: `<p>O loop for tem 3 partes: inicialização, condição e incremento.</p>`,
  objectives: [
    {
      id: "obj1",
      description: "Variável total deve ser 15 no final",
      test: "total = 15"
    }
  ]
};
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "cs-p7",
  language: "concept",
  title: "Laboratório: Eficiência",
  description: "Comparação de custos.",
  statement: "Se tenho que ler 100 páginas, e leio uma de cada vez, qual a complexidade? Escreva 'O(n)'.",
  template: `let complexidade = "";`,
  detailedExplanation: `<h3>📈 Escala</h3><p>Se o trabalho aumenta proporcionalmente ao número de itens, chamamos de complexidade linear.</p>`,
  objectives: [
    {
      id: "obj1",
      description: "Identificar complexidade linear",
      test: "complexidade = \"O(n)\""
    }
  ]
};
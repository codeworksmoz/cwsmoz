import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p7-js",
  language: "javascript",
  title: "Lab JS: Estrutura de Objetos",
  description: "Cria modelos de dados complexos.",
  statement: "Cria um objeto 'carro' com as propriedades 'marca' (Toyota) e 'ano' (2022).",
  template: "const carro = {};",
  detailedExplanation: `
    <h3>🚗 Objetos Literais</h3>
    <p>Objetos guardam dados em pares de chave e valor. Úteis para representar entidades do mundo real.</p>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Propriedade marca deve ser Toyota",
      test: "carro.marca === 'Toyota'"
    },
    {
      id: "obj2",
      description: "Propriedade ano deve ser 2022",
      test: "carro.ano === 2022"
    }
  ]
};

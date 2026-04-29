import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "cs-p5",
  language: "concept",
  title: "Laboratório: Bits e Bytes",
  description: "Cálculo de capacidade.",
  statement: "Quantos bits existem em 1 Byte? Responda o número.",
  template: `let bitsInByte = 0;`,
  detailedExplanation: `<h3>📏 Medidas Digitais</h3><p>1 Byte é o conjunto de 8 bits. É a unidade básica de armazenamento de um caractere.</p>`,
  objectives: [
    {
      id: "obj1",
      description: "Saber o tamanho de um Byte",
      test: "bitsInByte = 8"
    }
  ]
};
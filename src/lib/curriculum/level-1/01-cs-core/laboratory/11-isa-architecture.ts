import type { PracticeExercise } from '../../../types';
export const exercise: PracticeExercise = {
  id: "cs-p11", language: "concept", title: "Lab: RISC vs CISC", description: "Conjuntos de instruções.",
  statement: "Processadores ARM (telemóveis) usam qual arquitetura? Escreva 'RISC'.",
  template: "let arch = '';", detailedExplanation: "<p>RISC foca em instruções simples e eficientes.</p>",
  objectives: [{ id: "obj1", description: "Identificar RISC", test: "arch = 'RISC'" }]
};
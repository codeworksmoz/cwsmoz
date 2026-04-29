import type { PracticeExercise } from '../../../types';
export const exercise: PracticeExercise = {
  id: "cs-p10", language: "concept", title: "Lab: Hierarquia de Cache", description: "Velocidade L1 vs L3.",
  statement: "Qual nível de cache é o mais rápido e pequeno? Escreva 'L1'.",
  template: "let nivel = '';", detailedExplanation: "<p>Cache L1 está integrada no núcleo da CPU.</p>",
  objectives: [{ id: "obj1", description: "Identificar cache rápida", test: "nivel = 'L1'" }]
};
import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p6-js",
  language: "javascript",
  title: "Lab JS: Funções e Escopos",
  description: "Modularização de código.",
  statement: "Crie uma função 'calcular' que retorna a soma de dois parâmetros.",
  template: "function calcular(a, b) {\n  return 0;\n}",
  detailedExplanation: "<p>Funções permitem reutilizar lógica. O escopo define onde as variáveis 'vivem'.</p>",
  objectives: [
    { id: "obj1", description: "Retornar a soma", test: "return a + b" }
  ]
};
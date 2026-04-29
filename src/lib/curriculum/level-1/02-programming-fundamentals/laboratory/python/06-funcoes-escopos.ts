import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p6-py",
  language: "python",
  title: "Lab Python: Funções e Escopos",
  description: "Modularização em Python.",
  statement: "Defina uma função 'calcular' que soma dois valores.",
  template: "def calcular(a, b):\n    return 0",
  detailedExplanation: "<p>Use 'def' e respeite a indentação de 4 espaços.</p>",
  objectives: [
    { id: "obj1", description: "Retornar a soma", test: "return a + b" }
  ]
};
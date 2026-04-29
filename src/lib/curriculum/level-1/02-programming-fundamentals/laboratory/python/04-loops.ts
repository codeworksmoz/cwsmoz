import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p4-py",
  language: "python",
  title: "Lab Python: Repetição",
  description: "Usando range() no loop for.",
  statement: "Soma os números de 0 a 4 na variável 'soma'.",
  template: `soma = 0

# Escreve o teu loop abaixo`,
  detailedExplanation: `<p>Em Python, usamos <code>for i in range(5):</code> para repetir 5 vezes.</p>`,
  objectives: [
    {
      id: "obj1",
      description: "soma deve ser 10",
      test: "soma = 10"
    }
  ]
};
import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p3-py",
  language: "python",
  title: "Lab Python: Condicionais",
  description: "Lógica de decisão em Python.",
  statement: "Se a nota for maior que 10, define 'resultado' como 'Aprovado'.",
  template: `nota = 15
resultado = ""

# Escreve o teu código abaixo`,
  detailedExplanation: `<p>Lembra-te da indentação (espaços) após os dois pontos (:).</p>`,
  objectives: [
    {
      id: "obj1",
      description: "resultado deve ser 'Aprovado'",
      test: "resultado = \"Aprovado\""
    }
  ]
};
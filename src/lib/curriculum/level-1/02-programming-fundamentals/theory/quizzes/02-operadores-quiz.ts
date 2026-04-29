import type { Quiz } from '../../../../types';

export const quiz: Quiz = {
  id: "pf-t2-quiz",
  title: "Quiz: Operadores",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual operador é usado para verificar se dois valores são iguais?",
      options: ["=", "==", "!", "+"],
      correctAnswer: 1
    }
  ]
};

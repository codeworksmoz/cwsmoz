
import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "hci-t1-quiz",
  title: "Quiz: Fundamentos de HCI",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual o objetivo principal do HCI?",
      options: ["Tornar o computador mais rápido", "Melhorar a interação entre humanos e computadores", "Vender mais software", "Programar em binário"],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "O que é 'Affordance'?",
      options: ["O preço da interface", "Uma pista visual que indica como usar algo", "Um erro de código", "Um tipo de fonte"],
      correctAnswer: 1
    }
  ]
};

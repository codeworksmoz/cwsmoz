
import type { Quiz } from '../../../../types';

export const quiz: Quiz = {
  id: "cs-t1-quiz",
  title: "Quiz: Sistemas Numéricos",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual é a base fundamental do sistema que os computadores usam?",
      options: ["Base 10", "Base 2 (Binário)", "Base 16", "Base 8"],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "O que representa o número 1 num circuito digital?",
      options: ["Desligado", "Ligado", "Erro", "Aguardando"],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Quantos bits são necessários para representar o número 5?",
      options: ["1 bit", "2 bits", "3 bits", "4 bits"],
      correctAnswer: 2
    }
  ]
};

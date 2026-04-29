
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "js-mq1",
  title: "Quiz: Arquitetura do JavaScript",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Qual destes executa primeiro no Event Loop?",
      options: [
        "setTimeout(() => {}, 0)",
        "Promise.resolve()",
        "Um evento de clique",
        "setInterval(() => {}, 10)"
      ],
      correctAnswer: 1
    }
  ]
};

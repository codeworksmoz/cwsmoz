
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "kt-mq1",
  title: "Quiz: Null Safety Engine",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Qual operador é usado para fornecer um valor padrão caso a expressão seja nula?",
      options: ["?.", "!!", "?:", "as?"],
      correctAnswer: 2
    }
  ]
};

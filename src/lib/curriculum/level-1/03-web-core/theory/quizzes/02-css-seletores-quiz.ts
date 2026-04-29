import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "web-t2-quiz",
  title: "Quiz: Seletores CSS",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual propriedade CSS muda a cor do texto?",
      options: ["background-color", "color", "text-style", "font-weight"],
      correctAnswer: 1
    }
  ]
};
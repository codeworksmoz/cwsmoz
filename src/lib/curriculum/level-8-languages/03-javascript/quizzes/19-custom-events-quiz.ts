import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "js-mq19",
  title: "Quiz: Custom Events",
  passingScore: 80,
  questions: [
    {
      id: "q19_1",
      question: "Em qual propriedade de um CustomEvent deves passar os teus dados personalizados?",
      options: ["data", "payload", "detail", "body"],
      correctAnswer: 2
    }
  ]
};

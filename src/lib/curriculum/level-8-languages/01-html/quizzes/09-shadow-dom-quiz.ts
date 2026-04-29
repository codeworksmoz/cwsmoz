
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "html-mq9",
  title: "Quiz: Shadow DOM Internals",
  passingScore: 80,
  questions: [
    {
      id: "q9_1",
      question: "No modo 'closed' do Shadow DOM, como se acede à raiz via JavaScript externo?",
      options: ["shadowRoot", "Não é possível aceder", "rootPath", "closedRoot"],
      correctAnswer: 1
    }
  ]
};

import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "dt-q18",
  title: "Quiz: Markdown Mastery",
  passingScore: 70,
  questions: [
    {
      id: "q18_1",
      question: "Como se cria um link em Markdown?",
      options: ["<link>", "[Texto](url)", "{link: url}", "url -> texto"],
      correctAnswer: 1
    }
  ]
};
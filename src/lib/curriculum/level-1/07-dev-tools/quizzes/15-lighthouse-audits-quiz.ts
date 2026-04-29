import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "dt-q15",
  title: "Quiz: Auditorias Lighthouse",
  passingScore: 70,
  questions: [
    {
      id: "q15_1",
      question: "Qual métrica mede a estabilidade visual?",
      options: ["LCP", "CLS", "FID", "TTFB"],
      correctAnswer: 1
    }
  ]
};
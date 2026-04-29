import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "js-mq17",
  title: "Quiz: Service Workers e PWA",
  passingScore: 80,
  questions: [
    {
      id: "q17_1",
      question: "Qual evento do Service Worker é usado para intercetar pedidos de rede?",
      options: ["install", "activate", "fetch", "sync"],
      correctAnswer: 2
    }
  ]
};

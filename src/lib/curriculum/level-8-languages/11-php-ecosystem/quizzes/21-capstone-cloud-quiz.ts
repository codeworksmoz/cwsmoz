import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-eco-mq21",
  title: "Quiz Final: Cloud-Native Mastery",
  passingScore: 90,
  questions: [
    {
      id: "q1",
      question: "Qual o componente de orquestração que garante a resiliência dos workers PHP?",
      options: ["FTP", "Kubernetes / Orquestrador", "Nginx", "Git"],
      correctAnswer: 1
    }
  ]
};

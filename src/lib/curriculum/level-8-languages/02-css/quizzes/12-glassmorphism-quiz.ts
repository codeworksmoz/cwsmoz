import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "css-mq12",
  title: "Quiz: Glassmorphism",
  passingScore: 80,
  questions: [
    {
      id: "q12_1",
      question: "Qual propriedade é a chave para o efeito de 'vidro fosco'?",
      options: ["filter: blur()", "backdrop-filter: blur()", "opacity: 0.5", "background: grey"],
      correctAnswer: 1
    }
  ]
};
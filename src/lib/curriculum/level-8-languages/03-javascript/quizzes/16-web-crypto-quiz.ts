import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "js-mq16",
  title: "Quiz: Web Crypto API",
  passingScore: 80,
  questions: [
    {
      id: "q16_1",
      question: "Por que deve usar crypto.getRandomValues() em vez de Math.random() para gerar tokens?",
      options: [
        "É mais curto de escrever",
        "Math.random() não é criptograficamente seguro e é previsível",
        "Math.random() só funciona com números inteiros",
        "crypto.getRandomValues() é síncrono"
      ],
      correctAnswer: 1
    }
  ]
};

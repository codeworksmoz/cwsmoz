import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "js-mq20",
  title: "Quiz: Intl API",
  passingScore: 80,
  questions: [
    {
      id: "q20_1",
      question: "Qual a vantagem de usar a API Intl nativa sobre bibliotecas como Moment.js?",
      options: [
        "Zero KB de bundle e performance nativa do browser",
        "Suporta mais tipos de letra",
        "Permite viajar no tempo",
        "Funciona apenas em CSS"
      ],
      correctAnswer: 0
    }
  ]
};

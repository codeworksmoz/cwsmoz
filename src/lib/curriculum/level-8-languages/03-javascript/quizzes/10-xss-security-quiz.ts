import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "js-mq10",
  title: "Quiz: Segurança e XSS",
  passingScore: 80,
  questions: [
    {
      id: "q10_1",
      question: "Qual o principal perigo de usar 'innerHTML' com dados de utilizadores?",
      options: [
        "O site fica mais lento",
        "Permite a execução de scripts maliciosos injetados (XSS)",
        "A cor do texto muda",
        "O browser bloqueia o site por excesso de memória"
      ],
      correctAnswer: 1
    }
  ]
};

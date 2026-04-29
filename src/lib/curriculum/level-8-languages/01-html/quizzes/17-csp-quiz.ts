
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "html-mq17",
  title: "Quiz: CSP e Segurança",
  passingScore: 80,
  questions: [
    {
      id: "q17_1",
      question: "O que é um 'Nonce' no contexto de uma Content Security Policy?",
      options: [
        "Um erro de script fatal",
        "Um token único gerado aleatoriamente para validar scripts inline específicos",
        "O nome do servidor DNS",
        "Um tipo de cookie persistente"
      ],
      correctAnswer: 1
    }
  ]
};

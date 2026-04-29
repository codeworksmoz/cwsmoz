import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "py-mq10",
  title: "Quiz: Deploy e Produção",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "O que é o Gunicorn num ambiente de produção Python?",
      options: [
        "Uma base de dados",
        "Um servidor HTTP WSGI para correr aplicações web Python em larga escala",
        "Uma framework de testes unitários",
        "Um tipo de inteligência artificial"
      ],
      correctAnswer: 1
    }
  ]
};
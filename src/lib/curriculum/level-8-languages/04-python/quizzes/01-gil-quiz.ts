
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "py-mq1",
  title: "Quiz: CPython e GIL",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "O que o GIL garante no CPython?",
      options: [
        "Velocidade infinita",
        "Segurança na gestão de memória de objetos Python",
        "Que o código rode apenas em Windows",
        "Acesso direto ao hardware"
      ],
      correctAnswer: 1
    }
  ]
};

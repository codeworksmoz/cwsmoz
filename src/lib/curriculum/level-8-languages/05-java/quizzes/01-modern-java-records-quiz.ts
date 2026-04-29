
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "jv-mq1",
  title: "Quiz: Records & Sealed Classes",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Qual a principal característica de um Java Record?",
      options: [
        "É sempre mutável",
        "É uma classe de dados imutável por padrão",
        "Não pode ter métodos",
        "Não suporta interfaces"
      ],
      correctAnswer: 1
    }
  ]
};

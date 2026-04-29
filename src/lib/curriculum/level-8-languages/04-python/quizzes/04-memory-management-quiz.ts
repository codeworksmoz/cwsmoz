import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "py-mq4",
  title: "Quiz: Gestão de Memória",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Qual o principal mecanismo de limpeza de memória do Python?",
      options: [
        "Manual Free",
        "Reference Counting",
        "Deleção Aleatória",
        "Restart do Sistema"
      ],
      correctAnswer: 1
    }
  ]
};
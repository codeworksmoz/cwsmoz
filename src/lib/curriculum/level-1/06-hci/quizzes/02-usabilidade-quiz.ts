
import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "hci-t2-quiz",
  title: "Quiz: Princípios de Usabilidade",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Quantas são as Heurísticas de Nielsen?",
      options: ["5", "7", "10", "12"],
      correctAnswer: 2
    },
    {
      id: "q2",
      question: "O princípio 'Visibilidade do Estado do Sistema' significa que:",
      options: ["O utilizador deve saber sempre o que está a acontecer", "O código deve ser aberto", "O ecrã deve ser brilhante", "A internet deve ser rápida"],
      correctAnswer: 0
    }
  ]
};


import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "git-t1-quiz",
  title: "Quiz: Fundamentos de Git",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual comando inicia um novo repositório Git numa pasta?",
      options: ["git start", "git init", "git begin", "git create"],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "O Git é um sistema de controlo de versão centralizado ou distribuído?",
      options: ["Centralizado", "Distribuído", "Nenhum dos dois", "Depende do servidor"],
      correctAnswer: 1
    }
  ]
};

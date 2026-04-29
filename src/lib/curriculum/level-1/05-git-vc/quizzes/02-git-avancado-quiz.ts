
import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "git-t2-quiz",
  title: "Quiz: Git Avançado e Fluxos",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual comando é usado para criar e mudar para um novo branch simultaneamente?",
      options: ["git branch -new", "git checkout -b", "git merge -b", "git switch -n"],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "O que é um 'Remote' no Git?",
      options: ["Um comando secreto", "Um repositório alojado na rede/internet", "Um erro de conexão", "Uma ramificação local"],
      correctAnswer: 1
    }
  ]
};

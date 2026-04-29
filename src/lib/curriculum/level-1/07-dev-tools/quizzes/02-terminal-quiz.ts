
import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "dt-t2-quiz",
  title: "Quiz: Terminal e CLI",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual comando lista os ficheiros de uma pasta no Linux/macOS?",
      options: ["list", "dir", "ls", "show"],
      correctAnswer: 2
    },
    {
      id: "q2",
      question: "O que faz o comando 'cd ..'?",
      options: ["Cria uma pasta", "Entra numa pasta", "Sobe um nível na árvore de diretórios", "Apaga tudo"],
      correctAnswer: 2
    }
  ]
};

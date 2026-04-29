import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "git-q19",
  title: "Quiz: Git Bisect",
  passingScore: 70,
  questions: [
    {
      id: "q19_1",
      question: "Qual o algoritmo de busca utilizado pelo 'git bisect'?",
      options: ["Busca Linear", "Busca Binária", "Busca em Profundidade", "Busca Aleatória"],
      correctAnswer: 1
    },
    {
      id: "q19_2",
      question: "O que significa o comando 'git bisect bad'?",
      options: [
        "Que o programador escreveu código mau",
        "Marca o commit atual como tendo o bug que queremos encontrar",
        "Apaga o commit atual",
        "Reporta um erro ao GitHub"
      ],
      correctAnswer: 1
    }
  ]
};
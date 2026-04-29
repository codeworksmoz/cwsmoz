import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "cs-t7-quiz",
  title: "Quiz: Notação Big O",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "O que o 'n' representa na notação O(n)?",
      options: ["O número de segundos", "A quantidade de dados de entrada", "O número de CPUs", "O nome do utilizador"],
      correctAnswer: 1,
      explanation: "N é o tamanho da entrada. Se n=1000, temos 1000 itens a processar."
    },
    {
      id: "q2",
      question: "Qual complexidade é mais eficiente para grandes volumes de dados?",
      options: ["O(n²)", "O(n)", "O(log n)", "O(n!)"],
      correctAnswer: 2,
      explanation: "O(log n) cresce muito devagar. Para 1 milhão de itens, leva apenas cerca de 20 passos."
    },
    {
      id: "q3",
      question: "Um algoritmo que tem um loop dentro de outro loop (aninhados) costuma ser:",
      options: ["O(1)", "O(n)", "O(n²)", "O(log n)"],
      correctAnswer: 2,
      explanation: "Se percorres N itens, e para cada um percorres N novamente, tens N * N = N²."
    }
  ]
};
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "math-q8",
  title: "Quiz: Permutações e Combinações de Elite",
  passingScore: 70,
  questions: [
    {
      id: "q8_1",
      question: "Quantas formas existem de ordenar as letras da palavra 'ELITE'?",
      options: ["5", "25", "120", "60"],
      correctAnswer: 2,
      explanation: "5! = 5 * 4 * 3 * 2 * 1 = 120."
    },
    {
      id: "q8_2",
      question: "Num sorteio de 3 prémios IGUAIS para 10 pessoas, usamos:",
      options: ["Permutação", "Combinação", "Fatorial Simples", "Módulo"],
      correctAnswer: 1,
      explanation: "Como os prémios são iguais, a ordem dos ganhadores não importa."
    },
    {
      id: "q8_3",
      question: "Qual o valor de C(5,2)?",
      options: ["10", "20", "5", "60"],
      correctAnswer: 0,
      explanation: "5! / (2! * 3!) = 120 / (2 * 6) = 120 / 12 = 10."
    },
    {
      id: "q8_4",
      question: "O Teorema Binomial descreve a expansão de:",
      options: ["(a + b)^n", "a^2 + b^2", "log(a*b)", "e^x"],
      correctAnswer: 0
    },
    {
      id: "q8_5",
      question: "Quantas permutações existem da palavra 'BOO' (com letras repetidas)?",
      options: ["6", "3", "9", "1"],
      correctAnswer: 1,
      explanation: "3! / 2! = 3."
    },
    {
      id: "q8_6",
      question: "A identidade de Pascal diz que C(n,k) + C(n,k-1) = ?",
      options: ["C(n+1, k)", "C(n, k+1)", "C(2n, k)", "C(n-1, k)"],
      correctAnswer: 0
    }
  ]
};

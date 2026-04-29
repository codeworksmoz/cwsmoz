import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "alg-q16",
  title: "Quiz: Algoritmos Probabilistas",
  passingScore: 70,
  questions: [
    {
      id: "q16_1",
      question: "Qual a garantia de um algoritmo de 'Las Vegas'?",
      options: ["Garante o tempo, mas não a correção", "Garante a correção, mas o tempo é aleatório", "Não garante nada", "Garante que o prémio é grande"],
      correctAnswer: 1
    },
    {
      id: "q16_2",
      question: "Um algoritmo de 'Monte Carlo' pode:",
      options: ["Correr para sempre", "Retornar uma resposta errada com probabilidade muito baixa", "Apenas jogar dados", "Mudar o código em runtime"],
      correctAnswer: 1
    },
    {
      id: "q16_3",
      question: "O Quick Sort com pivô aleatório é de que tipo?",
      options: ["Monte Carlo", "Las Vegas", "Determinístico", "Brute Force"],
      correctAnswer: 1
    },
    {
      id: "q16_4",
      question: "Por que usamos aleatoriedade em Criptografia?",
      options: ["Para ser mais difícil de prever (Entropy)", "Para ser mais lento", "Porque o hardware exige", "Por tradição"],
      correctAnswer: 0
    },
    {
      id: "q16_5",
      question: "O teste de primalidade de Miller-Rabin é do tipo:",
      options: ["Las Vegas", "Monte Carlo", "Estático", "Linear"],
      correctAnswer: 1
    },
    {
      id: "q16_6",
      question: "Aumentar o número de iterações num algoritmo de Monte Carlo:",
      options: ["Aumenta o erro", "Reduz a probabilidade de erro exponencialmente", "Não altera nada", "Muda o tipo do algoritmo"],
      correctAnswer: 1
    }
  ]
};

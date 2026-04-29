import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "math-q18",
  title: "Quiz: Relações de Recorrência",
  passingScore: 70,
  questions: [
    {
      id: "q18_1",
      question: "Qual a complexidade de T(n) = 2T(n/2) + n segundo o Teorema Mestre?",
      options: ["O(n)", "O(n²)", "O(n log n)", "O(log n)"],
      correctAnswer: 2
    },
    {
      id: "q18_2",
      question: "Na sequência de Fibonacci, qual a ordem da relação de recorrência?",
      options: ["1ª ordem", "2ª ordem", "3ª ordem", "Linear"],
      correctAnswer: 1,
      explanation: "Depende dos dois termos anteriores (n-1 e n-2)."
    },
    {
      id: "q18_3",
      question: "O que é a 'Equação Característica'?",
      options: [
        "Uma regra de estilo",
        "Uma ferramenta algébrica para encontrar a solução fechada de uma recorrência linear",
        "O nome da função main",
        "Um erro de lógica"
      ],
      correctAnswer: 1
    },
    {
      id: "q18_4",
      question: "Uma relação de recorrência 'Homogénea' é aquela onde:",
      options: ["Não há termos constantes soltos (apenas termos da sequência)", "Todos os termos são iguais", "O resultado é sempre zero", "Não usa recursão"],
      correctAnswer: 0
    },
    {
      id: "q18_5",
      question: "O Teorema Mestre falha se:",
      options: ["n for ímpar", "A função f(n) não for polinomial ou a divisão não for constante", "O computador for lento", "Usarmos Python"],
      correctAnswer: 1
    },
    {
      id: "q18_6",
      question: "A solução de T(n) = T(n-1) + 1 é:",
      options: ["O(n)", "O(1)", "O(n²)", "O(log n)"],
      correctAnswer: 0
    }
  ]
};

import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "math-q6",
  title: "Quiz: Teoria dos Números e Modularidade",
  passingScore: 70,
  questions: [
    {
      id: "q6_1",
      question: "Qual o resultado de 17 mod 5?",
      options: ["1", "2", "3", "0"],
      correctAnswer: 1,
      explanation: "17 dividido por 5 dá 3, com resto 2."
    },
    {
      id: "q6_2",
      question: "O que é o Algoritmo de Euclides?",
      options: [
        "Um método para encontrar o caminho mais curto",
        "Um método eficiente para encontrar o Máximo Divisor Comum (MDC)",
        "Um algoritmo de ordenação de listas",
        "Uma técnica de compressão de dados"
      ],
      correctAnswer: 1
    },
    {
      id: "q6_3",
      question: "Qual a base matemática para a segurança do RSA?",
      options: [
        "Dificuldade de somar números grandes",
        "Dificuldade de fatorar o produto de dois números primos gigantes",
        "Velocidade da luz no vácuo",
        "Número de bits da CPU"
      ],
      correctAnswer: 1
    },
    {
      id: "q6_4",
      question: "O que significa dizer que dois números são 'Coprimos'?",
      options: ["São ambos números pares", "O MDC entre eles é igual a 1", "Têm o mesmo valor MOD 10", "São números negativos"],
      correctAnswer: 1
    },
    {
      id: "q6_5",
      question: "Qual o resultado de (-1) mod 10 no contexto de anéis modulares?",
      options: ["-1", "1", "9", "0"],
      correctAnswer: 2,
      explanation: "Em aritmética modular, somamos o módulo até obter um valor positivo: -1 + 10 = 9."
    },
    {
      id: "q6_6",
      question: "O Pequeno Teorema de Fermat é usado para:",
      options: ["Ordenar arrays", "Testes de primalidade e criptografia", "Calcular a área de um círculo", "Validar o cache L1"],
      correctAnswer: 1
    }
  ]
};
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "alg-q11",
  title: "Quiz: Manipulação de Bits",
  passingScore: 70,
  questions: [
    {
      id: "q11_1",
      question: "Qual o resultado de 5 (101) AND 3 (011)?",
      options: ["1 (001)", "7 (111)", "4 (100)", "0"],
      correctAnswer: 0
    },
    {
      id: "q11_2",
      question: "O que faz o operador de shift para a esquerda (n << 1)?",
      options: ["Divide por 2", "Multiplica por 2", "Inverte o sinal", "Limpa o bit 0"],
      correctAnswer: 1
    },
    {
      id: "q11_3",
      question: "Como se verifica se o bit na posição 'i' está ativo?",
      options: ["(n | (1 << i)) != 0", "(n & (1 << i)) != 0", "n >> i", "n ^ (1 << i)"],
      correctAnswer: 1
    },
    {
      id: "q11_4",
      question: "Qual operador é usado para inverter todos os bits de um número?",
      options: ["&", "|", "^", "~ (NOT)"],
      correctAnswer: 3
    },
    {
      id: "q11_5",
      question: "O que o truque (n & (n-1)) == 0 valida?",
      options: ["Se n é par", "Se n é ímpar", "Se n é potência de 2", "Se n é primo"],
      correctAnswer: 2
    },
    {
      id: "q11_6",
      question: "Por que operações de bits são preferidas em sistemas embarcados?",
      options: ["São mais coloridas", "Consomem menos ciclos de CPU e memória", "São obrigatórias no Linux", "Protegem contra vírus"],
      correctAnswer: 1
    }
  ]
};

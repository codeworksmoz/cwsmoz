import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "math-q16",
  title: "Quiz: Matemática da Criptografia",
  passingScore: 70,
  questions: [
    {
      id: "q16_1",
      question: "Na criptografia RSA, as chaves são geradas a partir de:",
      options: ["Somas simples", "Dois números primos gigantes", "A cor do ecrã", "Nomes de utilizador"],
      correctAnswer: 1
    },
    {
      id: "q16_2",
      question: "Qual o valor de φ(21) se 21 = 3 * 7?",
      options: ["20", "12", "18", "10"],
      correctAnswer: 1,
      explanation: "(3-1) * (7-1) = 2 * 6 = 12."
    },
    {
      id: "q16_3",
      question: "A criptografia assimétrica utiliza quantas chaves por utilizador?",
      options: ["Uma", "Duas (Pública e Privada)", "Três", "Nenhuma"],
      correctAnswer: 1
    },
    {
      id: "q16_4",
      question: "O 'Inverso Modular' é necessário para:",
      options: ["Somar números", "Gerar a chave privada a partir da pública e do totiente", "Acelerar a internet", "Comprimir ficheiros"],
      correctAnswer: 1
    },
    {
      id: "q16_5",
      question: "A segurança do ECC (Elliptic Curve) baseia-se em:",
      options: ["Fatoração de primos", "Logaritmo Discreto em curvas elípticas", "Divisão por zero", "Sorte"],
      correctAnswer: 1
    },
    {
      id: "q16_6",
      question: "O que é um ataque de 'Força Bruta' em criptografia?",
      options: ["Bater no computador", "Tentar todas as combinações de chaves possíveis até encontrar a correta", "Enviar vírus por email", "Desligar o servidor"],
      correctAnswer: 1
    }
  ]
};

import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "math-q9",
  title: "Quiz: Probabilidade Discreta",
  passingScore: 70,
  questions: [
    {
      id: "q9_1",
      question: "Qual a probabilidade de tirar 'Cara' duas vezes seguidas num lançamento de moeda honesta?",
      options: ["1/2", "1/4", "1/8", "1"],
      correctAnswer: 1,
      explanation: "Eventos independentes: 1/2 * 1/2 = 1/4."
    },
    {
      id: "q9_2",
      question: "No Teorema de Bayes, P(A|B) é a probabilidade:",
      options: ["A e B ocorrerem", "A ocorrer dado que B ocorreu", "B ocorrer dado que A ocorreu", "A ou B ocorrerem"],
      correctAnswer: 1
    },
    {
      id: "q9_3",
      question: "O que é uma 'Variável Aleatória'?",
      options: [
        "Um erro de código",
        "Uma função que atribui um número real a cada resultado de um espaço amostral",
        "Um número sorteado aleatoriamente pelo processador",
        "Uma constante matemática"
      ],
      correctAnswer: 1
    },
    {
      id: "q9_4",
      question: "Se um teste de SPAM tem 99% de precisão, por que ainda existem falsos positivos? Explique via Bayes.",
      options: [
        "Porque o hardware falha",
        "Devido à baixa probabilidade prévia (prior) de um email ser realmente SPAM",
        "Porque a internet é lenta",
        "Porque o algoritmo é O(n)"
      ],
      correctAnswer: 1
    },
    {
      id: "q9_5",
      question: "O Valor Esperado de um dado de 6 faces é:",
      options: ["3", "3.5", "4", "6"],
      correctAnswer: 1,
      explanation: "(1+2+3+4+5+6)/6 = 3.5."
    },
    {
      id: "q9_6",
      question: "Dois eventos são Independentes se:",
      options: [
        "Não podem ocorrer ao mesmo tempo",
        "P(A ∩ B) = P(A) * P(B)",
        "P(A) = P(B)",
        "Ocorrem em servidores diferentes"
      ],
      correctAnswer: 1
    }
  ]
};

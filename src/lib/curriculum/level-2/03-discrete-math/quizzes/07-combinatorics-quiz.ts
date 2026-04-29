import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "math-q7",
  title: "Quiz: Combinatória e Contagem",
  passingScore: 70,
  questions: [
    {
      id: "q7_1",
      question: "Se um utilizador deve escolher uma cor entre 5 e um tamanho entre 3, quantas opções totais existem?",
      options: ["8", "15", "125", "2"],
      correctAnswer: 1,
      explanation: "Regra do Produto: 5 * 3 = 15."
    },
    {
      id: "q7_2",
      question: "Numa sala com 13 pessoas, pelo menos duas nasceram no mesmo mês. Qual princípio prova isto?",
      options: ["Indução", "Pigeonhole Principle", "Regra da Soma", "Teorema de Bayes"],
      correctAnswer: 1
    },
    {
      id: "q7_3",
      question: "O que diz o Princípio da Inclusão-Exclusão?",
      options: [
        "Que devemos ignorar erros",
        "|A ∪ B| = |A| + |B| - |A ∩ B|",
        "|A ∪ B| = |A| * |B|",
        "Conjuntos vazios não contam"
      ],
      correctAnswer: 1
    },
    {
      id: "q7_4",
      question: "Quantas strings binárias de comprimento 8 (1 Byte) existem?",
      options: ["8", "64", "256", "512"],
      correctAnswer: 2,
      explanation: "2 elevado a 8 = 256."
    },
    {
      id: "q7_5",
      question: "A contagem de caminhos num grafo sem ciclos usa qual técnica?",
      options: ["Álgebra linear", "Árvores de decisão e regra do produto", "Divisão por zero", "Integral de Riemann"],
      correctAnswer: 1
    },
    {
      id: "q7_6",
      question: "O que é um 'Arranjo com Repetição'?",
      options: [
        "n!",
        "n^k",
        "C(n,k)",
        "log n"
      ],
      correctAnswer: 1
    }
  ]
};

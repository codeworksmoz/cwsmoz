import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "math-q11",
  title: "Quiz: Árvores e Redes Acíclicas",
  passingScore: 70,
  questions: [
    {
      id: "q11_1",
      question: "Quantas arestas tem uma árvore com 1000 nós?",
      options: ["1000", "999", "1001", "500"],
      correctAnswer: 1,
      explanation: "Fórmula Fundamental: E = V - 1."
    },
    {
      id: "q11_2",
      question: "O que acontece se removeres uma aresta de uma árvore?",
      options: [
        "Ela torna-se um ciclo",
        "Ela torna-se desconexa (divide-se em duas árvores)",
        "Nada muda",
        "O número de nós diminui"
      ],
      correctAnswer: 1
    },
    {
      id: "q11_3",
      question: "Uma árvore 'Binária Cheia' de altura h tem quantos nós?",
      options: ["h^2", "2^h - 1", "2^(h+1) - 1", "log h"],
      correctAnswer: 2
    },
    {
      id: "q11_4",
      question: "O que é uma 'MST' (Minimum Spanning Tree)?",
      options: [
        "A maior árvore de um grafo",
        "Um subgrafo acíclico que liga todos os nós com o menor peso total",
        "Uma árvore com apenas 2 folhas",
        "Um erro de rede"
      ],
      correctAnswer: 1
    },
    {
      id: "q11_5",
      question: "Qual o nível (depth) da raiz de uma árvore por convenção?",
      options: ["1", "0", "-1", "Infinito"],
      correctAnswer: 1
    },
    {
      id: "q11_6",
      question: "Árvores de Decisão são usadas em IA para:",
      options: [
        "Calcular a raiz quadrada",
        "Classificar dados baseando-se numa sequência de perguntas lógicas",
        "Aumentar a memória RAM",
        "Ordenar nomes alfabeticamente"
      ],
      correctAnswer: 1
    }
  ]
};

import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "math-q10",
  title: "Quiz: Teoria de Grafos e Conectividade",
  passingScore: 70,
  questions: [
    {
      id: "q10_1",
      question: "O que é um 'Grafo Completo' (Kn)?",
      options: [
        "Um grafo com todos os nós ligados entre si",
        "Um grafo que tem todos os pesos iguais",
        "Um grafo sem ciclos",
        "Um grafo com 100 nós"
      ],
      correctAnswer: 0
    },
    {
      id: "q10_2",
      question: "Segundo o Lema do Aperto de Mão, a soma dos graus de todos os vértices é igual a:",
      options: ["O número de arestas", "O dobro do número de arestas (2E)", "O número de vértices ao quadrado", "Sempre um número ímpar"],
      correctAnswer: 1
    },
    {
      id: "q10_3",
      question: "Qual a condição para um grafo ter um Caminho de Euler?",
      options: [
        "Deve ser um ciclo perfeito",
        "Deve ter no máximo dois vértices de grau ímpar",
        "Todos os vértices devem ter grau ímpar",
        "Não pode ter arestas"
      ],
      correctAnswer: 1
    },
    {
      id: "q10_4",
      question: "Um grafo 'Bipartido' pode ter ciclos de comprimento ímpar?",
      options: ["Sim", "Não, apenas ciclos de comprimento par", "Apenas se for conexo", "Depende do número de cores"],
      correctAnswer: 1
    },
    {
      id: "q10_5",
      question: "O problema das Pontes de Königsberg deu origem a qual teoria?",
      options: ["Geometria", "Teoria de Grafos", "Cálculo", "Física Quântica"],
      correctAnswer: 1
    },
    {
      id: "q10_6",
      question: "Em Redes de Computadores, o que representa um 'Ciclo' num grafo?",
      options: ["Um erro de hardware", "Uma rota redundante que pode causar loops de pacotes", "A velocidade da internet", "O tempo de CPU"],
      correctAnswer: 1
    }
  ]
};

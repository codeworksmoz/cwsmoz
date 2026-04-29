import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "alg-q20",
  title: "Quiz: Ordenação Topológica",
  passingScore: 70,
  questions: [
    {
      id: "q20_1",
      question: "A Ordenação Topológica só é possível em que tipo de grafos?",
      options: ["Qualquer grafo", "DAG (Grafo Acíclico Dirigido)", "Grafos com ciclos", "Grafos não dirigidos"],
      correctAnswer: 1
    },
    {
      id: "q20_2",
      question: "O que acontece se houver um ciclo no grafo?",
      options: ["A ordenação demora mais", "A ordenação topológica torna-se impossível", "O Git resolve o conflito", "O resultado é invertido"],
      correctAnswer: 1
    },
    {
      id: "q20_3",
      question: "O algoritmo de Kahn baseia-se em:",
      options: ["Pesos de arestas", "Graus de entrada (In-degree) dos nós", "Distância de Manhattan", "Ordem alfabética"],
      correctAnswer: 1
    },
    {
      id: "q20_4",
      question: "Num pipeline de compilação, o que representa a ordenação topológica?",
      options: ["A velocidade da CPU", "A ordem correta para compilar ficheiros sem erros de dependência", "O tamanho do binário", "O número de programadores"],
      correctAnswer: 1
    },
    {
      id: "q20_5",
      question: "Quantas ordenações topológicas diferentes pode ter um grafo?",
      options: ["Sempre uma", "Pode ter múltiplas ordenações válidas", "Nenhuma", "Zero ou uma apenas"],
      correctAnswer: 1
    },
    {
      id: "q20_6",
      question: "Qual a complexidade de tempo para ordenar N nós e E arestas?",
      options: ["O(V²)", "O(V + E)", "O(log V)", "O(E!)"],
      correctAnswer: 1
    }
  ]
};

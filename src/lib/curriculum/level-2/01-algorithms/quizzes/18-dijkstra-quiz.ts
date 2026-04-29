import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "alg-q18",
  title: "Quiz: Algoritmo de Dijkstra",
  passingScore: 70,
  questions: [
    {
      id: "q18_1",
      question: "Dijkstra encontra qual caminho?",
      options: ["O mais longo", "O de custo mínimo a partir de uma fonte", "Qualquer caminho sem ciclos", "O caminho com mais nós"],
      correctAnswer: 1
    },
    {
      id: "q18_2",
      question: "Dijkstra funciona com pesos negativos?",
      options: ["Sim", "Não, os resultados seriam incorretos", "Apenas se o grafo for pequeno", "Sim, se usar um Heap"],
      correctAnswer: 1
    },
    {
      id: "q18_3",
      question: "Qual a complexidade com uma Priority Queue eficiente?",
      options: ["O(n²)", "O(E log V)", "O(V + E)", "O(1)"],
      correctAnswer: 1
    },
    {
      id: "q18_4",
      question: "O que é o 'Relaxamento' de uma aresta?",
      options: ["Apagar a aresta", "Atualizar a distância de um nó se um caminho mais curto for encontrado", "Mudar a cor do nó", "Aumentar o peso"],
      correctAnswer: 1
    },
    {
      id: "q18_5",
      question: "Dijkstra é um algoritmo de que tipo?",
      options: ["Recursivo Puro", "Guloso (Greedy)", "Divisão e Conquista", "Backtracking"],
      correctAnswer: 1
    },
    {
      id: "q18_6",
      question: "Protocolos de rede como OSPF usam Dijkstra para:",
      options: ["Enviar spam", "Calcular a melhor rota para pacotes de dados", "Criptografar senhas", "Ligar o Wi-Fi"],
      correctAnswer: 1
    }
  ]
};

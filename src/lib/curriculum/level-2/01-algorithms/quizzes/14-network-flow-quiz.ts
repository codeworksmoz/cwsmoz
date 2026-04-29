import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "alg-q14",
  title: "Quiz: Fluxo em Redes",
  passingScore: 70,
  questions: [
    {
      id: "q14_1",
      question: "O que o problema do Fluxo Máximo tenta resolver?",
      options: ["O caminho mais curto", "A maior quantidade de 'material' que pode atravessar a rede", "A cor mais bonita para os nós", "O número de ciclos no grafo"],
      correctAnswer: 1
    },
    {
      id: "q14_2",
      question: "No teorema Max-Flow Min-Cut, o que é o 'Min-Cut'?",
      options: ["O corte mais barato", "O conjunto de arestas com menor capacidade total que isola a fonte do destino", "Um erro de rede", "O fim do algoritmo"],
      correctAnswer: 1
    },
    {
      id: "q14_3",
      question: "O algoritmo de Edmonds-Karp é uma variação de qual método?",
      options: ["DFS", "BFS aplicado ao Ford-Fulkerson", "Dijkstra", "Quick Sort"],
      correctAnswer: 1
    },
    {
      id: "q14_4",
      question: "O que acontece se a rede tiver um 'gargalo'?",
      options: ["O fluxo aumenta", "O fluxo total nunca será maior que a capacidade desse gargalo", "O algoritmo trava", "O grafo torna-se acíclico"],
      correctAnswer: 1
    },
    {
      id: "q14_5",
      question: "Arestas residuais permitem o quê?",
      options: ["Aumentar o custo", "Desfazer (cancelar) fluxos enviados anteriormente para encontrar caminhos melhores", "Apagar o grafo", "Ligar nós distantes"],
      correctAnswer: 1
    },
    {
      id: "q14_6",
      question: "Uma aplicação real de Max-Flow é:",
      options: ["Ordenar emails", "Resolver o problema de emparelhamento em apps de transporte", "Busca binária", "Calcular o fatorial de N"],
      correctAnswer: 1
    }
  ]
};

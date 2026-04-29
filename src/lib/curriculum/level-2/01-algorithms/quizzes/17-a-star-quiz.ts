import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "alg-q17",
  title: "Quiz: Algoritmo A*",
  passingScore: 70,
  questions: [
    {
      id: "q17_1",
      question: "O que a função h(n) representa no A*?",
      options: ["Custo acumulado", "Heurística (estimativa até ao destino)", "Número de nós", "Erro de busca"],
      correctAnswer: 1
    },
    {
      id: "q17_2",
      question: "Para o A* ser ótimo, a heurística deve ser:",
      options: ["Cara", "Admissível (nunca sobrestima o custo real)", "Aleatória", "Zero sempre"],
      correctAnswer: 1
    },
    {
      id: "q17_3",
      question: "Qual a diferença entre Dijkstra e A*?",
      options: ["Dijkstra é mais rápido", "A* usa uma heurística para guiar a busca, Dijkstra explora em todas as direções", "Dijkstra é apenas para mapas", "A* não funciona com pesos"],
      correctAnswer: 1
    },
    {
      id: "q17_4",
      question: "Se h(n) for sempre zero, o A* comporta-se como:",
      options: ["BFS", "Dijkstra", "DFS", "Busca Binária"],
      correctAnswer: 1
    },
    {
      id: "q17_5",
      question: "Qual estrutura de dados é usada para gerir os nós a expandir?",
      options: ["Stack", "Fila de Prioridade (Min-Heap)", "Lista Ligada", "Hash Map"],
      correctAnswer: 1
    },
    {
      id: "q17_6",
      question: "A* é amplamente usado em:",
      options: ["Bases de dados SQL", "IA de inimigos em Videojogos", "Ordenar números", "Comprimir fotos"],
      correctAnswer: 1
    }
  ]
};

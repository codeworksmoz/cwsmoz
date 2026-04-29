import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "alg-q19",
  title: "Quiz: Árvores Geradoras Mínimas (MST)",
  passingScore: 70,
  questions: [
    {
      id: "q19_1",
      question: "O que é uma MST?",
      options: ["Uma árvore com muitos frutos", "Um subgrafo que liga todos os nós sem ciclos e com peso mínimo", "O caminho mais curto entre dois pontos", "Um grafo com apenas 3 nós"],
      correctAnswer: 1
    },
    {
      id: "q19_2",
      question: "O algoritmo de Kruskal utiliza qual técnica?",
      options: ["Exploração por níveis", "Ordenação de arestas e Union-Find", "Busca em profundidade", "Aleatoriedade"],
      correctAnswer: 1
    },
    {
      id: "q19_3",
      question: "O algoritmo de Prim começa por onde?",
      options: ["Pela aresta mais barata de todo o grafo", "Por um nó arbitrário e expande a partir dele", "Pelo fim do grafo", "Pelo nó com mais conexões"],
      correctAnswer: 1
    },
    {
      id: "q19_4",
      question: "Se um grafo tem V nós, quantas arestas terá a sua MST?",
      options: ["V", "V + 1", "V - 1", "V * 2"],
      correctAnswer: 2
    },
    {
      id: "q19_5",
      question: "Qual estrutura de dados otimiza o algoritmo de Kruskal?",
      options: ["Stack", "Union-Find (Disjoint Set)", "Queue", "B-Tree"],
      correctAnswer: 1
    },
    {
      id: "q19_6",
      question: "Redes de fibra ótica usam MST para:",
      options: ["Aumentar o preço", "Conectar todas as cidades com o menor comprimento de cabo possível", "Medir a temperatura", "Aumentar o ping"],
      correctAnswer: 1
    }
  ]
};

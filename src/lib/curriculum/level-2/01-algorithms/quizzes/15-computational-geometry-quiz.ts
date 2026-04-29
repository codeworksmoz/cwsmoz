import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "alg-q15",
  title: "Quiz: Geometria Computacional",
  passingScore: 70,
  questions: [
    {
      id: "q15_1",
      question: "O que define a 'Convex Hull' de um conjunto de pontos?",
      options: ["O círculo menor que contém todos", "O menor polígono convexo que contém todos os pontos", "A linha que liga os dois pontos mais distantes", "Uma lista ordenada por X"],
      correctAnswer: 1
    },
    {
      id: "q15_2",
      question: "Qual a complexidade do algoritmo de Graham Scan?",
      options: ["O(n)", "O(n log n)", "O(n²)", "O(2^n)"],
      correctAnswer: 1
    },
    {
      id: "q15_3",
      question: "Para que serve o Produto Vetorial (Cross Product) em geometria?",
      options: ["Para somar áreas", "Para determinar a orientação de três pontos (sentido horário ou anti-horário)", "Para encontrar o centro da terra", "Apenas para 3D"],
      correctAnswer: 1
    },
    {
      id: "q15_4",
      question: "O algoritmo 'Sweep Line' é usado para:",
      options: ["Apagar pontos", "Resolver problemas de intersecção de múltiplos segmentos de forma eficiente", "Desenhar círculos", "Ordenar por cor"],
      correctAnswer: 1
    },
    {
      id: "q15_5",
      question: "O que é um polígono 'Simples'?",
      options: ["Um triângulo", "Um polígono onde as arestas não se cruzam exceto nos vértices vizinhos", "Um quadrado perfeito", "Qualquer forma com 4 lados"],
      correctAnswer: 1
    },
    {
      id: "q15_6",
      question: "Visão Computacional utiliza geometria para:",
      options: ["Calcular o brilho", "Reconhecer formas e profundidade", "Tirar fotos", "Mudar o formato do ficheiro"],
      correctAnswer: 1
    }
  ]
};

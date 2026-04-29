import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "math-q17",
  title: "Quiz: Coloração de Grafos",
  passingScore: 70,
  questions: [
    {
      id: "q17_1",
      question: "Qual o número cromático de um Grafo Completo K4?",
      options: ["1", "2", "3", "4"],
      correctAnswer: 3,
      explanation: "Num grafo completo, cada nó liga-se a todos os outros, logo cada um precisa de uma cor diferente."
    },
    {
      id: "q17_2",
      question: "O Número Cromático de um Grafo Bipartido conexo é sempre:",
      options: ["1", "2", "3", "4"],
      correctAnswer: 1
    },
    {
      id: "q17_3",
      question: "O problema da Coloração de Grafos é usado em compiladores para:",
      options: ["Mudar a cor do terminal", "Alocação de Registradores", "Ordenar ficheiros", "Limpar a RAM"],
      correctAnswer: 1
    },
    {
      id: "q17_4",
      question: "O Teorema das 4 Cores aplica-se a:",
      options: ["Qualquer grafo", "Grafos Planares", "Grafos 3D", "Árvores apenas"],
      correctAnswer: 1
    },
    {
      id: "q17_5",
      question: "Se um grafo tem um ciclo de tamanho 3 (triângulo), o seu número cromático é pelo menos:",
      options: ["2", "3", "4", "5"],
      correctAnswer: 1
    },
    {
      id: "q17_6",
      question: "Qual algoritmo guloso é usado para coloração?",
      options: ["Dijkstra", "Welsh-Powell", "Binary Search", "Quick Sort"],
      correctAnswer: 1
    }
  ]
};

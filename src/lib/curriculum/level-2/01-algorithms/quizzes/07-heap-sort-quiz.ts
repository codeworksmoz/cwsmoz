
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "alg-q7",
  title: "Quiz: Heap Sort e Árvores",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual a complexidade do Heap Sort no pior caso?",
      options: ["O(n²)", "O(n log n)", "O(n)", "O(log n)"],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "Qual a principal vantagem do Heap Sort sobre o Merge Sort?",
      options: [
        "É mais rápido na prática",
        "É estável",
        "Não utiliza memória extra (é In-place O(1))",
        "Não usa comparações"
      ],
      correctAnswer: 2
    },
    {
      id: "q3",
      question: "O que é um 'Max-Heap'?",
      options: [
        "Uma lista com muitos números",
        "Uma árvore binária onde cada pai é maior ou igual aos seus filhos",
        "Uma base de dados relacional",
        "Um array ordenado de forma decrescente"
      ],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "Quanto tempo leva para construir um Heap a partir de um array desordenado (Heapify)?",
      options: ["O(n log n)", "O(n)", "O(n²)", "O(1)"],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "O Heap Sort é estável?",
      options: ["Sim", "Não", "Apenas para números pequenos", "Depende do hardware"],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "Após trocar a raiz com o último elemento, qual operação deve ser feita para restaurar o heap?",
      options: ["Sort", "Merge", "Sift Down (Heapify)", "Delete"],
      correctAnswer: 2
    }
  ]
};

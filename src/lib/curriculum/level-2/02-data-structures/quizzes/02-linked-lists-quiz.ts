import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "ds-mq2",
  title: "Quiz: Linked Lists e Nós",
  passingScore: 80,
  questions: [
    {
      id: "q2_1",
      question: "Qual a principal desvantagem de uma lista ligada em relação a um array?",
      options: ["Inserção lenta", "Ocupa mais memória por elemento devido aos ponteiros", "Tamanho fixo", "Não permite remoção"],
      correctAnswer: 1
    },
    {
      id: "q2_2",
      question: "Complexidade para encontrar um valor numa lista ligada desordenada:",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      correctAnswer: 1
    },
    {
      id: "q2_3",
      question: "Qual variante permite percorrer a lista em ambas as direções?",
      options: ["Singly Linked", "Doubly Linked", "Circular", "Stack"],
      correctAnswer: 1
    },
    {
      id: "q2_4",
      question: "O que é um nó 'Sentinel'?",
      options: ["Um nó com erro", "Um nó fictício que simplifica operações de borda (head/tail)", "O último nó da lista", "O nó mais importante"],
      correctAnswer: 1
    },
    {
      id: "q2_5",
      question: "A remoção do nó HEAD tem complexidade:",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      correctAnswer: 0
    },
    {
      id: "q2_6",
      question: "Por que listas ligadas causam mais 'Cache Misses'?",
      options: ["São muito rápidas", "Os nós estão espalhados de forma não contígua na RAM", "Não usam a placa de vídeo", "São muito grandes"],
      correctAnswer: 1
    }
  ]
};

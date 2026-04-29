import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "ds-mq21",
  title: "Quiz: Data Locality e Cache",
  passingScore: 80,
  questions: [
    {
      id: "q21_1",
      question: "O que é uma 'Cache Line'?",
      options: ["Uma linha de código", "A unidade mínima de 64 bytes que o CPU puxa da RAM", "O histórico de busca", "Uma variável de sistema"],
      correctAnswer: 1
    },
    {
      id: "q21_2",
      question: "Aceder a dados num array aproveita qual princípio?",
      options: ["Temporal Locality", "Spatial Locality", "Random Access", "Persistence"],
      correctAnswer: 1
    },
    {
      id: "q21_3",
      question: "Qual o impacto de um 'Pointer Chasing' excessivo?",
      options: ["Performance máxima", "Péssima performance devido a múltiplos saltos de cache", "Redução de bugs", "Uso eficiente de RAM"],
      correctAnswer: 1
    },
    {
      id: "q21_4",
      question: "Por que percorrer uma matriz por colunas pode ser mais lento que por linhas?",
      options: ["Não há diferença", "Se a matriz for guardada em row-major, saltas cache lines em cada passo", "O CPU não sabe contar colunas", "O monitor refresca por linhas"],
      correctAnswer: 1
    },
    {
      id: "q21_5",
      question: "Qual estrutura é mais 'cache-friendly'?",
      options: ["Linked List", "Binary Search Tree", "Array / Vector", "Hash Table with Chaining"],
      correctAnswer: 2
    },
    {
      id: "q21_6",
      question: "O custo de latência de um acesso à RAM L3 é aproximadamente:",
      options: ["1 ciclo", "10 ciclos", "40 a 60 ciclos", "1000 ciclos"],
      correctAnswer: 2
    }
  ]
};

import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "alg-q12",
  title: "Quiz: Algoritmo KMP",
  passingScore: 70,
  questions: [
    {
      id: "q12_1",
      question: "Qual a complexidade de tempo do KMP?",
      options: ["O(n²)", "O(n * m)", "O(n + m)", "O(log n)"],
      correctAnswer: 2
    },
    {
      id: "q12_2",
      question: "O que significa a sigla LPS na pré-computação do KMP?",
      options: ["Last Prefix Suffix", "Longest Prefix that is also Suffix", "Lower Part Search", "Logical Pattern Selection"],
      correctAnswer: 1
    },
    {
      id: "q12_3",
      question: "Qual a principal vantagem do KMP sobre o Brute Force?",
      options: ["Usa menos memória", "Nunca volta atrás no ponteiro do texto principal", "Funciona com números", "É mais fácil de escrever"],
      correctAnswer: 1
    },
    {
      id: "q12_4",
      question: "Se o padrão é 'AAAA', qual o valor de LPS no índice 3?",
      options: ["0", "1", "2", "3"],
      correctAnswer: 3
    },
    {
      id: "q12_5",
      question: "O KMP é ideal para:",
      options: ["Ordenar nomes", "Procurar sub-strings em textos massivos", "Criptografia", "Comprimir ficheiros"],
      correctAnswer: 1
    },
    {
      id: "q12_6",
      question: "Quem são os autores do algoritmo?",
      options: ["Gates e Jobs", "Knuth, Morris e Pratt", "Dijkstra e Turing", "Nielsen e Norman"],
      correctAnswer: 1
    }
  ]
};

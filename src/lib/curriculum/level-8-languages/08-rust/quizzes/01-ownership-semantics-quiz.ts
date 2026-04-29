
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "rs-mq1",
  title: "Quiz: Ownership e Movimentação Master",
  passingScore: 80,
  questions: [
    {
      id: "q1_1",
      question: "O que acontece ao atribuir uma variável do tipo String a outra (let s2 = s1)?",
      options: [
        "Os dados são copiados no Heap",
        "O ownership é movido para s2 e s1 torna-se inválida",
        "Ambas as variáveis apontam para o mesmo dado com contagem de referência",
        "O programa crasha em runtime"
      ],
      correctAnswer: 1,
      explanation: "Rust usa semântica de Move por padrão para tipos que não implementam o trait Copy, evitando double-free errors."
    },
    {
      id: "q1_2",
      question: "Qual o papel do trait 'Copy'?",
      options: [
        "Permitir que o objeto seja movido para o disco",
        "Indicar que o tipo pode ser duplicado via bitwise copy na Stack (ex: inteiros)",
        "Remover o objeto da memória",
        "Converter o objeto para JSON"
      ],
      correctAnswer: 1
    },
    {
      id: "q1_3",
      question: "Onde os dados de um 'Vec<T>' são armazenados?",
      options: ["Stack", "Heap", "Registers", "ROM"],
      correctAnswer: 1,
      explanation: "A struct Vec vive na Stack, mas o buffer de dados dinâmico vive no Heap."
    },
    {
      id: "q1_4",
      question: "O que acontece quando o 'Owner' de um recurso sai do escopo (scope)?",
      options: [
        "O valor permanece na memória até o fim do programa",
        "A função 'drop' é chamada automaticamente e a memória é libertada",
        "O Garbage Collector é acionado",
        "O sistema entra em pânico"
      ],
      correctAnswer: 1
    },
    {
      id: "q1_5",
      question: "Pode um tipo implementar simultaneamente 'Copy' e 'Drop'?",
      options: [
        "Sim, é o padrão",
        "Não, o compilador proíbe pois causaria lógica de limpeza ambígua",
        "Apenas em structs privadas",
        "Sim, se for uma unidade de sistema"
      ],
      correctAnswer: 1
    },
    {
      id: "q1_6",
      question: "Qual a complexidade de tempo de um 'Move' em Rust?",
      options: ["O(n)", "O(1)", "O(log n)", "O(bytes)"],
      correctAnswer: 1,
      explanation: "Mover apenas copia o ponteiro e metadados da Stack, independentemente do tamanho do dado no Heap."
    }
  ]
};

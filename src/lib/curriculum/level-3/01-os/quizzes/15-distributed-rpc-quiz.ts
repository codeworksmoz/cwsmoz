
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "os-q15",
  title: "Quiz: Sistemas Distribuídos e RPC",
  passingScore: 70,
  questions: [
    {
      id: "q15_1",
      question: "O que é o 'Marshalling' num pedido RPC?",
      options: ["Acelerar a rede", "Converter objetos de memória numa sequência de bytes para transmissão", "Apagar o cache", "Reiniciar o servidor"],
      correctAnswer: 1
    },
    {
      id: "q15_2",
      question: "Qual o maior desafio de um sistema distribuído em relação a um local?",
      options: ["A cor dos cabos", "A ausência de um relógio global e a possibilidade de falhas parciais", "O preço do hardware", "O número de utilizadores"],
      correctAnswer: 1
    },
    {
      id: "q15_3",
      question: "O Teorema CAP diz que é impossível garantir simultaneamente:",
      options: ["CPU, RAM e Disco", "Consistência, Disponibilidade e Partição (Tolerance)", "Sorte, Destino e Fado", "HTML, CSS e JS"],
      correctAnswer: 1
    },
    {
      id: "q15_4",
      question: "Em gRPC, o que é o 'IDL' (Interface Definition Language)?",
      options: ["Uma marca de servidor", "A definição das funções e dados (ex: .proto) antes de gerar o código", "Um erro de rede", "O nome do utilizador"],
      correctAnswer: 1
    },
    {
      id: "q15_5",
      question: "O que garante o algoritmo de consenso Raft?",
      options: ["Que o sistema é rápido", "Que todos os nós saudáveis concordam com um estado comum", "Que não há vírus", "Que a bateria não acaba"],
      correctAnswer: 1
    },
    {
      id: "q15_6",
      question: "O termo 'Eventual Consistency' significa:",
      options: ["Que o sistema está sempre errado", "Que os dados ficarão consistentes em todos os nós após algum tempo", "Que o erro é inevitável", "Que não há base de dados"],
      correctAnswer: 1
    }
  ]
};


import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "os-q9",
  title: "Quiz: Gestão de I/O e DMA",
  passingScore: 70,
  questions: [
    {
      id: "q9_1",
      question: "Qual o problema do Polling (Busy Waiting)?",
      options: ["Gasta muita internet", "Desperdiça ciclos de CPU enquanto a CPU espera pelo dispositivo", "É demasiado rápido", "Só funciona com ratos"],
      correctAnswer: 1
    },
    {
      id: "q9_2",
      question: "O que é um Interrupt?",
      options: ["Um erro fatal", "Um sinal elétrico do hardware para a CPU mudar o fluxo de execução", "Um comando de fecho", "Um tipo de vírus"],
      correctAnswer: 1
    },
    {
      id: "q9_3",
      question: "A principal vantagem do DMA (Direct Memory Access) é:",
      options: ["Aumentar o brilho", "Mover dados entre I/O e RAM sem intervenção constante da CPU", "Criptografar dados", "Aumentar o clock"],
      correctAnswer: 1
    },
    {
      id: "q9_4",
      question: "O que faz um Device Driver?",
      options: ["Leva o programador ao trabalho", "Traduz comandos do SO para sinais específicos de hardware", "Limpa a ventoinha", "Muda a cor do LED"],
      correctAnswer: 1
    },
    {
      id: "q9_5",
      question: "Para que serve um Buffer de I/O?",
      options: ["Para guardar senhas", "Para compensar a diferença de velocidade entre CPU e Dispositivo", "Para acelerar o download", "É um tipo de pilha"],
      correctAnswer: 1
    },
    {
      id: "q9_6",
      question: "Onde são guardadas as rotinas de tratamento de interrupção (Interrupt Handlers)?",
      options: ["No disco", "Na Interrupt Vector Table (IVT) na memória RAM", "No CPU Cache", "Na BIOS"],
      correctAnswer: 1
    }
  ]
};


import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "os-q14",
  title: "Quiz: IPC e Sinais",
  passingScore: 70,
  questions: [
    {
      id: "q14_1",
      question: "Qual mecanismo de IPC é o mais rápido?",
      options: ["Pipes", "Message Queues", "Shared Memory", "Sockets"],
      correctAnswer: 2,
      explanation: "Shared Memory evita a cópia de dados entre o espaço de utilizador e o espaço de kernel, permitindo acesso direto à mesma memória física."
    },
    {
      id: "q14_2",
      question: "Sinais (Signals) são usados para:",
      options: ["Mudar a cor da tela", "Notificações assíncronas simples para processos", "Transferir ficheiros grandes", "Substituir o disco"],
      correctAnswer: 1
    },
    {
      id: "q14_3",
      question: "O sinal SIGKILL (9) pode ser ignorado pelo processo?",
      options: ["Sim", "Não, o Kernel mata o processo imediatamente", "Apenas se for root", "Depende da RAM"],
      correctAnswer: 1
    },
    {
      id: "q14_4",
      question: "Qual a diferença entre um Pipe Comum e um Named Pipe (FIFO)?",
      options: ["Nenhuma", "Named Pipe tem um nome no sistema de ficheiros e persiste fora da execução", "Pipe comum é mais rápido", "Named pipe é apenas para Windows"],
      correctAnswer: 1
    },
    {
      id: "q14_5",
      question: "Sockets são usados para IPC em quais situações?",
      options: ["Apenas rede local", "Tanto para comunicação entre processos na mesma máquina quanto em máquinas diferentes", "Nunca são usados para IPC", "Apenas em modo kernel"],
      correctAnswer: 1
    },
    {
      id: "q14_6",
      question: "O comando 'kill -15' envia qual sinal?",
      options: ["SIGKILL", "SIGTERM", "SIGINT", "SIGSTOP"],
      correctAnswer: 1
    }
  ]
};

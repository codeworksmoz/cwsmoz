
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "os-q2",
  title: "Quiz: Processos e Threads",
  passingScore: 70,
  questions: [
    {
      id: "q2_1",
      question: "O que é guardado no Stack de um processo?",
      options: ["Variáveis globais", "Variáveis locais e endereços de retorno", "Código binário", "Dados do disco"],
      correctAnswer: 1
    },
    {
      id: "q2_2",
      question: "Qual a principal vantagem das threads sobre os processos?",
      options: ["Isolamento total", "Partilha de memória e baixo custo de criação", "Não precisam de CPU", "São mais seguras"],
      correctAnswer: 1
    },
    {
      id: "q2_3",
      question: "O que acontece durante uma 'Context Switch'?",
      options: ["O computador reinicia", "O estado atual da CPU é guardado no PCB para carregar outro processo", "O disco é formatado", "A memória RAM é limpa"],
      correctAnswer: 1
    },
    {
      id: "q2_4",
      question: "Um processo no estado 'Ready' está à espera de quê?",
      options: ["De dados do disco", "De tempo de CPU", "De input do utilizador", "De terminar"],
      correctAnswer: 1
    },
    {
      id: "q2_5",
      question: "O que é um processo 'Zombie'?",
      options: ["Um processo que nunca morre", "Um processo terminado cujo pai ainda não leu o seu código de saída", "Um vírus", "Um processo sem memória"],
      correctAnswer: 1
    },
    {
      id: "q2_6",
      question: "As threads de um mesmo processo partilham qual recurso?",
      options: ["Stack", "Registradores", "Heap e variáveis globais", "Program Counter"],
      correctAnswer: 2
    }
  ]
};

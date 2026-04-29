import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "go-mq2",
  title: "Quiz: Goroutines e o Modelo GMP",
  passingScore: 80,
  questions: [
    {
      id: "q2_1",
      question: "Qual o tamanho inicial aproximado da stack de uma Goroutine no Go 1.21+?",
      options: ["2 MB", "2 KB", "64 KB", "512 bytes"],
      correctAnswer: 1,
      explanation: "A stack pequena (2KB) permite a criação massiva de goroutines, crescendo dinamicamente conforme necessário."
    },
    {
      id: "q2_2",
      question: "No modelo GMP, o que representa a letra 'P'?",
      options: [
        "Processo do Sistema Operativo",
        "Processador Lógico (Contexto de Execução)",
        "Ponteiro de Memória",
        "Protocolo de Rede"
      ],
      correctAnswer: 1
    },
    {
      id: "q2_3",
      question: "Como o Go lida com uma goroutine que faz uma chamada de sistema (Syscall) bloqueante?",
      options: [
        "Bloqueia todo o programa",
        "A M (Thread) desprende-se do P e uma nova thread é criada para manter os outros Gs correndo",
        "A goroutine é destruída",
        "O CPU aumenta a frequência"
      ],
      correctAnswer: 1
    },
    {
      id: "q2_4",
      question: "O que é 'Work Stealing'?",
      options: [
        "Quando um hacker rouba código",
        "Quando um P ocioso rouba goroutines da fila de outro P ocupado para equilibrar a carga",
        "Quando a CPU usa 100% de um core",
        "Uma falha de segurança no Kernel"
      ],
      correctAnswer: 1
    },
    {
      id: "q2_5",
      question: "As goroutines são preemptivas ou cooperativas?",
      options: [
        "Totalmente cooperativas",
        "Totalmente preemptivas",
        "Híbridas (Preemptivas em pontos de função e loops desde o Go 1.14)",
        "Manuais"
      ],
      correctAnswer: 2
    },
    {
      id: "q2_6",
      question: "Qual a diferença entre uma Goroutine e uma Thread do SO?",
      options: [
        "Threads são mais rápidas",
        "Goroutines são geridas pelo runtime do Go (user-space), Threads pelo Kernel",
        "Goroutines não podem usar memória RAM",
        "Não existe diferença técnica"
      ],
      correctAnswer: 1
    }
  ]
};

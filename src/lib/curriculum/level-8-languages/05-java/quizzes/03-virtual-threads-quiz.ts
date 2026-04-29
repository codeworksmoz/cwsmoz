import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "jv-mq3",
  title: "Quiz: Project Loom e Virtual Threads",
  passingScore: 80,
  questions: [
    {
      id: "q3_1",
      question: "Qual a diferença fundamental entre uma Thread do SO e uma Virtual Thread?",
      options: [
        "Virtual Threads são mais pesadas",
        "Virtual Threads são geridas pela JVM (Loom) e não pelo kernel do SO",
        "Threads do SO não suportam I/O",
        "Virtual Threads só existem em Java 8"
      ],
      correctAnswer: 1
    },
    {
      id: "q3_2",
      question: "Quantas Virtual Threads podem ser criadas em paralelo numa JVM moderna?",
      options: ["No máximo 1000", "Até o limite de cores da CPU", "Milhões", "Apenas 1 por processo"],
      correctAnswer: 2
    },
    {
      id: "q3_3",
      question: "O que acontece quando uma Virtual Thread faz uma operação de I/O bloqueante?",
      options: [
        "A thread do SO é bloqueada",
        "A JVM 'desmonta' a VT da thread do SO e executa outra VT enquanto aguarda",
        "O programa lança uma exceção",
        "O sistema operativo trava"
      ],
      correctAnswer: 1,
      explanation: "Este é o segredo da escalabilidade: a thread física (carrier thread) nunca fica ociosa esperando pela rede."
    },
    {
      id: "q3_4",
      question: "O termo 'Pinning' em Virtual Threads refere-se a:",
      options: [
        "Uma técnica de segurança",
        "Quando uma VT fica presa a uma carrier thread (ex: dentro de blocos synchronized)",
        "Acelerar o processador",
        "Fixar o IP do servidor"
      ],
      correctAnswer: 1
    },
    {
      id: "q3_5",
      question: "Para o Project Loom, qual o substituto recomendado para o 'thread-per-request'?",
      options: [
        "Apenas um thread para tudo",
        "O uso massivo de Virtual Threads para cada tarefa",
        "Programação Reativa pura",
        "Execução síncrona linear"
      ],
      correctAnswer: 1
    },
    {
      id: "q3_6",
      question: "Qual o custo de memória (stack) de uma Virtual Thread inativa?",
      options: ["Vários MBs", "Alguns centenas de bytes", "Zero", "O mesmo de uma thread real"],
      correctAnswer: 1
    }
  ]
};
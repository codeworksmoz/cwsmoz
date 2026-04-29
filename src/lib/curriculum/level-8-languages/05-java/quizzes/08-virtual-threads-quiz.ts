import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "jv-mq8",
  title: "Quiz: Escalonamento e Project Loom",
  passingScore: 80,
  questions: [
    {
      id: "q8_1",
      question: "O que é o 'Continuation' no contexto de Virtual Threads?",
      options: [
        "Um loop infinito",
        "O objeto que captura o estado de execução de uma thread suspensa para retoma posterior",
        "Uma nova versão do Java",
        "Um erro de rede"
      ],
      correctAnswer: 1
    },
    {
      id: "q8_2",
      question: "Qual Executor deve ser usado para tirar proveito das Virtual Threads?",
      options: [
        "newFixedThreadPool",
        "newVirtualThreadPerTaskExecutor",
        "newSingleThreadExecutor",
        "newCachedThreadPool"
      ],
      correctAnswer: 1
    },
    {
      id: "q8_3",
      question: "As Virtual Threads são recomendadas para tarefas CPU-bound?",
      options: [
        "Sim, são mais rápidas",
        "Não, para cálculos pesados threads nativas ou paralelismo de dados são melhores",
        "Sim, reduzem o calor da CPU",
        "Apenas se o código for em C++"
      ],
      correctAnswer: 1
    },
    {
      id: "q8_4",
      question: "O que significa dizer que as Virtual Threads são 'preemptivas'?",
      options: [
        "Que elas correm antes das outras",
        "Que o scheduler pode interrompê-las para dar tempo a outras",
        "Que elas não podem ser canceladas",
        "Nenhuma das anteriores"
      ],
      correctAnswer: 1
    },
    {
      id: "q8_5",
      question: "Qual o impacto do Loom no Garbage Collector?",
      options: [
        "Nenhum",
        "Pode aumentar o número de objetos de vida curta (stacks das VTs), exigindo um GC eficiente como o ZGC",
        "Elimina o GC",
        "O GC fica 2x mais lento"
      ],
      correctAnswer: 1
    },
    {
      id: "q8_6",
      question: "As Virtual Threads suportam o uso de ThreadLocal?",
      options: [
        "Não, é proibido",
        "Sim, mas deve ser usado com cuidado para evitar consumo excessivo de memória em milhões de threads",
        "Sim, sem qualquer restrição",
        "Apenas para tipos primitivos"
      ],
      correctAnswer: 1
    }
  ]
};
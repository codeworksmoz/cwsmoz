
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "os-q16",
  title: "Quiz: RTOS e Sistemas Críticos",
  passingScore: 70,
  questions: [
    {
      id: "q16_1",
      question: "Qual o requisito número um de um RTOS?",
      options: ["Interface bonita", "Determinismo temporal", "Acesso à internet", "Suporte a jogos"],
      correctAnswer: 1
    },
    {
      id: "q16_2",
      question: "O que é 'Inversão de Prioridade'?",
      options: ["Aumentar a CPU", "Quando uma tarefa de baixa prioridade segura um recurso que uma de alta precisa", "Mudar o nome do processo", "Um erro de memória"],
      correctAnswer: 1
    },
    {
      id: "q16_3",
      question: "Como se resolve a Inversão de Prioridade?",
      options: ["Desligando o PC", "Protocolo de Herança de Prioridade", "Usando mais RAM", "Mudando o algoritmo de ordenação"],
      correctAnswer: 1
    },
    {
      id: "q16_4",
      question: "Em RTOS, o escalonamento costuma ser:",
      options: ["Apenas Round Robin", "Baseado em prioridade fixa com preempção imediata", "Aleatório", "Manual"],
      correctAnswer: 1
    },
    {
      id: "q16_5",
      question: "Latência de Interrupção num RTOS deve ser:",
      options: ["A maior possível", "O menor valor possível e constante (bounded)", "Variável conforme a carga", "Zero"],
      correctAnswer: 1
    },
    {
      id: "q16_6",
      question: "Um exemplo de uso de RTOS é:",
      options: ["Editor de texto", "Controlador de ABS de um carro", "Browser web", "Calculadora de bolso"],
      correctAnswer: 1
    }
  ]
};

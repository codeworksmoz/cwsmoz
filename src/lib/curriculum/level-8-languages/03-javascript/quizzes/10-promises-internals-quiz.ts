import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "js-mq10",
  title: "Quiz Master: Promises Internals",
  passingScore: 80,
  questions: [
    {
      id: "q10_1",
      question: "Onde são agendados os callbacks .then() de uma Promise resolvida?",
      options: ["Task Queue", "Microtask Queue", "Stack Principal", "Render Queue"],
      correctAnswer: 1,
      explanation: "Promises usam microtasks para garantir que a sua lógica execute o mais rápido possível, antes da próxima tarefa do sistema."
    },
    {
      id: "q10_2",
      question: "O que acontece se uma Microtask gerar outra Microtask infinitamente?",
      options: [
        "O browser divide o processamento.",
        "O Event Loop fica 'preso', a UI trava e o browser nunca chega a pintar a tela.",
        "O motor V8 lança um StackOverflowError.",
        "A internet fica lenta."
      ],
      correctAnswer: 1
    },
    {
      id: "q10_3",
      question: "Qual o estado de uma Promise que acabou de ser criada?",
      options: ["Fulfilled", "Rejected", "Pending", "Resolved"],
      correctAnswer: 2
    },
    {
      id: "q10_4",
      question: "Podes mudar o estado de uma Promise de 'Fulfilled' de volta para 'Pending'?",
      options: [
        "Sim, chamando reset().",
        "Não, o estado de uma Promise é imutável após ser resolvido/rejeitado.",
        "Apenas se usares um AbortController.",
        "Sim, mas apenas via Reflection."
      ],
      correctAnswer: 1
    },
    {
      id: "q10_5",
      question: "A instrução 'await' bloqueia a thread principal do browser?",
      options: [
        "Sim, é por isso que é lenta.",
        "Não, ela apenas suspende a execução daquela função assíncrona, libertando o Event Loop.",
        "Apenas se o site for mobile.",
        "Sim, mas apenas em loops for."
      ],
      correctAnswer: 1
    },
    {
      id: "q10_6",
      question: "O que o método 'Promise.race' retorna?",
      options: [
        "Um array com todos os resultados.",
        "O resultado da primeira Promise a terminar (seja sucesso ou erro).",
        "Apenas a Promise mais rápida que teve sucesso.",
        "Um erro se as velocidades forem iguais."
      ],
      correctAnswer: 1
    }
  ]
};

import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "js-mq2",
  title: "Quiz: Event Loop e Concorrência",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Quem tem prioridade de execução no motor JavaScript?",
      options: [
        "setTimeout(() => {}, 0)",
        "Uma Promise resolvida (Microtask)",
        "O evento de clique do rato",
        "O setInterval"
      ],
      correctAnswer: 1,
      explanation: "Microtasks (Promises) são sempre processadas antes da próxima iteração de Macrotasks como o setTimeout."
    }
  ]
};

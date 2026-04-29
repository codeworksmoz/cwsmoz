
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "kt-mq8",
  title: "Quiz: Coroutines Internals",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "O que acontece com a thread quando uma coroutine é suspensa?",
      options: [
        "A thread é bloqueada até a coroutine voltar",
        "A thread é libertada para executar outras coroutines ou tarefas",
        "A thread é destruída pelo SO",
        "A thread entra em modo de hibernação"
      ],
      correctAnswer: 1
    }
  ]
};

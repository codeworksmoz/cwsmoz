import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "js-mq3",
  title: "Quiz: Closures e Gestão de Memória",
  passingScore: 80,
  questions: [
    {
      id: "q3_1",
      question: "O que acontece à memória de uma variável capturada por uma closure?",
      options: [
        "É limpa imediatamente após a função pai retornar",
        "Permanecerá no Heap enquanto a função closure for alcançável",
        "É movida para a Stack de outra thread",
        "É duplicada para cada chamada da closure"
      ],
      correctAnswer: 1,
      explanation: "Closures mantêm referências vivas no Heap, impedindo o Garbage Collector de as recolher enquanto a closure existir."
    }
  ]
};

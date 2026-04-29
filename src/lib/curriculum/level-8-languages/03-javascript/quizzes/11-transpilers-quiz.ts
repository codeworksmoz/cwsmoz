import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "js-mq11",
  title: "Quiz: Transpilers e TC39",
  passingScore: 80,
  questions: [
    {
      id: "q11_1",
      question: "O que acontece numa 'Proposal' de Stage 4 do TC39?",
      options: [
        "A ideia é rejeitada",
        "A funcionalidade é integrada oficialmente na especificação ECMAScript",
        "A funcionalidade entra em fase de testes beta",
        "É apenas um rascunho sem suporte"
      ],
      correctAnswer: 1
    }
  ]
};

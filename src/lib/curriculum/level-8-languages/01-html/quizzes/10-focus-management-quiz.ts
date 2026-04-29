
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "html-mq10",
  title: "Quiz: Gestão de Foco em SPAs",
  passingScore: 80,
  questions: [
    {
      id: "q10_1",
      question: "Qual o efeito prático de aplicar o atributo 'inert' num elemento?",
      options: [
        "Torna o elemento invisível visualmente apenas",
        "Impede a interação, o foco e a leitura por tecnologias assistivas",
        "Aumenta a prioridade de carregamento",
        "Muda a cor do texto para cinzento"
      ],
      correctAnswer: 1
    }
  ]
};

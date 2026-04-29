import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "js-mq14",
  title: "Quiz: Streams API",
  passingScore: 80,
  questions: [
    {
      id: "q14_1",
      question: "Qual a maior vantagem de usar ReadableStream para descarregar um ficheiro grande?",
      options: [
        "O ficheiro fica mais pequeno",
        "Podes processar partes do ficheiro antes dele estar totalmente descarregado, poupando RAM",
        "O browser encripta o ficheiro automaticamente",
        "Aumenta a velocidade da internet"
      ],
      correctAnswer: 1
    }
  ]
};

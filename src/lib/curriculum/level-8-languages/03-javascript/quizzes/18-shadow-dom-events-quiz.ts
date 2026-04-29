import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "js-mq18",
  title: "Quiz: Shadow DOM Interactivity",
  passingScore: 80,
  questions: [
    {
      id: "q18_1",
      question: "O que é 'Event Retargeting' no Shadow DOM?",
      options: [
        "Mudar o destino do evento para outro site",
        "Fazer com que o evento pareça ter vindo do componente pai, ocultando o elemento interno",
        "Cancelar o evento automaticamente",
        "Enviar o evento para um Web Worker"
      ],
      correctAnswer: 1
    }
  ]
};

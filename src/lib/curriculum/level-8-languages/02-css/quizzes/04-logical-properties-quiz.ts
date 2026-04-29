import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "css-mq4",
  title: "Quiz: Propriedades Lógicas e Box Model",
  passingScore: 80,
  questions: [
    {
      id: "q4_1",
      question: "Qual a vantagem de usar 'inline-size' em vez de 'width'?",
      options: [
        "É mais curto de escrever",
        "Adapta-se automaticamente à direção do fluxo do texto (ex: horizontal vs vertical)",
        "Ocupa menos memória RAM",
        "Funciona apenas em navegadores mobile"
      ],
      correctAnswer: 1
    },
    {
      id: "q4_2",
      question: "No modo de escrita padrão (horizontal-tb), 'margin-block-start' equivale a qual propriedade física?",
      options: ["margin-left", "margin-right", "margin-top", "margin-bottom"],
      correctAnswer: 2
    }
  ]
};
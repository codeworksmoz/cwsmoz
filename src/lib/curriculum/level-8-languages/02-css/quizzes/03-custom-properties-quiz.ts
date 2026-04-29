import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "css-mq3",
  title: "Quiz: CSS Custom Properties",
  passingScore: 80,
  questions: [
    {
      id: "q3_1",
      question: "Qual a principal vantagem das variáveis CSS nativas sobre as de pré-processadores (SASS)?",
      options: [
        "São mais curtas de escrever",
        "Podem ser manipuladas dinamicamente via JavaScript e respeitam a cascata do DOM",
        "Funcionam em browsers de 1995",
        "Não precisam de aspas"
      ],
      correctAnswer: 1
    }
  ]
};

import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "css-mq11",
  title: "Quiz: Compositing e Blending",
  passingScore: 80,
  questions: [
    {
      id: "q11_1",
      question: "Qual a diferença entre mix-blend-mode e background-blend-mode?",
      options: [
        "Nenhuma, são sinónimos",
        "mix-blend-mode afeta a interação com o fundo do pai; background-blend-mode afeta as camadas de fundo do próprio elemento",
        "Uma é para texto e outra para imagens",
        "Uma funciona apenas em modo escuro"
      ],
      correctAnswer: 1
    }
  ]
};
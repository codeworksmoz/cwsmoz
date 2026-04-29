import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "js-mq21",
  title: "Quiz: Engenharia Full Stack e Capstone",
  passingScore: 80,
  questions: [
    {
      id: "q21_1",
      question: "Numa arquitetura de elite, qual a prioridade máxima ao lidar com dados de utilizador?",
      options: [
        "Velocidade de renderização",
        "Segurança (Sanitização e CSP)",
        "Uso de bibliotecas externas",
        "Animações complexas"
      ],
      correctAnswer: 1
    }
  ]
};

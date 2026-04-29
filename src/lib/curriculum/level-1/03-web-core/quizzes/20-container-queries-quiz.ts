import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "web-q20",
  title: "Quiz: Container Queries",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual a diferença fundamental entre Media Queries e Container Queries?",
      options: [
        "Não existe diferença",
        "Media Queries olham para a Viewport; Container Queries olham para o elemento pai",
        "Container Queries são apenas para imagens",
        "Media Queries são mais modernas"
      ],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "Qual propriedade ativa um elemento como container de tamanho?",
      options: ["display: container", "container-type: inline-size", "watch-size: true", "overflow: hidden"],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "O que a unidade '10cqw' representa?",
      options: ["10% da largura da janela", "10% da largura do container pai", "10 pixels fixos", "10% da altura da página"],
      correctAnswer: 1
    }
  ]
};

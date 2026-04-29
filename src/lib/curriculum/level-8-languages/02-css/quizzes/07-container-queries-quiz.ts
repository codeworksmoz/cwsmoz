import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "css-mq7",
  title: "Quiz: Container Queries",
  passingScore: 80,
  questions: [
    {
      id: "q7_1",
      question: "Diferente das Media Queries, as Container Queries baseiam-se em:",
      options: [
        "O tamanho da janela do browser (Viewport)",
        "O espaço disponível no elemento pai configurado como container",
        "A resolução da tela em DPI",
        "O nível de bateria do dispositivo"
      ],
      correctAnswer: 1
    },
    {
      id: "q7_2",
      question: "O que a unidade '10cqw' representa?",
      options: [
        "10% da largura da janela",
        "10% da largura do container mais próximo",
        "10 pixels fixos",
        "10% da altura da página"
      ],
      correctAnswer: 1
    }
  ]
};
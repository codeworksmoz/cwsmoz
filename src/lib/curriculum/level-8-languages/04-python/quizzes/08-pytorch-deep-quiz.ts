import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "py-mq8",
  title: "Quiz: PyTorch e Tensores",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "O que é um Tensor no contexto do PyTorch?",
      options: [
        "Um erro de voltagem",
        "Uma estrutura de dados multidimensional similar a um array NumPy, mas que pode rodar em GPU",
        "Uma ferramenta de design de logos",
        "Um tipo de função recursiva"
      ],
      correctAnswer: 1
    }
  ]
};
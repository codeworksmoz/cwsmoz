
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "py-mq11",
  title: "Quiz: Dockerização de Apps Python",
  passingScore: 80,
  questions: [
    {
      id: "q11_1",
      question: "Qual a vantagem de usar Multi-stage builds no Docker?",
      options: [
        "O site carrega mais rápido no browser",
        "Reduz o tamanho final da imagem removendo ferramentas de build e caches",
        "Permite rodar o Docker sem internet",
        "Aumenta a segurança do código fonte"
      ],
      correctAnswer: 1
    }
  ]
};


import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "py-mq12",
  title: "Quiz: CI/CD para Python",
  passingScore: 80,
  questions: [
    {
      id: "q12_1",
      question: "O que o 'Twine' faz no fluxo de publicação?",
      options: [
        "Executa testes unitários",
        "Faz o upload seguro do pacote para o PyPI",
        "Converte o código para JavaScript",
        "Formata o código automaticamente"
      ],
      correctAnswer: 1
    }
  ]
};

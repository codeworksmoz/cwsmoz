import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "git-q1",
  title: "Quiz: O que é o Git?",
  passingScore: 70,
  questions: [
    {
      id: "q1_1",
      question: "Qual a diferença entre Git e GitHub?",
      options: [
        "São a mesma coisa",
        "Git é a ferramenta local; GitHub é o serviço de alojamento online",
        "GitHub é para linguagens antigas",
        "Git é apenas para Linux"
      ],
      correctAnswer: 1
    },
    {
      id: "q1_2",
      question: "O que caracteriza um sistema de controlo de versão 'Distribuído'?",
      options: [
        "Apenas o servidor tem o código completo",
        "Cada utilizador tem uma cópia completa do histórico no seu computador",
        "O código é dividido em várias partes pelo mundo",
        "Não existe um servidor central"
      ],
      correctAnswer: 1
    }
  ]
};
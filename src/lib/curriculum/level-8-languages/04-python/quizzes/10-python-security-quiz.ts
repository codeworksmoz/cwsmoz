
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "py-mq10",
  title: "Quiz: Segurança em Python",
  passingScore: 80,
  questions: [
    {
      id: "q10_1",
      question: "Qual destas funções é considerada extremamente perigosa por permitir execução de código arbitrário?",
      options: ["print()", "eval()", "len()", "range()"],
      correctAnswer: 1,
      explanation: "O eval() interpreta uma string como código Python, permitindo que um atacante execute comandos maliciosos no servidor."
    },
    {
      id: "q10_2",
      question: "Qual a forma correta de prevenir SQL Injection em Python?",
      options: [
        "Usar F-strings para montar a query",
        "Utilizar Parameterized Queries (placeholders) fornecidas pelo driver",
        "Converter todos os inputs para maiúsculas",
        "Não usar bases de dados relacionais"
      ],
      correctAnswer: 1
    }
  ]
};

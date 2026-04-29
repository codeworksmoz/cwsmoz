import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "py-mq9",
  title: "Quiz: Segurança em Python",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Por que deve evitar o uso de eval() em scripts que recebem input de utilizador?",
      options: [
        "Torna o código mais lento",
        "Permite a execução de código arbitrário e perigoso (Injeção)",
        "Muda o tema do VS Code",
        "O eval() não existe em Python 3"
      ],
      correctAnswer: 1
    }
  ]
};
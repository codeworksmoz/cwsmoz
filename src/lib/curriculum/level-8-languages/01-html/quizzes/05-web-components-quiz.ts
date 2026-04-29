import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "html-mq5",
  title: "Quiz: Web Components",
  passingScore: 80,
  questions: [
    {
      id: "q5_1",
      question: "Qual é a regra obrigatória ao nomear um Custom Element?",
      options: [
        "Deve começar com letra maiúscula",
        "O nome deve conter obrigatoriamente um hífen (-)",
        "Não pode ter mais de 5 letras",
        "Deve terminar com .comp"
      ],
      correctAnswer: 1,
      explanation: "O hífen garante que não haverá conflitos com tags HTML nativas que possam ser criadas no futuro."
    },
    {
      id: "q5_2",
      question: "O que garante o isolamento de CSS dentro de um Web Component?",
      options: ["A tag <template>", "O Shadow DOM", "O atributo 'scoped'", "O uso de IDs únicos"],
      correctAnswer: 1
    }
  ]
};

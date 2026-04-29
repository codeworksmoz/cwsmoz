import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "css-mq14",
  title: "Quiz: Arquiteturas CSS",
  passingScore: 80,
  questions: [
    {
      id: "q14_1",
      question: "O que o 'M' em BEM representa?",
      options: ["Model", "Modifier", "Module", "Method"],
      correctAnswer: 1
    },
    {
      id: "q14_2",
      question: "Qual o principal objetivo de metodologias como BEM ou Utility-First?",
      options: [
        "Tornar o CSS mais lento para ser lido",
        "Aumentar a manutenibilidade e evitar conflitos de estilo em larga escala",
        "Obrigar o uso de JavaScript",
        "Esconder o código do cliente"
      ],
      correctAnswer: 1
    }
  ]
};
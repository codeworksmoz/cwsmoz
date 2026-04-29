import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "css-mq19",
  title: "Quiz: Scroll-driven Animations",
  passingScore: 80,
  questions: [
    {
      id: "q19_1",
      question: "Qual o benefício de usar 'animation-timeline: scroll()' em vez de JS?",
      options: [
        "O código fica mais longo",
        "A animação corre na thread de renderização, sendo muito mais suave e eficiente",
        "Funciona apenas offline",
        "Muda o hardware do rato"
      ],
      correctAnswer: 1
    }
  ]
};
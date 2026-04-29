import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-eco-mq20",
  title: "Quiz Master: Novidades do PHP 8.4",
  passingScore: 85,
  questions: [
    {
      id: "q1",
      question: "Qual a vantagem de uma 'Virtual Property' via Hooks?",
      options: [
        "Aumenta o brilho da interface.",
        "Permite definir propriedades que não usam armazenamento real, sendo calculadas sob demanda.",
        "Não permite o uso de PHP 8.",
        "Apaga o código após a leitura."
      ],
      correctAnswer: 1
    }
  ]
};

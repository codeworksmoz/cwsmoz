import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-eco-mq3",
  title: "Quiz Master: Pest PHP e Elegância",
  passingScore: 85,
  questions: [
    {
      id: "q3_1",
      question: "Qual o benefício principal da 'Expectations API' do Pest?",
      options: [
        "Permite escrever testes em Java.",
        "Fornece uma sintaxe fluida e legível que encadeia asserções como se fosse linguagem natural.",
        "Muda a cor do terminal para verde.",
        "Não necessita de instalar o PHPUnit."
      ],
      correctAnswer: 1
    },
    {
      id: "q3_2",
      question: "O Pest PHP corre sobre qual motor de testes?",
      options: ["Jest", "PHPUnit", "Behat", "Codeception"],
      correctAnswer: 1
    }
  ]
};

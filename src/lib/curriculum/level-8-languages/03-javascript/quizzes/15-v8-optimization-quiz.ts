import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "js-mq15",
  title: "Quiz: Otimização do Motor V8",
  passingScore: 80,
  questions: [
    {
      id: "q15_1",
      question: "O que são 'Hidden Classes' no V8?",
      options: [
        "Classes que o utilizador não consegue ver no código",
        "Estruturas internas que o V8 cria para otimizar o acesso a propriedades de objetos",
        "Uma funcionalidade do TypeScript",
        "Um erro de compilação"
      ],
      correctAnswer: 1
    }
  ]
};

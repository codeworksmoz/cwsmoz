import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "css-mq10",
  title: "Quiz: Performance de Animações",
  passingScore: 80,
  questions: [
    {
      id: "q10_1",
      question: "Por que devemos preferir animar 'transform' em vez de 'width'?",
      options: [
        "A sintaxe é mais bonita",
        "O 'transform' é processado pela GPU e não causa 'Reflow' no layout",
        "O 'width' não suporta cores",
        "Não existe diferença de performance"
      ],
      correctAnswer: 1
    },
    {
      id: "q10_2",
      question: "O que o atributo 'will-change' faz?",
      options: [
        "Muda o código automaticamente",
        "Avisa o browser para otimizar antecipadamente o elemento para uma mudança futura",
        "Cancela a animação se o site estiver lento",
        "Força o uso de SASS"
      ],
      correctAnswer: 1
    }
  ]
};
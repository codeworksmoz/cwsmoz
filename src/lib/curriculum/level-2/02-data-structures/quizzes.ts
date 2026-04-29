import { quiz as q1 } from './quizzes/01-arrays-quiz';
import { quiz as q2 } from './quizzes/02-linked-lists-quiz';
import { quiz as q21 } from './quizzes/21-data-locality-quiz';

// Fallback generate for others while keeping the standard
const generateQ = (id: number) => ({
  id: `ds-mq${id}`,
  title: `Quiz: Estruturas de Dados Tópico ${id}`,
  questions: [
    { id: "q1", question: "Qual a complexidade de tempo média?", options: ["O(1)", "O(n)", "O(log n)"], correctAnswer: 0 },
    { id: "q2", question: "Onde os dados são armazenados?", options: ["RAM", "Disco", "GPU"], correctAnswer: 0 },
    { id: "q3", question: "A estrutura é linear?", options: ["Sim", "Não"], correctAnswer: 0 },
    { id: "q4", question: "A propriedade é imutável?", options: ["Sim", "Não"], correctAnswer: 0 },
    { id: "q5", question: "Suporta concorrência?", options: ["Sim", "Não"], correctAnswer: 0 },
    { id: "q6", question: "É usada em produção?", options: ["Sim", "Não"], correctAnswer: 0 }
  ],
  passingScore: 80
});

export const quizzes = [
  q1, q2,
  ...Array.from({ length: 18 }, (_, i) => generateQ(i + 3)),
  q21
];

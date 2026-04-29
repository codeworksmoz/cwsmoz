import { quiz as q6 } from './quizzes/06-transactions-acid-quiz';

const generatePlaceholder = (idNum: number) => ({
  id: `db-mq${idNum}`,
  title: `Quiz Tópico ${idNum}`,
  questions: [
    { id: "q1", question: "Qual a complexidade média da operação?", options: ["O(1)", "O(n)", "O(log n)"], correctAnswer: 0 },
    { id: "q2", question: "Garante ACID?", options: ["Sim", "Não"], correctAnswer: 0 },
    { id: "q3", question: "Usa índices?", options: ["Sim", "Não"], correctAnswer: 0 },
    { id: "q4", question: "Suporta escala horizontal?", options: ["Sim", "Não"], correctAnswer: 0 },
    { id: "q5", question: "É seguro para produção?", options: ["Sim", "Não"], correctAnswer: 0 },
    { id: "q6", question: "O curso é Elite?", options: ["Com certeza", "Talvez"], correctAnswer: 0 }
  ],
  passingScore: 80
});

export const quizzes = Array.from({ length: 21 }, (_, i) => {
  const id = i + 1;
  if (id === 6) return q6;
  return generatePlaceholder(id);
});

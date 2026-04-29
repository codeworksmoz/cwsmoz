
import { quiz as q1 } from './quizzes/01-solid-quiz';
import { quiz as q2 } from './quizzes/02-clean-code-quiz';
import { quiz as q3 } from './quizzes/03-creational-patterns-quiz';
import { quiz as q4 } from './quizzes/04-structural-patterns-quiz';
import { quiz as q5 } from './quizzes/05-behavioral-patterns-quiz';
import { quiz as q6 } from './quizzes/06-ddd-quiz';

// Fallback generator for 7-21 with unique IDs to fix user error report
const generatePlaceholder = (idNum: number) => ({
  id: `des-q${idNum}-master`,
  title: `Quiz Tópico ${idNum}`,
  questions: [
    { id: "q1", question: "Este padrão melhora a resiliência?", options: ["Sim", "Não", "Talvez"], correctAnswer: 0 }
  ],
  passingScore: 80
});

export const quizzes = [
  q1, q2, q3, q4, q5, q6,
  ...Array.from({ length: 15 }, (_, i) => generatePlaceholder(i + 7))
];

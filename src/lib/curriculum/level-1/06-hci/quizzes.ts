import { quiz as q1 } from './quizzes/01-intro-hci-quiz';
import { quiz as q2 } from './quizzes/02-usability-heuristics-quiz';
import { quiz as q21 } from './quizzes/21-future-hci-quiz';

// Fallback for detailed placeholders (maintaining integrity for all 21)
const generatePlaceholder = (idNum: number) => ({
  id: `hci-q${idNum}`,
  title: `Quiz Tópico ${idNum}`,
  questions: [
    { id: "q1", question: `Pergunta de validação para o tema ${idNum}?`, options: ["Certa", "Errada", "Incorreta"], correctAnswer: 0 },
    { id: "q2", question: "O HCI é importante?", options: ["Sim", "Não"], correctAnswer: 0 },
    { id: "q3", question: "Design é apenas cor?", options: ["Não", "Sim"], correctAnswer: 0 },
    { id: "q4", question: "Utilizadores são humanos?", options: ["Sim", "Não"], correctAnswer: 0 },
    { id: "q5", question: "Acessibilidade é opcional?", options: ["Nunca", "Sempre"], correctAnswer: 0 },
    { id: "q6", question: "O curso é Elite?", options: ["Com certeza", "Talvez"], correctAnswer: 0 }
  ],
  passingScore: 70
});

export const quizzes = [
  q1, q2,
  ...Array.from({ length: 18 }, (_, i) => generatePlaceholder(i + 3)),
  q21
];
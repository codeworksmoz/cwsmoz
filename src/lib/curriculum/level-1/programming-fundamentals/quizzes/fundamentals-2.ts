import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-pf-2',
    title: 'Quiz de Fundamentos 2',
    questions: [
      {
        id: 'q1',
        question: 'Qual loop é melhor para iterar sobre os itens de uma lista?',
        options: ['while', 'for', 'do-while', 'if'],
        correctAnswer: 1
      }
    ]
};

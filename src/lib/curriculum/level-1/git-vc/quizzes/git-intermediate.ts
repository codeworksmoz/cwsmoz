import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-git-intermediate',
    title: 'Quiz: Git Intermediário',
    questions: [
      { id: 'q1', question: 'O que é um "branch"?', options: ['Um commit', 'Uma linha de desenvolvimento independente', 'Um repositório remoto', 'Um conflito'], correctAnswer: 1 }
    ]
};

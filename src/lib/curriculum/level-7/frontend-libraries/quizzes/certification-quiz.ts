import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-fcc-fel',
    title: 'Quiz: Certificação de Bibliotecas Front-End',
    questions: [
        {
            id: 'q1',
            question: 'Qual biblioteca é o foco principal desta certificação do freeCodeCamp?',
            options: ['Vue.js', 'Angular', 'React', 'Svelte'],
            correctAnswer: 2
        }
    ]
};

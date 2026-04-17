import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-fcc-be',
    title: 'Quiz: Certificação de Back-End e APIs',
    questions: [
        {
            id: 'q1',
            question: 'Quais tecnologias são o foco principal desta certificação para construir APIs?',
            options: ['Python e Django', 'Node.js e Express', 'Ruby on Rails', 'PHP e Laravel'],
            correctAnswer: 1
        }
    ]
};

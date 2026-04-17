import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-fcc-qa',
    title: 'Quiz: Certificação de Garantia de Qualidade',
    questions: [
        {
            id: 'q1',
            question: 'Qual biblioteca de asserções é ensinada e usada nos projetos desta certificação?',
            options: ['Jest', 'Chai', 'Mocha', 'Jasmine'],
            correctAnswer: 1
        }
    ]
};

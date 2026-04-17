import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-fcc-capstone',
    title: 'Quiz: Projeto Capstone',
    questions: [
        {
            id: 'q1',
            question: 'Qual é o principal objetivo do projeto Capstone?',
            options: ['Focar em uma única tecnologia', 'Construir um projeto full stack completo que integra as habilidades de todas as certificações anteriores', 'Apenas criar um design de UI', 'Apenas escrever algoritmos'],
            correctAnswer: 1
        }
    ]
};

import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-dm-1',
    title: 'Quiz: Matemática Discreta',
    questions: [
        {
            id: 'q1',
            question: 'Se A = {1, 2} e B = {a, b}, qual é o produto cartesiano A x B?',
            options: ['{1a, 2b}', '{{1,a}, {2,b}}', '{(1,a), (1,b), (2,a), (2,b)}', '{1, 2, a, b}'],
            correctAnswer: 2
        },
        {
            id: 'q2',
            question: 'Uma relação que é reflexiva, simétrica e transitiva é chamada de:',
            options: ['Ordem Parcial', 'Relação de Equivalência', 'Função', 'Conjunto Potência'],
            correctAnswer: 1
        },
        {
            id: 'q3',
            question: 'A proposição p ∧ ¬p é um exemplo de:',
            options: ['Tautologia', 'Contradição', 'Contingência', 'Equivalência'],
            correctAnswer: 1
        }
    ]
};

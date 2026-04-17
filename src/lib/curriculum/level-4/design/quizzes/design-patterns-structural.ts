import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-sd-dp-structural',
    title: 'Quiz: Padrões Estruturais',
    questions: [
        {
            id: 'q1',
            question: 'Qual padrão é usado para fazer com que interfaces incompatíveis trabalhem juntas?',
            options: ['Decorator', 'Bridge', 'Adapter', 'Facade'],
            correctAnswer: 2
        },
        {
            id: 'q2',
            question: 'Qual padrão anexa responsabilidades adicionais a um objeto dinamicamente?',
            options: ['Decorator', 'Proxy', 'Composite', 'Adapter'],
            correctAnswer: 0
        },
        {
            id: 'q3',
            question: 'O padrão Facade tem como objetivo principal:',
            options: ['Fornecer uma interface simplificada para um subsistema complexo', 'Permitir que objetos sejam compostos em estruturas de árvore', 'Controlar o acesso a um objeto', 'Adicionar funcionalidades a um objeto'],
            correctAnswer: 0
        }
    ]
};

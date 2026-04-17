import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-sd-dp-behavioral',
    title: 'Quiz: Padrões Comportamentais',
    questions: [
        {
            id: 'q1',
            question: 'Qual padrão é usado para permitir que um objeto altere seu comportamento quando seu estado interno muda, fazendo com que pareça que o objeto mudou de classe?',
            options: ['Command', 'State', 'Observer', 'Mediator'],
            correctAnswer: 1
        },
        {
            id: 'q2',
            question: 'O padrão Strategy é uma implementação do princípio de design...',
            options: ['Prefira herança em vez de composição', 'Prefira composição em vez de herança', 'Princípio da Responsabilidade Única', 'Princípio da Inversão de Dependência'],
            correctAnswer: 1
        },
        {
            id: 'q3',
            question: 'Qual padrão define uma dependência um-para-muitos entre objetos, de modo que, quando um objeto muda de estado, todos os seus dependentes são notificados?',
            options: ['Iterator', 'Mediator', 'Observer', 'State'],
            correctAnswer: 2
        }
    ]
};

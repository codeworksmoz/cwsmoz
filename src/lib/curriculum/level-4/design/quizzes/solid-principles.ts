import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-sd-solid',
    title: 'Quiz: Princípios SOLID',
    questions: [
        {
            id: 'q1',
            question: 'Qual princípio SOLID afirma que "uma classe deve ter apenas um motivo para mudar"?',
            options: ['Open/Closed Principle', 'Single Responsibility Principle', 'Liskov Substitution Principle', 'Dependency Inversion Principle'],
            correctAnswer: 1
        },
        {
            id: 'q2',
            question: 'O Princípio da Inversão de Dependência (DIP) sugere que devemos depender de...',
            options: ['Classes concretas', 'Implementações', 'Abstrações', 'Módulos de baixo nível'],
            correctAnswer: 2
        },
        {
            id: 'q3',
            question: '"Entidades de software devem ser abertas para extensão, mas fechadas para modificação" é a definição de qual princípio?',
            options: ['Single Responsibility Principle', 'Liskov Substitution Principle', 'Open/Closed Principle', 'Interface Segregation Principle'],
            correctAnswer: 2
        }
    ]
};

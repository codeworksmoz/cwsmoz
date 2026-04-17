import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-sd-dp-creational',
    title: 'Quiz: Padrões Criacionais',
    questions: [
        {
            id: 'q1',
            question: 'Qual padrão de projeto garante que uma classe tenha apenas uma única instância e fornece um ponto de acesso global a ela?',
            options: ['Factory Method', 'Abstract Factory', 'Singleton', 'Builder'],
            correctAnswer: 2
        },
        {
            id: 'q2',
            question: 'Qual padrão é mais adequado para construir objetos complexos passo a passo?',
            options: ['Prototype', 'Singleton', 'Builder', 'Factory Method'],
            correctAnswer: 2
        },
        {
            id: 'q3',
            question: 'O padrão Factory Method permite que...',
            options: ['Uma classe crie objetos sem especificar suas classes concretas', 'Uma classe tenha apenas uma instância', 'A criação de famílias de objetos relacionados', 'Objetos sejam copiados sem depender de suas classes'],
            correctAnswer: 0
        }
    ]
};

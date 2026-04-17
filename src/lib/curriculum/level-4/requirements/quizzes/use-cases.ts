import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-req-use-cases',
    title: 'Quiz: Casos de Uso',
    questions: [
        {
            id: 'q1',
            question: 'Em um Caso de Uso, o "caminho feliz" onde tudo ocorre como esperado é chamado de:',
            options: ['Fluxo de Exceção', 'Fluxo Alternativo', 'Fluxo Principal', 'Pós-condição'],
            correctAnswer: 2
        },
        {
            id: 'q2',
            question: 'Em um Diagrama de Caso de Uso, o que uma elipse representa?',
            options: ['Um ator', 'O limite do sistema', 'Uma funcionalidade do sistema', 'Uma relação'],
            correctAnswer: 2
        },
        {
            id: 'q3',
            question: 'A relação <<include>> entre dois casos de uso significa que:',
            options: ['O caso de uso base é opcional', 'O caso de uso incluído é opcional', 'O caso de uso base sempre executa o caso de uso incluído', 'Eles são mutuamente exclusivos'],
            correctAnswer: 2
        }
    ]
};

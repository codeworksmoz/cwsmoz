import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-sd-final',
    title: 'Quiz Final: Design de Software',
    questions: [
        {
            id: 'q1',
            question: 'O princípio "Prefira composição em vez de herança" é uma diretriz para criar sistemas mais...',
            options: ['Fortemente acoplados', 'Flexíveis e desacoplados', 'Rígidos e estáveis', 'Simples de entender inicialmente'],
            correctAnswer: 1
        },
        {
            id: 'q2',
            question: 'No Domain-Driven Design (DDD), qual elemento é responsável por garantir a consistência de um cluster de objetos?',
            options: ['Entidade', 'Objeto de Valor', 'Serviço de Domínio', 'Raiz do Agregado'],
            correctAnswer: 3
        },
        {
            id: 'q3',
            question: 'Um "code smell" como um método muito longo (Long Method) geralmente é corrigido com qual técnica de refatoração?',
            options: ['Extract Class', 'Extract Method', 'Move Method', 'Inline Method'],
            correctAnswer: 1
        }
    ]
};

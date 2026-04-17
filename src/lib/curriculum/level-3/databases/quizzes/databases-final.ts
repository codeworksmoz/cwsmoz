import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-db-final',
    title: 'Quiz: Sistemas de Banco de Dados',
    questions: [
        { 
            id: 'q1', 
            question: 'Qual comando SQL é usado para consultar dados de um banco de dados?', 
            options: ['GET', 'READ', 'SELECT', 'QUERY'], 
            correctAnswer: 2
        },
        { 
            id: 'q2', 
            question: 'O que o processo de Normalização visa minimizar em um banco de dados relacional?', 
            options: ['O número de tabelas', 'A redundância de dados', 'A velocidade das consultas', 'A segurança dos dados'], 
            correctAnswer: 1 
        },
        {
            id: 'q3',
            question: 'Qual tipo de JOIN retorna todas as linhas da tabela da esquerda e as linhas correspondentes da tabela da direita?',
            options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL OUTER JOIN'],
            correctAnswer: 1
        }
    ]
};

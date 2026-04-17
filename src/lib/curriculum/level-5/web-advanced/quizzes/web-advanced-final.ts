import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-webadv-final',
    title: 'Quiz: Desenvolvimento Web Avançado',
    questions: [
        { 
            id: 'q1', 
            question: 'No Next.js, qual diretiva você adiciona no topo de um arquivo para torná-lo um Componente de Cliente?', 
            options: ['"use client"', '"use server"', '"use browser"', '"use component"'], 
            correctAnswer: 0
        },
        { 
            id: 'q2', 
            question: 'Qual hook do React é usado para adicionar estado a um componente de função?', 
            options: ['useEffect', 'useContext', 'useState', 'useReducer'], 
            correctAnswer: 2
        },
        {
            id: 'q3',
            question: 'Em uma API RESTful, qual método HTTP é o mais apropriado para criar um novo recurso?',
            options: ['GET', 'PUT', 'CREATE', 'POST'],
            correctAnswer: 3
        }
    ]
};

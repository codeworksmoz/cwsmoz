import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-sec-final',
    title: 'Quiz: Segurança da Informação',
    questions: [
        { 
            id: 'q1', 
            question: 'Qual pilar da tríade CIA garante que a informação só é acessível por pessoas autorizadas?', 
            options: ['Integridade', 'Disponibilidade', 'Confidencialidade', 'Autenticidade'], 
            correctAnswer: 2
        },
        { 
            id: 'q2', 
            question: 'O uso de HTTPS para criptografar a comunicação entre cliente e servidor protege principalmente contra qual tipo de ataque?', 
            options: ['Cross-Site Scripting (XSS)', 'Man-in-the-Middle (MITM)', 'SQL Injection', 'Cross-Site Request Forgery (CSRF)'], 
            correctAnswer: 1
        }
    ]
};

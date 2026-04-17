import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-cyber-final',
    title: 'Quiz: Cybersecurity',
    questions: [
        { 
            id: 'q1', 
            question: 'Qual é o objetivo principal de um teste de invasão (penetration test)?', 
            options: ['Causar danos a um sistema', 'Roubar dados', 'Identificar e explorar vulnerabilidades para melhorar a segurança', 'Instalar malware'], 
            correctAnswer: 2
        },
        { 
            id: 'q2', 
            question: 'Um ataque que tenta sobrecarregar um servidor com tráfego para torná-lo indisponível é chamado de:', 
            options: ['Phishing', 'Man-in-the-Middle', 'Ataque de Negação de Serviço (DoS/DDoS)', 'SQL Injection'], 
            correctAnswer: 2
        }
    ]
};

import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-net-final',
    title: 'Quiz: Redes e Comunicações',
    questions: [
        { 
            id: 'q1', 
            question: 'Qual protocolo é responsável por traduzir nomes de domínio como "google.com" em endereços IP?', 
            options: ['HTTP', 'TCP', 'IP', 'DNS'], 
            correctAnswer: 3
        },
        { 
            id: 'q2', 
            question: 'Na pilha TCP/IP, qual protocolo garante a entrega confiável e ordenada de pacotes?', 
            options: ['IP', 'UDP', 'TCP', 'HTTP'], 
            correctAnswer: 2
        }
    ]
};

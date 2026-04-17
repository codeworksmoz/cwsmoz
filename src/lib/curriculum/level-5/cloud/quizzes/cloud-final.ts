import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-cloud-final',
    title: 'Quiz: Cloud Computing',
    questions: [
        { 
            id: 'q1', 
            question: 'Qual tecnologia permite empacotar uma aplicação e suas dependências em uma unidade isolada?', 
            options: ['Kubernetes', 'Docker (Contêineres)', 'IaaS', 'SaaS'], 
            correctAnswer: 1
        },
        { 
            id: 'q2', 
            question: 'Kubernetes é uma ferramenta para...', 
            options: ['Escrever código', 'Orquestração de contêineres', 'Virtualização de hardware', 'Gerenciamento de banco de dados'], 
            correctAnswer: 1
        }
    ]
};

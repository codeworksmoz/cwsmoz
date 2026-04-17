import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-career-final',
    title: 'Quiz: Habilidades de Carreira',
    questions: [
        {
            id: 'q1',
            question: 'Ao descrever uma experiência em seu currículo, qual é a abordagem mais eficaz?',
            options: ['Listar todas as suas responsabilidades diárias', 'Focar nas tecnologias que você usou', 'Descrever suas conquistas com métricas quantificáveis', 'Escrever um parágrafo longo sobre o projeto'],
            correctAnswer: 2
        },
        {
            id: 'q2',
            question: 'Qual é o principal objetivo de um bom projeto de portfólio?',
            options: ['Mostrar que você pode seguir um tutorial', 'Demonstrar sua capacidade de resolver um problema real e construir uma aplicação completa', 'Usar o maior número possível de tecnologias da moda', 'Ser visualmente perfeito, mesmo que a funcionalidade não esteja completa'],
            correctAnswer: 1
        },
        {
            id: 'q3',
            question: 'O que significa o "A" no método STAR para entrevistas comportamentais?',
            options: ['Atitude', 'Análise', 'Ação', 'Assertividade'],
            correctAnswer: 2
        }
    ]
};

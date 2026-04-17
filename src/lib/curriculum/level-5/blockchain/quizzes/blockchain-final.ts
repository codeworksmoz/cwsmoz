import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-block-final',
    title: 'Quiz: Blockchain & Web3',
    questions: [
        { 
            id: 'q1', 
            question: 'Qual característica de uma blockchain garante que os dados, uma vez registrados, não podem ser alterados?', 
            options: ['Descentralização', 'Transparência', 'Imutabilidade', 'Anonimato'], 
            correctAnswer: 2
        },
        { 
            id: 'q2', 
            question: 'O que é um "Smart Contract"?', 
            options: ['Um documento legal digital', 'Um programa que executa automaticamente os termos de um acordo na blockchain', 'Uma carteira de criptomoedas', 'Um tipo de algoritmo de mineração'], 
            correctAnswer: 1
        }
    ]
};

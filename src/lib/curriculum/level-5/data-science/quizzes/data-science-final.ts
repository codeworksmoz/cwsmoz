import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-data-final',
    title: 'Quiz: Data Science & Analytics',
    questions: [
        { 
            id: 'q1', 
            question: 'Qual etapa do processo de ciência de dados geralmente consome mais tempo?', 
            options: ['Modelagem', 'Coleta de Dados', 'Limpeza e Preparação de Dados', 'Comunicação dos Resultados'], 
            correctAnswer: 2
        },
        { 
            id: 'q2', 
            question: 'O que é "Big Data"?', 
            options: ['Um grande arquivo Excel', 'Conjuntos de dados que são tão grandes ou complexos que o software de processamento de dados tradicional é inadequado', 'Qualquer banco de dados com mais de 1 milhão de linhas', 'O processo de visualização de dados'], 
            correctAnswer: 1
        }
    ]
};

import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-ai-ml-final',
    title: 'Quiz: IA & Machine Learning',
    questions: [
        { 
            id: 'q1', 
            question: 'Um algoritmo que aprende a partir de dados rotulados (entrada e saída esperada) está usando qual tipo de aprendizado?', 
            options: ['Não Supervisionado', 'Por Reforço', 'Supervisionado', 'Semi-supervisionado'], 
            correctAnswer: 2
        },
        { 
            id: 'q2', 
            question: 'Qual das seguintes tarefas é um problema de Classificação?', 
            options: ['Prever o preço de uma ação amanhã', 'Agrupar documentos por tópico', 'Identificar se uma imagem contém um gato ou um cachorro', 'Recomendar um filme para um usuário'], 
            correctAnswer: 2
        }
    ]
};

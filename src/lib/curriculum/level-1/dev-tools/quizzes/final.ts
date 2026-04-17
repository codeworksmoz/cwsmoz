import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-devtools-final',
    title: 'Quiz: Ferramentas de Desenvolvimento',
    questions: [
        { 
            id: 'q1', 
            question: 'Qual é a principal vantagem de uma IDE em relação a um editor de texto simples?', 
            options: ['É mais leve e rápido', 'Integra um conjunto de ferramentas, como depurador e controle de versão', 'Só funciona para uma linguagem', 'Não permite extensões'], 
            correctAnswer: 1 
        },
        { 
            id: 'q2', 
            question: 'No contexto de um IDE, o que é um "breakpoint"?', 
            options: ['Um erro que quebra o código', 'Um ponto no código onde a execução é pausada para depuração', 'Um comentário para explicar o código', 'O final do programa'], 
            correctAnswer: 1 
        },
        { 
            id: 'q3', 
            question: 'Para que serve a funcionalidade de "extensões" ou "plugins" em editores como o VS Code?', 
            options: ['Apenas para mudar o tema de cores', 'Para adicionar suporte a novas linguagens, linters e outras ferramentas', 'Para aumentar o tamanho da fonte', 'Para compilar o código'], 
            correctAnswer: 1 
        }
    ]
};

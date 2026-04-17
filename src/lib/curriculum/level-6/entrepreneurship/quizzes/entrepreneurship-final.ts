import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-ent-final',
    title: 'Quiz: Empreendedorismo',
    questions: [
        {
            id: 'q1',
            question: 'Qual é o principal objetivo de um MVP (Minimum Viable Product)?',
            options: ['Lançar um produto completo com todas as features', 'Obter o máximo de lucro no menor tempo possível', 'Aprender o máximo sobre os clientes e validar a ideia com o mínimo de esforço', 'Ter um design perfeito e polido'],
            correctAnswer: 2
        },
        {
            id: 'q2',
            question: 'No Business Model Canvas, o bloco que descreve como uma empresa ganha dinheiro é chamado de:',
            options: ['Proposta de Valor', 'Segmentos de Clientes', 'Fontes de Receita', 'Canais'],
            correctAnswer: 2
        },
        {
            id: 'q3',
            question: 'O que significa alcançar o "Product-Market Fit"?',
            options: ['Ter o produto mais bonito do mercado', 'Estar em um bom mercado com um produto que satisfaz esse mercado', 'Ter muitos seguidores nas redes sociais', 'Ter recebido investimento anjo'],
            correctAnswer: 1
        }
    ]
};

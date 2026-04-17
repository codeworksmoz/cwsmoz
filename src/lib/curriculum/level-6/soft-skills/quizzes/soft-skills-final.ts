import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-soft-skills-final',
    title: 'Quiz: Soft Skills',
    questions: [
        {
            id: 'q1',
            question: 'Ao explicar um problema técnico para um gerente não-técnico, você deve:',
            options: ['Focar nos detalhes da implementação do código', 'Focar no impacto do problema para o usuário e para o negócio', 'Usar o máximo de jargão técnico possível para parecer inteligente', 'Dizer que o problema é muito complexo para explicar'],
            correctAnswer: 1
        },
        {
            id: 'q2',
            question: 'Qual é o componente "B" no modelo de feedback SBI?',
            options: ['Benefício (Benefit)', 'Comportamento (Behavior)', 'Base (Baseline)', 'Bug'],
            correctAnswer: 1
        },
        {
            id: 'q3',
            question: 'O que é "Escuta Ativa"?',
            options: ['Ficar em silêncio enquanto a outra pessoa fala', 'Ouvir apenas as palavras-chave para preparar sua resposta', 'Concentrar-se totalmente no que está sendo dito, entender, responder e lembrar', 'Concordar com tudo que a outra pessoa diz'],
            correctAnswer: 2
        }
    ]
};

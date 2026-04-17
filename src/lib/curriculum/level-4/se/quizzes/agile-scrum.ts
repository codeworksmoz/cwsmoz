import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-se-agile-scrum',
    title: 'Quiz: Agile e Scrum',
    questions: [
        {
            id: 'q1',
            question: 'Qual dos seguintes NÃO é um valor do Manifesto Ágil?',
            options: ['Indivíduos e interações mais que processos e ferramentas', 'Documentação abrangente mais que software em funcionamento', 'Colaboração com o cliente mais que negociação de contratos', 'Responder a mudanças mais que seguir um plano'],
            correctAnswer: 1
        },
        {
            id: 'q2',
            question: 'No Scrum, quem é o responsável por maximizar o valor do produto e gerenciar o Product Backlog?',
            options: ['Scrum Master', 'Time de Desenvolvimento', 'Product Owner', 'Stakeholder'],
            correctAnswer: 2
        },
        {
            id: 'q3',
            question: 'Qual evento do Scrum é uma reunião diária de 15 minutos para o Time de Desenvolvimento sincronizar o trabalho?',
            options: ['Sprint Planning', 'Sprint Review', 'Daily Scrum', 'Sprint Retrospective'],
            correctAnswer: 2
        },
        {
            id: 'q4',
            question: 'O que o conceito de "WIP Limit" no Kanban ajuda a previnir?',
            options: ['Gargalos no fluxo de trabalho', 'Falta de tarefas no backlog', 'Reuniões longas', 'Má qualidade do código'],
            correctAnswer: 0
        }
    ]
};

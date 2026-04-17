import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-qa-fundamentals',
    title: 'Quiz: Fundamentos de Testes',
    questions: [
        {
            id: 'q1',
            question: 'Na Pirâmide de Testes, qual tipo de teste deve ser o mais numeroso?',
            options: ['Testes End-to-End', 'Testes de Integração', 'Testes Unitários', 'Testes Manuais'],
            correctAnswer: 2
        },
        {
            id: 'q2',
            question: 'Qual é o principal objetivo de um Teste de Integração?',
            options: ['Testar uma função isoladamente', 'Verificar se diferentes módulos do sistema funcionam bem juntos', 'Simular a jornada completa do usuário', 'Verificar a usabilidade da interface'],
            correctAnswer: 1
        },
        {
            id: 'q3',
            question: 'O padrão "Arrange-Act-Assert" (AAA) é uma estrutura para organizar qual tipo de atividade?',
            options: ['Revisão de código', 'Planejamento de Sprint', 'Casos de teste', 'Reuniões de retrospectiva'],
            correctAnswer: 2
        }
    ]
};

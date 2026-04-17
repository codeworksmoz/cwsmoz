import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-sd-arch-patterns',
    title: 'Quiz: Padrões Arquiteturais',
    questions: [
        {
            id: 'q1',
            question: 'Qual padrão de arquitetura de UI populariza o uso de "data binding" para sincronizar a Visão e o Modelo?',
            options: ['MVC', 'MVP', 'MVVM', 'Nenhuma das anteriores'],
            correctAnswer: 2
        },
        {
            id: 'q2',
            question: 'Na Arquitetura Hexagonal (Portas e Adaptadores), qual é a direção da dependência?',
            options: ['A UI depende diretamente do Banco de Dados', 'O Domínio (interior) depende da Infraestrutura (exterior)', 'A Infraestrutura (exterior) depende do Domínio (interior)', 'As dependências são bidirecionais'],
            correctAnswer: 2
        },
        {
            id: 'q3',
            question: 'Qual é um dos principais benefícios da Arquitetura Orientada a Eventos (EDA)?',
            options: ['Forte acoplamento entre serviços', 'Comunicação síncrona e bloqueante', 'Desacoplamento e resiliência', 'Simplicidade na consistência de dados'],
            correctAnswer: 2
        }
    ]
};

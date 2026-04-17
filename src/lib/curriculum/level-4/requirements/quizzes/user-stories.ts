import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-req-user-stories',
    title: 'Quiz: Histórias de Usuário',
    questions: [
        {
            id: 'q1',
            question: 'Qual é o principal propósito de uma História de Usuário?',
            options: ['Ser uma especificação técnica detalhada', 'Ser um convite para uma conversa sobre um requisito', 'Ser um contrato formal com o cliente', 'Ser uma tarefa para um único desenvolvedor'],
            correctAnswer: 1
        },
        {
            id: 'q2',
            question: 'No acrônimo INVEST, o "V" significa que uma boa história de usuário deve ser:',
            options: ['Visual', 'Verificável', 'Valiosa', 'Vaga'],
            correctAnswer: 2
        },
        {
            id: 'q3',
            question: 'O que são Critérios de Aceitação?',
            options: ['Uma lista de bugs encontrados', 'As condições que a história deve satisfazer para ser considerada "Pronta"', 'As notas da reunião de planejamento', 'O nome técnico da funcionalidade'],
            correctAnswer: 1
        }
    ]
};

import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-req-final',
    title: 'Quiz Final: Engenharia de Requisitos',
    questions: [
        {
            id: 'q1',
            question: '"A página de login deve carregar em menos de 2 segundos." Este é um exemplo de qual tipo de requisito?',
            options: ['Funcional', 'Não-Funcional (Performance)', 'Caso de Uso', 'Regra de Negócio'],
            correctAnswer: 1
        },
        {
            id: 'q2',
            question: 'Qual técnica de priorização usa as categorias "Must Have", "Should Have", "Could Have" e "Won\'t Have"?',
            options: ['Modelo de Kano', 'Matriz Valor vs. Esforço', 'MoSCoW', 'Votação por Pontos'],
            correctAnswer: 2
        },
        {
            id: 'q3',
            question: 'Qual é o principal objetivo da validação de requisitos?',
            options: ['Verificar se o código está livre de bugs', 'Garantir que os requisitos definidos correspondem às reais necessidades dos stakeholders', 'Estimar o custo do projeto', 'Escrever os casos de teste'],
            correctAnswer: 1
        },
        {
            id: 'q4',
            question: 'A capacidade de seguir a vida de um requisito, da sua origem até a implementação e teste, é chamada de:',
            options: ['Elicitação', 'Validação', 'Rastreabilidade (Traceability)', 'Priorização'],
            correctAnswer: 2
        }
    ]
};

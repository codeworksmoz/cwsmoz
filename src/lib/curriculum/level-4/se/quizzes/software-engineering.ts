import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-se-software-engineering',
    title: 'Quiz: Engenharia de Software',
    questions: [
        {
            id: 'q1',
            question: 'Qual modelo de ciclo de vida de software é linear e sequencial, onde cada fase deve ser concluída antes do início da próxima?',
            options: ['Ágil', 'Espiral', 'Cascata (Waterfall)', 'Modelo V'],
            correctAnswer: 2
        },
        {
            id: 'q2',
            question: 'Story Points são uma medida de:',
            options: ['Tempo em horas', 'Valor para o negócio', 'Esforço relativo (complexidade, incerteza, trabalho)', 'Prioridade da tarefa'],
            correctAnswer: 2
        },
        {
            id: 'q3',
            question: 'O que significa a "Definition of Done" (DoD) no Scrum?',
            options: ['A lista de tarefas da Sprint', 'O dia em que a Sprint termina', 'Um entendimento compartilhado de quando um trabalho está completo e com qualidade', 'Uma métrica de velocidade'],
            correctAnswer: 2
        }
    ]
};

import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-ethics-final',
    title: 'Quiz: Ética e Profissionalismo',
    questions: [
        {
            id: 'q1',
            question: 'Leis como a LGPD e a GDPR focam principalmente em qual aspecto?',
            options: ['Propriedade Intelectual', 'Proteção de Dados Pessoais e Privacidade', 'Licenciamento de Software', 'Contratos de Trabalho'],
            correctAnswer: 1
        },
        {
            id: 'q2',
            question: 'O que significa dizer que um algoritmo de Machine Learning tem "viés" (bias)?',
            options: ['Que ele é muito rápido', 'Que ele produz resultados sistematicamente injustos ou imprecisos para certos grupos de pessoas', 'Que ele foi escrito em Python', 'Que ele é 100% preciso'],
            correctAnswer: 1
        },
        {
            id: 'q3',
            question: 'Qual tipo de licença de software exige que trabalhos derivados sejam distribuídos sob os mesmos termos?',
            options: ['Permissiva (MIT, Apache)', 'Copyleft (GPL)', 'Software Proprietário', 'Domínio Público'],
            correctAnswer: 1
        }
    ]
};

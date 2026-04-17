import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-qa-test-doubles',
    title: 'Quiz: Dublês de Teste',
    questions: [
        {
            id: 'q1',
            question: 'Quando você precisa apenas fornecer um valor pré-definido para uma dependência durante um teste (foco no estado), qual dublê é mais apropriado?',
            options: ['Mock', 'Stub', 'Spy', 'Fake'],
            correctAnswer: 1
        },
        {
            id: 'q2',
            question: 'Quando você quer verificar se um método de uma dependência foi chamado um certo número de vezes com argumentos específicos (foco no comportamento), qual dublê você usaria?',
            options: ['Mock', 'Stub', 'Fake', 'Dummy'],
            correctAnswer: 0
        },
        {
            id: 'q3',
            question: 'Qual dublê de teste envolve o objeto real para registrar suas interações, mas ainda permite que a implementação original seja executada?',
            options: ['Stub', 'Mock', 'Spy', 'Fake'],
            correctAnswer: 2
        }
    ]
};

import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-qa-tdd-bdd',
    title: 'Quiz: TDD e BDD',
    questions: [
        {
            id: 'q1',
            question: 'Qual é o primeiro passo no ciclo TDD?',
            options: ['Refatorar o código', 'Escrever o código de produção', 'Escrever um teste que falha', 'Escrever um teste que passa'],
            correctAnswer: 2
        },
        {
            id: 'q2',
            question: 'Qual é a principal diferença entre TDD e BDD?',
            options: ['BDD não usa testes automatizados', 'TDD foca na implementação de unidades, enquanto BDD foca no comportamento do sistema a partir da perspectiva do usuário', 'BDD é apenas para testes de UI', 'TDD é uma prática de QA, enquanto BDD é uma prática de desenvolvimento'],
            correctAnswer: 1
        },
        {
            id: 'q3',
            question: 'A sintaxe "Given-When-Then" é mais associada a qual prática?',
            options: ['Testes Unitários', 'Testes de Integração', 'TDD (Test-Driven Development)', 'BDD (Behavior-Driven Development)'],
            correctAnswer: 3
        }
    ]
};

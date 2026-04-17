import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-pla-1',
    title: 'Quiz: Paradigmas e Conceitos Avançados',
    questions: [
        {
            id: 'q1',
            question: 'Qual conceito da programação funcional garante que uma função sempre retornará a mesma saída para a mesma entrada e não terá efeitos colaterais observáveis?',
            options: ['Função de Alta Ordem', 'Imutabilidade', 'Função Pura', 'Currying'],
            correctAnswer: 2
        },
        {
            id: 'q2',
            question: 'Em POO, qual princípio é violado se uma classe de "Quadrado" herda de "Retângulo" e muda a lógica de setAltura para também alterar a largura?',
            options: ['Princípio da Responsabilidade Única', 'Princípio da Substituição de Liskov', 'Princípio Aberto/Fechado', 'Princípio da Inversão de Dependência'],
            correctAnswer: 1
        },
        {
            id: 'q3',
            question: 'A sintaxe `async/await` em JavaScript é, na verdade, "açúcar sintático" sobre qual conceito subjacente?',
            options: ['Callbacks', 'Event Loop', 'Threads', 'Promises'],
            correctAnswer: 3
        }
    ]
};

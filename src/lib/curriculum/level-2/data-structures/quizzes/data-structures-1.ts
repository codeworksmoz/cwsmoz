import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-ds-1',
    title: 'Quiz de Estruturas de Dados: Fundamentos',
    questions: [
        {
            id: 'q1',
            question: 'Qual estrutura de dados segue o princípio LIFO (Last-In, First-Out)?',
            options: ['Fila (Queue)', 'Lista Ligada', 'Pilha (Stack)', 'Árvore'],
            correctAnswer: 2
        },
        {
            id: 'q2',
            question: 'Qual é a complexidade de tempo para acessar um elemento em um array pelo seu índice?',
            options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
            correctAnswer: 0
        },
        {
            id: 'q3',
            question: 'Para que serve uma função de hash em uma Tabela Hash?',
            options: ['Para ordenar os elementos', 'Para calcular um índice onde o elemento deve ser armazenado', 'Para conectar os nós', 'Para garantir que não haja elementos duplicados'],
            correctAnswer: 1
        },
        {
            id: 'q4',
            question: 'Em uma Árvore Binária de Busca (BST), onde os valores menores que o nó atual são armazenados?',
            options: ['Na sub-árvore direita', 'Na sub-árvore esquerda', 'Em qualquer lugar', 'Apenas em nós folha'],
            correctAnswer: 1
        }
    ]
};

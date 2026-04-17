import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-alg-1',
    title: 'Quiz de Algoritmos: Fundamentos',
    questions: [
        {
            id: 'q1',
            question: 'Qual é a complexidade de tempo do pior caso do algoritmo Bubble Sort?',
            options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
            correctAnswer: 2
        },
        {
            id: 'q2',
            question: 'A Busca Binária (Binary Search) pode ser aplicada em qual tipo de estrutura de dados?',
            options: ['Qualquer array', 'Um array ordenado', 'Uma lista ligada', 'Uma pilha'],
            correctAnswer: 1
        },
        {
            id: 'q3',
            question: 'Qual é o componente essencial de uma função recursiva que previne um loop infinito?',
            options: ['O caso recursivo', 'Um loop for', 'O caso base', 'Uma variável global'],
            correctAnswer: 2
        },
        {
            id: 'q4',
            question: 'Qual paradigma de algoritmo o Merge Sort e o Quick Sort exemplificam?',
            options: ['Algoritmo Guloso (Greedy)', 'Programação Dinâmica', 'Divisão e Conquista', 'Backtracking'],
            correctAnswer: 2
        }
    ]
};

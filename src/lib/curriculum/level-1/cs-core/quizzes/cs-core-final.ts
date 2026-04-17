import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-cs-core-final',
    title: 'Quiz Final: Computer Science Core',
    questions: [
        {
        id: 'q1',
        question: 'Qual é a base do sistema de numeração binário?',
        options: ['10', '2', '8', '16'],
        correctAnswer: 1
        },
        {
        id: 'q2',
        question: 'Qual operador lógico retorna verdadeiro apenas se ambas as entradas forem verdadeiras?',
        options: ['OR', 'NOT', 'AND', 'XOR'],
        correctAnswer: 2
        },
        {
        id: 'q3',
        question: 'O sistema de numeração hexadecimal (base 16) usa quais símbolos além dos números 0-9?',
        options: ['A-F', 'G-L', 'X-Z', 'Nenhum, apenas números'],
        correctAnswer: 0
        },
        {
        id: 'q4',
        question: 'Na arquitetura de Von Neumann, qual componente é responsável por executar as instruções aritméticas e lógicas?',
        options: ['Memória Principal (RAM)', 'Unidade de Controle (CU)', 'Unidade Lógica e Aritmética (ULA/ALU)', 'Dispositivos de Entrada/Saída'],
        correctAnswer: 2
        },
        {
        id: 'q5',
        question: 'Como se chama a menor unidade de informação em um computador?',
        options: ['Byte', 'Bit', 'Nybble', 'Word'],
        correctAnswer: 1
        }
    ]
};

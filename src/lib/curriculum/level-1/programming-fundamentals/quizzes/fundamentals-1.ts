import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-pf-1',
    title: 'Quiz de Fundamentos 1',
    questions: [
      {
        id: 'q1',
        question: 'Qual tipo de dado é usado para armazenar texto?',
        options: ['Integer', 'Boolean', 'String', 'Float'],
        correctAnswer: 2
      },
      {
        id: 'q2',
        question: 'Qual símbolo é mais comumente usado para atribuir um valor a uma variável?',
        options: ['=', '==', ':=', '->'],
        correctAnswer: 0
      },
      {
        id: 'q3',
        question: 'Um valor booleano (Boolean) pode representar quais estados?',
        options: ['Apenas 0', '0 ou 1', 'Verdadeiro ou Falso', 'Qualquer número'],
        correctAnswer: 2
      }
    ]
};

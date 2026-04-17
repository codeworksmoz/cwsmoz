import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-web-core-final',
    title: 'Quiz Final: Web Core',
    questions: [
      {
        id: 'q1',
        question: 'Qual tag HTML é usada para definir o conteúdo principal e único de uma página?',
        options: ['<main>', '<body>', '<content>', '<article>'],
        correctAnswer: 0
      },
      {
        id: 'q2',
        question: 'Qual propriedade CSS controla o espaçamento transparente FORA da borda de um elemento?',
        options: ['padding', 'margin', 'border', 'spacing'],
        correctAnswer: 1
      },
      {
        id: 'q3',
        question: 'Para criar um layout flexível em uma única dimensão (linha ou coluna), qual valor de `display` você usaria?',
        options: ['display: block;', 'display: inline;', 'display: grid;', 'display: flex;'],
        correctAnswer: 3
      },
      {
        id: 'q4',
        question: 'Qual tag é semanticamente correta para um grupo de links de navegação?',
        options: ['<div>', '<ul>', '<nav>', '<section>'],
        correctAnswer: 2
      }
    ]
};

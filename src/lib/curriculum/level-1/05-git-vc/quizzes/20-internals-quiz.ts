import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "git-q20",
  title: "Quiz: Git Internals",
  passingScore: 70,
  questions: [
    {
      id: "q20_1",
      question: "Qual objeto do Git guarda o conteúdo real de um ficheiro?",
      options: ["Tree", "Commit", "Blob", "Inode"],
      correctAnswer: 2
    },
    {
      id: "q20_2",
      question: "O que acontece ao hash SHA-1 de um commit se alterares apenas um espaço no código?",
      options: [
        "O hash mantém-se igual",
        "O hash muda completamente",
        "O hash fica mais curto",
        "O Git avisa que o código é o mesmo"
      ],
      correctAnswer: 1
    }
  ]
};
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "dt-q12",
  title: "Quiz: Bash Scripting",
  passingScore: 70,
  questions: [
    {
      id: "q12_1",
      question: "O que é o 'Shebang' (#!/bin/bash)?",
      options: ["Um comentário comum", "A indicação de qual interpretador deve rodar o script", "Um erro de sintaxe", "O nome do autor"],
      correctAnswer: 1
    },
    {
      id: "q12_2",
      question: "Como se dá permissão de execução a um ficheiro .sh?",
      options: ["chmod +x script.sh", "run script.sh", "edit script.sh", "bash active"],
      correctAnswer: 0
    }
  ]
};
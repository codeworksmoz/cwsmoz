import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "cs-t8-quiz",
  title: "Quiz: Paradigmas de Programação",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual paradigma foca em descrever 'O QUE' deve ser feito em vez de dar ordens passo-a-passo?",
      options: ["Imperativo", "Declarativo", "Procedural", "Linguagem de Máquina"],
      correctAnswer: 1,
      explanation: "O declarativo foca na lógica do resultado, não na mecânica da execução."
    },
    {
      id: "q2",
      question: "Em qual paradigma os 'Objetos' são a unidade central de organização?",
      options: ["Funcional", "Lógico", "Orientado a Objetos (POO)", "Baixo Nível"],
      correctAnswer: 2,
      explanation: "POO agrupa dados e comportamentos em classes e objetos."
    }
  ]
};
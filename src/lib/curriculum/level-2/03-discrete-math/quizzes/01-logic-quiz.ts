import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "math-q1",
  title: "Quiz: Lógica Proposicional de Elite",
  passingScore: 70,
  questions: [
    {
      id: "q1_1",
      question: "Qual o valor de verdade de (V ∨ F) ∧ ¬F?",
      options: ["Verdadeiro", "Falso", "Indeterminado", "Erro de sintaxe"],
      correctAnswer: 0
    },
    {
      id: "q1_2",
      question: "No contexto da implicação P → Q, quando é que a afirmação é FALSA?",
      options: [
        "P é Falso e Q é Verdadeiro",
        "P é Verdadeiro e Q é Falso",
        "Ambos são Falsos",
        "Ambos são Verdadeiros"
      ],
      correctAnswer: 1
    },
    {
      id: "q1_3",
      question: "O que é uma Tautologia?",
      options: [
        "Uma frase sempre falsa",
        "Uma frase que é sempre verdadeira, independentemente dos valores dos componentes",
        "Um erro de lógica recursiva",
        "Uma frase que depende do contexto"
      ],
      correctAnswer: 1
    },
    {
      id: "q1_4",
      question: "A negação de (P ∧ Q) segundo as Leis de De Morgan é:",
      options: ["¬P ∧ ¬Q", "¬P ∨ ¬Q", "P ∨ Q", "¬(P ∨ Q)"],
      correctAnswer: 1
    },
    {
      id: "q1_5",
      question: "O que significa o conector Bicondicional (↔)?",
      options: [
        "Verdadeiro se apenas um for verdade",
        "Verdadeiro se e só se ambos tiverem o mesmo valor de verdade",
        "Sempre falso",
        "O inverso da implicação"
      ],
      correctAnswer: 1
    },
    {
      id: "q1_6",
      question: "Qual a contrapositiva de P → Q?",
      options: ["Q → P", "¬Q → ¬P", "¬P → ¬Q", "P ∧ ¬Q"],
      correctAnswer: 1
    }
  ]
};
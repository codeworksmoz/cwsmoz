import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "cs-t3-quiz",
  title: "Quiz: Domínio da Álgebra Booleana",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Segundo a Lei da Identidade, qual o resultado de 'A AND 1'?",
      options: ["0", "1", "A", "NOT A"],
      correctAnswer: 2,
      explanation: "O 1 é o elemento neutro do AND. Se A for 1, o resultado é 1. Se A for 0, o resultado é 0. Logo, o resultado é sempre o valor da variável A."
    },
    {
      id: "q2",
      question: "Qual o resultado da expressão 'A OR 1'?",
      options: ["A", "0", "1", "Depende de A"],
      correctAnswer: 2,
      explanation: "No operador OR (OU), se pelo menos um dos valores for verdadeiro (1), o resultado final é sempre verdadeiro (1), independentemente do outro valor."
    },
    {
      id: "q3",
      question: "Se simplificarmos 'A AND (NOT A)', o que obtemos?",
      options: ["A", "1", "0", "Nenhuma das anteriores"],
      correctAnswer: 2,
      explanation: "Isto é a Lei da Contradição. Algo não pode ser verdadeiro e falso ao mesmo tempo, por isso o resultado de um AND entre um valor e a sua negação é sempre 0."
    },
    {
      id: "q4",
      question: "Aplicando a Lei de De Morgan, a expressão 'NOT (A AND B)' é equivalente a:",
      options: [
        "(NOT A) AND (NOT B)",
        "(NOT A) OR (NOT B)",
        "A OR B",
        "NOT A"
      ],
      correctAnswer: 1,
      explanation: "Segundo De Morgan, ao negar uma conjunção (AND), invertemos o operador para disjunção (OR) e negamos cada variável individualmente."
    },
    {
      id: "q5",
      question: "Qual o resultado de 'A OR 0'?",
      options: ["0", "1", "A", "NOT A"],
      correctAnswer: 2,
      explanation: "O 0 é o elemento neutro do OR. O resultado será exatamente o valor que estiver na variável A."
    },
    {
      id: "q6",
      question: "Simplifique a expressão: (A AND 1) OR (B AND 0).",
      options: ["A", "B", "1", "A OR B"],
      correctAnswer: 0,
      explanation: "Passo 1: (A AND 1) simplifica para A. Passo 2: (B AND 0) simplifica para 0. Passo 3: A OR 0 simplifica para A."
    }
  ]
};

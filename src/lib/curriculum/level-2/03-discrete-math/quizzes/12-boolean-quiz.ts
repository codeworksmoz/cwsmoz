import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "math-q12",
  title: "Quiz: Álgebra Booleana e Lattices",
  passingScore: 70,
  questions: [
    {
      id: "q12_1",
      question: "Qual lei booleana diz que A + (B * C) = (A + B) * (A + C)?",
      options: ["Associativa", "Distributiva", "Idempotente", "De Morgan"],
      correctAnswer: 1
    },
    {
      id: "q12_2",
      question: "A negação de (A ∨ ¬B) é:",
      options: ["¬A ∧ B", "¬A ∨ B", "A ∧ ¬B", "¬A ∧ ¬B"],
      correctAnswer: 0,
      explanation: "De Morgan: negamos cada termo e invertemos o sinal OU para E. ¬A ∧ ¬(¬B) = ¬A ∧ B."
    },
    {
      id: "q12_3",
      question: "O que é uma 'Lattice' na matemática discreta?",
      options: [
        "Um tipo de computador",
        "Um conjunto parcialmente ordenado onde cada par de elementos tem um supremo e um ínfimo",
        "Uma rede de pesca",
        "Um erro de compilação"
      ],
      correctAnswer: 1
    },
    {
      id: "q12_4",
      question: "Em design de hardware, a forma SOP (Soma de Produtos) utiliza quais portas?",
      options: ["Apenas NOT", "AND seguidos de um OR final", "OR seguidos de um AND final", "Apenas XOR"],
      correctAnswer: 1
    },
    {
      id: "q12_5",
      question: "Qual o valor de A ⊕ A (XOR)?",
      options: ["A", "1", "0", "¬A"],
      correctAnswer: 2,
      explanation: "XOR é verdadeiro apenas se os valores forem diferentes. Como são iguais, o resultado é sempre 0."
    },
    {
      id: "q12_6",
      question: "A dualidade no CSS e Logica diz que se trocarmos 0 por 1 e AND por OR:",
      options: ["O resultado é o mesmo", "Obtemos uma nova identidade válida", "O sistema crasha", "A lógica torna-se inválida"],
      correctAnswer: 1
    }
  ]
};

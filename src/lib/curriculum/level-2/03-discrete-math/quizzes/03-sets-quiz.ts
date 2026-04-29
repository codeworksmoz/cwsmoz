import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "math-q3",
  title: "Quiz: Teoria de Conjuntos e Paradoxos",
  passingScore: 70,
  questions: [
    {
      id: "q3_1",
      question: "Se um conjunto S tem 5 elementos, quantos subconjuntos possui o seu Power Set?",
      options: ["5", "10", "25", "32"],
      correctAnswer: 3,
      explanation: "2 elevado a 5 = 32. O conjunto vazio e o próprio conjunto estão incluídos."
    },
    {
      id: "q3_2",
      question: "O que diz o Paradoxo de Russell sobre a teoria ingénua de conjuntos?",
      options: [
        "Que conjuntos infinitos não existem",
        "Que um conjunto não pode ser membro de si próprio sem causar contradição lógica",
        "Que todos os conjuntos são iguais",
        "Que o número zero é um conjunto vazio"
      ],
      correctAnswer: 1
    },
    {
      id: "q3_3",
      question: "Qual o resultado de A ∩ (B ∪ C) usando a Lei Distributiva?",
      options: [
        "(A ∩ B) ∪ (A ∩ C)",
        "(A ∪ B) ∩ (A ∪ C)",
        "A ∪ B ∪ C",
        "A ∩ B ∩ C"
      ],
      correctAnswer: 0
    },
    {
      id: "q3_4",
      question: "O conjunto {∅} é vazio?",
      options: [
        "Sim, porque contém o símbolo de vazio",
        "Não, contém um elemento (que por acaso é o conjunto vazio)",
        "Depende do domínio",
        "É um conjunto infinito"
      ],
      correctAnswer: 1
    },
    {
      id: "q3_5",
      question: "Se A = {1, 2} e B = {a, b}, qual o tamanho de A × B?",
      options: ["2", "4", "8", "0"],
      correctAnswer: 1,
      explanation: "O tamanho do produto cartesiano é o produto dos tamanhos: 2 * 2 = 4."
    },
    {
      id: "q3_6",
      question: "O que é o 'Complemento Absoluto' de A?",
      options: [
        "O conjunto A invertido",
        "Todos os elementos do Universo que NÃO estão em A",
        "O conjunto vazio",
        "A união de A com o Universo"
      ],
      correctAnswer: 1
    }
  ]
};

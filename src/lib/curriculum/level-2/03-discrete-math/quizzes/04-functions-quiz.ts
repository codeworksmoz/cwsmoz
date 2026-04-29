import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "math-q4",
  title: "Quiz: Funções e Relações Profissionais",
  passingScore: 70,
  questions: [
    {
      id: "q4_1",
      question: "Uma função onde cada elemento do contradomínio é imagem de no máximo um elemento do domínio é:",
      options: ["Sobrejetora", "Injetora", "Bijetora", "Constante"],
      correctAnswer: 1
    },
    {
      id: "q4_2",
      question: "Qual propriedade de uma relação diz que se aRb e bRc, então aRc?",
      options: ["Reflexiva", "Simétrica", "Transitiva", "Antissimétrica"],
      correctAnswer: 2
    },
    {
      id: "q4_3",
      question: "Uma relação de equivalência deve ser obrigatoriamente:",
      options: [
        "Injetora e Sobrejetora",
        "Reflexiva, Simétrica e Transitiva",
        "Sempre finita",
        "Apenas funcional"
      ],
      correctAnswer: 1
    },
    {
      id: "q4_4",
      question: "O que é a 'Composição de Funções' (f ∘ g)?",
      options: [
        "A soma de duas funções",
        "Aplicar a função f ao resultado da função g",
        "Eliminar os parâmetros de g",
        "Multiplicar os domínios"
      ],
      correctAnswer: 1
    },
    {
      id: "q4_5",
      question: "Numa base de dados, a relação entre Aluno e Disciplina (N para M) exige:",
      options: [
        "Uma Foreign Key simples",
        "Uma tabela associativa (Join Table)",
        "Uma função injetora",
        "Um Power Set"
      ],
      correctAnswer: 1
    },
    {
      id: "q4_6",
      question: "Qual o contradomínio de uma função que retorna o valor absoluto de um inteiro?",
      options: ["Inteiros", "Inteiros Não-Negativos (N)", "Números Reais", "Apenas 0 e 1"],
      correctAnswer: 1
    }
  ]
};

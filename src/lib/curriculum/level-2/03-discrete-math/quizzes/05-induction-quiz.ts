import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "math-q5",
  title: "Quiz: Indução e Recursão Matemática",
  passingScore: 70,
  questions: [
    {
      id: "q5_1",
      question: "O que deve ser provado no Passo Base de uma indução?",
      options: [
        "Que a fórmula vale para o infinito",
        "Que a fórmula vale para o menor valor possível (geralmente n=1 ou 0)",
        "Que a fórmula é mentira",
        "Que a fórmula é um algoritmo"
      ],
      correctAnswer: 1
    },
    {
      id: "q5_2",
      question: "Na hipótese de indução, assumimos que P(k) é verdade. O que devemos provar a seguir?",
      options: ["P(k-1)", "P(k+1)", "P(2k)", "P(0)"],
      correctAnswer: 1
    },
    {
      id: "q5_3",
      question: "Qual a diferença da Indução Forte para a Simples?",
      options: [
        "A forte é mais rápida",
        "A forte assume que P(n) é verdade para todos os valores de base até k",
        "A forte não precisa de passo base",
        "A forte é usada apenas em C++"
      ],
      correctAnswer: 1
    },
    {
      id: "q5_4",
      question: "A indução matemática prova que:",
      options: [
        "Um código corre em 10ms",
        "Uma propriedade é válida para todos os elementos de um conjunto infinito contável",
        "O computador tem memória suficiente",
        "O utilizador vai clicar no botão"
      ],
      correctAnswer: 1
    },
    {
      id: "q5_5",
      question: "O que acontece se o Passo Base falhar?",
      options: [
        "A prova continua normalmente",
        "Toda a prova por indução cai por terra (não é válida)",
        "O resultado é aproximado",
        "Usa-se a indução forte"
      ],
      correctAnswer: 1
    },
    {
      id: "q5_6",
      question: "O Princípio da Boa Ordenação diz que:",
      options: [
        "Código limpo é melhor",
        "Todo o subconjunto não vazio de inteiros não negativos tem um elemento mínimo",
        "Algoritmos devem ser rápidos",
        "A memória RAM deve estar organizada"
      ],
      correctAnswer: 1
    }
  ]
};

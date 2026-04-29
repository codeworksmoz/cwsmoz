import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "math-q14",
  title: "Quiz: Linguagens Formais e Gramáticas",
  passingScore: 70,
  questions: [
    {
      id: "q14_1",
      question: "As linguagens de programação modernas (Java, C) pertencem tipicamente a qual categoria de Chomsky?",
      options: ["Regulares", "Livres de Contexto (Context-Free)", "Sensíveis ao Contexto", "Irrestritas"],
      correctAnswer: 1
    },
    {
      id: "q14_2",
      question: "Qual máquina é necessária para processar uma linguagem Livre de Contexto?",
      options: ["Autómato Finito", "Autómato de Pilha (Pushdown Automaton)", "Máquina de Turing", "Calculadora simples"],
      correctAnswer: 1
    },
    {
      id: "q14_3",
      question: "O que é uma 'Gramática Ambígua'?",
      options: [
        "Uma gramática com erros de sintaxe",
        "Uma gramática que pode gerar duas árvores de derivação diferentes para a mesma string",
        "Uma gramática que não tem fim",
        "Uma gramática sem regras"
      ],
      correctAnswer: 1
    },
    {
      id: "q14_4",
      question: "RegEx consegue validar se uma string tem parênteses balanceados aninhados infinitamente?",
      options: ["Sim", "Não, pois RegEx é Tipo 3 e parênteses exigem memória (Tipo 2)", "Apenas em Python", "Sim, usando o operador *"],
      correctAnswer: 1
    },
    {
      id: "q14_5",
      question: "Em BNF (Backus-Naur Form), o símbolo '::=' significa:",
      options: ["Igual a", "É definido como", "Diferente de", "Comentário"],
      correctAnswer: 1
    },
    {
      id: "q14_6",
      question: "O que define uma Linguagem Regular?",
      options: [
        "Pode ser reconhecida por um DFA",
        "Tem palavras de tamanho fixo",
        "Usa apenas letras minúsculas",
        "É escrita por humanos"
      ],
      correctAnswer: 0
    }
  ]
};

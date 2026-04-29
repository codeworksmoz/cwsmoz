import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t18-quiz",
  title: "Quiz: Programação Funcional e Transformação",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual o efeito de uma função 'Map' sobre um array original?",
      options: [
        "Ela altera os valores do array original",
        "Ela apaga o array original",
        "Ela retorna um novo array com os valores transformados, sem mudar o original",
        "Ela ordena o array de forma crescente"
      ],
      correctAnswer: 2,
      explanation: "A imutabilidade é fundamental: o Map gera uma nova coleção baseada na original."
    },
    {
      id: "q2",
      question: "Quando deves utilizar a função 'Filter'?",
      options: [
        "Quando queres somar todos os números",
        "Quando precisas de selecionar apenas os itens que cumprem um critério específico",
        "Quando queres mudar o tipo de dado de String para Number",
        "Para imprimir a lista no terminal"
      ],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Qual o objetivo final da função 'Reduce'?",
      options: [
        "Tornar o código mais pequeno (reduzir linhas)",
        "Acumular todos os itens de uma lista num único valor final",
        "Eliminar os itens nulos da lista",
        "Dividir uma lista em duas partes"
      ],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "O que caracteriza uma 'Função Pura'?",
      options: [
        "Uma função que não usa variáveis",
        "Uma função que, para a mesma entrada, gera sempre a mesma saída e não tem efeitos colaterais",
        "Uma função escrita sem o uso de bibliotecas",
        "Uma função que só aceita números inteiros"
      ],
      correctAnswer: 1,
      explanation: "Funções puras são a base da previsibilidade em engenharia de software."
    },
    {
      id: "q5",
      question: "Em Python, como costumamos aplicar uma função a toda uma lista?",
      options: [
        "Usando o método .forEach()",
        "Usando as funções map() ou List Comprehensions",
        "Usando apenas loops while",
        "Python não suporta programação funcional"
      ],
      correctAnswer: 1,
      explanation: "List Comprehensions são a forma mais 'Pythonic' e performática de realizar Map e Filter."
    },
    {
      id: "q6",
      question: "Qual a vantagem do 'Encadeamento' (Chaining) de funções funcionais?",
      options: [
        "O código corre mais devagar, dando tempo ao servidor",
        "Permite criar pipelines de processamento complexos de forma clara e legível",
        "Impede que outros programadores entendam o código",
        "Ocupa mais memória RAM"
      ],
      correctAnswer: 1
    }
  ]
};
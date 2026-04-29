import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "kt-mq1",
  title: "Quiz: Null Safety e Sistema de Tipos",
  passingScore: 80,
  questions: [
    {
      id: "q1_1",
      question: "Como declaramos uma variável que pode aceitar valores nulos no Kotlin?",
      options: ["String!", "String?", "Maybe<String>", "Null<String>"],
      correctAnswer: 1
    },
    {
      id: "q1_2",
      question: "Qual o operador de 'Safe Call' que evita o NullPointerException?",
      options: ["!!", "?.", "?:", "as?"],
      correctAnswer: 1
    },
    {
      id: "q1_3",
      question: "O que o operador Elvis (?:) faz tecnicamente?",
      options: [
        "Provoca um erro se o valor for nulo",
        "Retorna o valor à esquerda se não for nulo, caso contrário retorna o valor à direita",
        "Cria uma cópia do objeto",
        "Navega por propriedades encadeadas"
      ],
      correctAnswer: 1
    },
    {
      id: "q1_4",
      question: "O que significa o operador !! (Not-Null Assertion)?",
      options: [
        "Garante que o valor é nulo",
        "Força o compilador a tratar o valor como não-nulo, podendo lançar um NPE se for nulo",
        "Formata o texto para negrito",
        "É um operador de comparação lógica"
      ],
      correctAnswer: 1
    },
    {
      id: "q1_5",
      question: "O que é um 'Smart Cast' no Kotlin?",
      options: [
        "Mudar o tipo da variável manualmente",
        "A habilidade do compilador de converter automaticamente um tipo após uma verificação is ou null",
        "Uma técnica de rede para TVs",
        "Um plugin do VS Code"
      ],
      correctAnswer: 1
    },
    {
      id: "q1_6",
      question: "O que acontece ao tentar atribuir null a uma variável declarada como 'String'?",
      options: [
        "O programa corre e crasha depois",
        "O compilador lança um erro imediato (Compile-time error)",
        "O valor é ignorado",
        "A variável torna-se uma string vazia"
      ],
      correctAnswer: 1
    }
  ]
};
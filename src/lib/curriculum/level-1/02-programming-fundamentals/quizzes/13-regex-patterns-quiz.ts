import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t13-quiz",
  title: "Quiz: Domínio de Expressões Regulares",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "O que representa o caractere '^' no início de uma RegEx?",
      options: [
        "Que a letra deve ser maiúscula",
        "Que o padrão deve coincidir com o início da string",
        "Que o padrão deve ser ignorado",
        "Que a string deve conter um chapéu"
      ],
      correctAnswer: 1,
      explanation: "O símbolo ^ é uma âncora de início de linha."
    },
    {
      id: "q2",
      question: "Qual atalho de RegEx representa 'qualquer dígito numérico'?",
      options: ["\\w", "\\s", "\\d", "\\n"],
      correctAnswer: 2,
      explanation: "\\d vem de 'digit'."
    },
    {
      id: "q3",
      question: "O que significa o quantificador '+' (ex: \\d+)?",
      options: [
        "O número deve ser positivo",
        "O elemento anterior deve aparecer 0 ou mais vezes",
        "O elemento anterior deve aparecer 1 ou mais vezes",
        "Soma o valor ao próximo número"
      ],
      correctAnswer: 2,
      explanation: "O + exige pelo menos uma ocorrência do padrão anterior."
    },
    {
      id: "q4",
      question: "Como se define um intervalo de letras de 'a' a 'z' minúsculas?",
      options: ["(a-z)", "[a-z]", "{a-z}", "/a-z/"],
      correctAnswer: 1,
      explanation: "Parênteses retos [] definem uma classe ou conjunto de caracteres."
    },
    {
      id: "q5",
      question: "Qual o símbolo usado para o fim de uma string?",
      options: ["$", "!", "#", "@"],
      correctAnswer: 0,
      explanation: "O $ ancora o padrão ao final do texto."
    },
    {
      id: "q6",
      question: "Se quiseres que um caractere apareça exatamente 5 vezes, qual a sintaxe?",
      options: ["*5", "+5", "{5}", "(5)"],
      correctAnswer: 2,
      explanation: "Chavetas {} definem uma quantidade exata ou um intervalo de repetições."
    }
  ]
};
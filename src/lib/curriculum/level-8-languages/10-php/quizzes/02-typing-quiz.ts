import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq2",
  title: "Quiz Master: Tipagem Forte e Union Types",
  passingScore: 85,
  questions: [
    {
      id: "q2_1",
      question: "O que acontece se tentares passar uma string numérica '10' para uma função que espera 'int' num ficheiro com strict_types=1?",
      options: [
        "O PHP converte para 10 automaticamente.",
        "Ocorre um TypeError fatal.",
        "O PHP ignora a tipagem e executa normalmente.",
        "A string é aceitável se for apenas números."
      ],
      correctAnswer: 1,
      explanation: "Com strict_types=1, o PHP exige que o tipo do argumento coincida exatamente com a declaração, sem conversões implícitas."
    },
    {
      id: "q2_2",
      question: "Qual o comportamento do tipo de retorno 'never'?",
      options: [
        "Retorna null por padrão.",
        "Garante que a função nunca retorna um valor, ou lança exceção ou encerra o script.",
        "Retorna um objeto vazio.",
        "É o mesmo que o tipo void."
      ],
      correctAnswer: 1,
      explanation: "never é um tipo de 'bottom type' que indica que o fluxo de execução termina naquela função."
    },
    {
      id: "q2_3",
      question: "No PHP 8.2+, como se declara um tipo de DNF (Disjunctive Normal Form)?",
      options: [
        "(A&B)|C",
        "A|B&C",
        "(A|B)&C",
        "A&B|C"
      ],
      correctAnswer: 0,
      explanation: "DNF permite combinar Intersection Types dentro de Union Types usando parênteses."
    },
    {
      id: "q2_4",
      question: "Sobre a covariância de tipos de retorno, qual afirmação é verdadeira?",
      options: [
        "Uma classe filha pode retornar um tipo mais genérico que o pai.",
        "Uma classe filha pode retornar um tipo mais específico (subtipo) que o pai.",
        "O tipo de retorno deve ser exatamente igual em toda a hierarquia.",
        "O PHP não suporta covariância."
      ],
      correctAnswer: 1,
      explanation: "A covariância permite que um método subscrito retorne um tipo mais específico, respeitando o contrato original."
    },
    {
      id: "q2_5",
      question: "O tipo 'mixed' inclui o valor 'null'?",
      options: [
        "Sim, inclui todos os tipos, incluindo null.",
        "Não, null deve ser declarado como ?mixed.",
        "Apenas se for um argumento opcional.",
        "Não, mixed é apenas para tipos escalares."
      ],
      correctAnswer: 0
    },
    {
      id: "q2_6",
      question: "O que garante o tipo 'Intersection' (A & B)?",
      options: [
        "Que o valor pode ser ou A ou B.",
        "Que o objeto deve satisfazer todos os tipos declarados simultaneamente.",
        "Que os tipos se fundem numa nova classe.",
        "Que o valor é uma string contendo os nomes das classes."
      ],
      correctAnswer: 1
    }
  ]
};

import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "js-mq1",
  title: "Quiz Master: Prototypal Inheritance Internals",
  passingScore: 80,
  questions: [
    {
      id: "q1_1",
      question: "Qual a diferença fundamental entre a propriedade 'prototype' de uma função e o link '__proto__' de um objeto?",
      options: [
        "Nenhuma, são nomes diferentes para a mesma referência.",
        "'prototype' é usado por funções construtoras para definir o que as instâncias herdarão; '__proto__' é a ligação real do objeto ao seu protótipo.",
        "'__proto__' é para classes e 'prototype' é para objetos literais.",
        "'prototype' é opcional, '__proto__' é obrigatório."
      ],
      correctAnswer: 1
    },
    {
      id: "q1_2",
      question: "O que acontece se alterares uma propriedade no protótipo de uma classe enquanto o sistema está a correr?",
      options: [
        "O programa crasha.",
        "Apenas novas instâncias verão a mudança.",
        "Todas as instâncias existentes que herdam desse protótipo verão a mudança instantaneamente.",
        "O JavaScript bloqueia a alteração por segurança."
      ],
      correctAnswer: 2,
      explanation: "Como a herança é baseada em referências vivas na memória, qualquer alteração no protótipo é refletida em toda a cadeia dinamicamente."
    },
    {
      id: "q1_3",
      question: "Qual o resultado de 'Object.getPrototypeOf(Object.prototype)'?",
      options: ["Object", "null", "undefined", "Function"],
      correctAnswer: 1,
      explanation: "A cadeia de protótipos termina obrigatoriamente em null para evitar loops infinitos de busca."
    },
    {
      id: "q1_4",
      question: "O que caracteriza o fenómeno de 'Property Shadowing'?",
      options: [
        "Quando um objeto não tem propriedades.",
        "Quando um objeto tem uma propriedade com o mesmo nome de uma propriedade no seu protótipo, 'escondendo' a do protótipo.",
        "Quando o código é ofuscado para segurança.",
        "Quando deletamos uma propriedade do protótipo."
      ],
      correctAnswer: 1
    },
    {
      id: "q1_5",
      question: "Por que se deve evitar o uso de 'Object.setPrototypeOf()' em produção?",
      options: [
        "Porque gasta muita internet.",
        "Porque invalida as 'Hidden Classes' do motor V8, tornando o acesso a propriedades muito mais lento.",
        "Porque é uma função depreciada que será removida.",
        "Porque altera o ID do objeto."
      ],
      correctAnswer: 1
    },
    {
      id: "q1_6",
      question: "Qual o benefício de criar um objeto com 'Object.create(null)'?",
      options: [
        "O objeto é persistido no banco de dados.",
        "O objeto é 'puro', não herdando nenhum método do Object.prototype (como toString ou hasOwnProperty).",
        "O objeto torna-se imutável.",
        "O objeto é automaticamente enviado para um Web Worker."
      ],
      correctAnswer: 1
    }
  ]
};


import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "py-mq2",
  title: "Quiz: Metaprogramação e Decoradores",
  passingScore: 85,
  questions: [
    {
      id: "q1",
      question: "Para que serve a função 'functools.wraps'?",
      options: [
        "Acelerar a função",
        "Preservar metadados como __name__ e __doc__ da função original",
        "Esconder o código",
        "Converter para assíncrono"
      ],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "Qual o primeiro argumento recebido pelo método __new__ de uma Metaclasse?",
      options: ["self", "cls (a referência da classe a ser criada)", "name", "metaclass"],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Onde os decoradores de classe são executados?",
      options: ["Em runtime, em cada chamada", "No momento da definição da classe (import time)", "Apenas no deploy", "Dentro da base de dados"],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "Podes encadear múltiplos decoradores?",
      options: ["Não, apenas um por função", "Sim, são aplicados de baixo para cima (do mais próximo da função para fora)", "Sim, mas apenas em classes", "Apenas se forem puros"],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "O que o atributo __call__ permite fazer a um objeto?",
      options: ["Ser apagado", "Ser executado como uma função", "Ser movido para o disco", "Mudar o seu tipo"],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "Metaclasses herdam tipicamente de qual classe?",
      options: ["object", "type", "metaclass", "base"],
      correctAnswer: 1
    }
  ]
};

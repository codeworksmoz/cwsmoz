import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "py-mq20",
  title: "Quiz: Bytecode e Internals",
  passingScore: 80,
  questions: [
    {
      id: "q20_1",
      question: "O que o comando 'dis.dis(funcao)' revela ao engenheiro?",
      options: [
        "O código fonte em C do interpretador",
        "As instruções de baixo nível da máquina de pilha do CPython",
        "O tempo de execução da função",
        "A lista de variáveis globais"
      ],
      correctAnswer: 1
    },
    {
      id: "q20_2",
      question: "Por que as tuplas são ligeiramente mais rápidas que as listas no nível do bytecode?",
      options: [
        "Porque são escritas em letras maiúsculas",
        "Porque são imutáveis, permitindo otimizações de alocação de memória (constant folding)",
        "Porque não suportam números negativos",
        "Não são mais rápidas"
      ],
      correctAnswer: 1
    }
  ]
};
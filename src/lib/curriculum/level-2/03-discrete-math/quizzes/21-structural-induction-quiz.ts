import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "math-q21",
  title: "Quiz: Indução Estrutural e Verificação",
  passingScore: 70,
  questions: [
    {
      id: "q21_1",
      question: "A Indução Estrutural é aplicada principalmente em que tipo de estruturas?",
      options: ["Arrays fixos", "Estruturas definidas recursivamente (árvores, listas, tipos de dados)", "Bases de dados relacionais", "Protocolos de rede lineares"],
      correctAnswer: 1
    },
    {
      id: "q21_2",
      question: "Numa prova por indução estrutural para árvores binárias, o que constitui o Caso Base?",
      options: ["Uma árvore com 100 nós", "A árvore vazia ou um único nó folha", "O nó raiz apenas", "A altura da árvore"],
      correctAnswer: 1
    },
    {
      id: "q21_3",
      question: "O objetivo da Verificação Formal é:",
      options: [
        "Aumentar o número de testes unitários",
        "Provar matematicamente que o código cumpre a sua especificação em todos os cenários",
        "Tornar o site mais bonito",
        "Reduzir o custo do servidor"
      ],
      correctAnswer: 1
    },
    {
      id: "q21_4",
      question: "O que é uma 'Pré-condição' na lógica de Hoare?",
      options: ["O estado final do banco", "Uma condição que deve ser verdadeira ANTES da execução do bloco de código", "O nome da função", "O tempo de CPU gasto"],
      correctAnswer: 1
    },
    {
      id: "q21_5",
      question: "Se provares P(base) e P(sub) → P(composto), o que concluímos por indução estrutural?",
      options: [
        "Que o programa tem um bug",
        "Que a propriedade P é verdadeira para todos os elementos da estrutura",
        "Que o algoritmo é O(n)",
        "Que a memória RAM está cheia"
      ],
      correctAnswer: 1
    },
    {
      id: "q21_6",
      question: "Por que a indução estrutural é vital em linguagens funcionais (Haskell, Lisp)?",
      options: [
        "Porque não usam loops for/while, baseando-se quase inteiramente em recursão",
        "Porque são linguagens lentas",
        "Porque não têm tipos de dados",
        "É apenas um requisito teórico sem uso prático"
      ],
      correctAnswer: 0
    }
  ]
};
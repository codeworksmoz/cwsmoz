import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq10",
  title: "Quiz Master: Fibers e Concorrência Cooperativa",
  passingScore: 85,
  questions: [
    {
      id: "q10_1",
      question: "Qual a diferença fundamental entre Fibers e Generators (yield) no PHP?",
      options: [
        "Fibers são mais lentas.",
        "Generators só podem ser pausados no escopo da própria função; Fibers permitem suspensão em qualquer ponto da stack de chamadas.",
        "Generators usam Threads do SO e Fibers não.",
        "Não existe diferença, são apenas nomes novos para o mesmo recurso."
      ],
      correctAnswer: 1,
      explanation: "A suspensão de stack completa é o diferencial das Fibers, permitindo que funções profundamente aninhadas pausem a execução sem precisar que todas as funções intermediárias sejam geradores."
    },
    {
      id: "q10_2",
      question: "O que acontece se uma Fiber lançar uma exceção que não é capturada dentro dela?",
      options: [
        "O PHP silencia o erro.",
        "A exceção 'borbulha' e é lançada no ponto onde o método resume() ou start() foi chamado.",
        "O servidor web reinicia.",
        "O estado da Fiber muda para 'Suspended' automaticamente."
      ],
      correctAnswer: 1
    },
    {
      id: "q10_3",
      question: "As Fibers em PHP fornecem paralelismo real (multi-core)?",
      options: [
        "Sim, cada Fiber usa um core diferente.",
        "Não, elas fornecem concorrência cooperativa dentro de uma única thread.",
        "Sim, se o servidor tiver mais de 8GB de RAM.",
        "Apenas em sistemas operativos Linux."
      ],
      correctAnswer: 1,
      explanation: "Fibers são sobre concorrência (lidar com muitas tarefas ao mesmo tempo via interrupção), não sobre paralelismo (executar simultaneamente em múltiplos núcleos físicos)."
    },
    {
      id: "q10_4",
      question: "O que o método 'Fiber::suspend()' faz com o controle de execução?",
      options: [
        "Encerra o script PHP.",
        "Pausa a Fiber atual e devolve o controle para o código que chamou start() ou resume().",
        "Pede permissão ao Kernel para continuar.",
        "Limpa as variáveis locais da função."
      ],
      correctAnswer: 1
    },
    {
      id: "q10_5",
      question: "Pode um valor ser passado de volta para a Fiber no momento em que ela é retomada?",
      options: [
        "Não, a retomada não aceita argumentos.",
        "Sim, o valor passado no método resume() torna-se o resultado da chamada original de Fiber::suspend().",
        "Apenas se o valor for uma String.",
        "Sim, mas apenas via variáveis globais."
      ],
      correctAnswer: 1,
      explanation: "Esta comunicação bidirecional permite injetar resultados de I/O (como dados de uma query) diretamente no ponto onde a Fiber parou."
    },
    {
      id: "q10_6",
      question: "O que indica o estado 'isTerminated()' como verdadeiro?",
      options: [
        "A Fiber está aguardando rede.",
        "A execução do callback da Fiber terminou ou uma exceção fatal ocorreu dentro dela.",
        "A Fiber ainda não foi iniciada.",
        "A memória RAM da Fiber foi comprimida."
      ],
      correctAnswer: 1
    }
  ]
};

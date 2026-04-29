import type { Quiz } from '../../../../types';

export const quiz: Quiz = {
  id: "php-mq13",
  title: "Quiz Master: FFI e Interoperabilidade Nativa",
  passingScore: 85,
  questions: [
    {
      id: "q13_1",
      question: "Qual o principal objetivo do FFI no PHP 7.4+?",
      options: [
        "Aumentar a velocidade da internet.",
        "Permitir o carregamento e execução de funções de bibliotecas dinâmicas (.so, .dll) sem extensões C.",
        "Mudar a cor do terminal automaticamente.",
        "Substituir o uso de classes e objetos."
      ],
      correctAnswer: 1,
      explanation: "FFI (Foreign Function Interface) fornece uma ponte direta para bibliotecas nativas compiladas."
    },
    {
      id: "q13_2",
      question: "O que o método 'FFI::cdef()' faz tecnicamente?",
      options: [
        "Comprime o ficheiro PHP.",
        "Cria uma definição de interface C em runtime para o PHP poder interagir.",
        "Lança um erro de rede.",
        "Apaga a memória RAM."
      ],
      correctAnswer: 1,
      explanation: "cdef() recebe uma string com declarações C (headers) e cria um objeto que mapeia essas funções."
    },
    {
      id: "q13_3",
      question: "Qual o maior risco ao utilizar FFI em larga escala?",
      options: [
        "O código ficar muito curto.",
        "Erros de ponteiros podem causar 'Segmentation Faults' e derrubar todo o processo do servidor.",
        "O Google penalizar o site.",
        "O ficheiro index.php ficar pesado."
      ],
      correctAnswer: 1,
      explanation: "FFI permite manipulação direta de memória; um erro de endereço físico crasha o binário do PHP imediatamente."
    },
    {
      id: "q13_4",
      question: "O que é um objeto do tipo 'CData'?",
      options: [
        "Um array PHP comum.",
        "Uma representação de dados C (structs, unions, arrays nativos) na memória do PHP.",
        "Um erro de base de dados.",
        "Um ficheiro JSON binário."
      ],
      correctAnswer: 1
    },
    {
      id: "q13_5",
      question: "Como se obtém o tamanho em bytes de um tipo C através do FFI?",
      options: [
        "strlen($obj)",
        "count($obj)",
        "FFI::sizeof($obj)",
        "sizeof($obj)"
      ],
      correctAnswer: 2
    },
    {
      id: "q13_6",
      question: "A técnica de 'FFI Preloading' é recomendada para produção porquê?",
      options: [
        "Para encriptar o código.",
        "Para eliminar o custo de carregar a biblioteca e parsear o header em cada request.",
        "Para permitir o uso de PHP 5.",
        "Para aumentar o número de utilizadores."
      ],
      correctAnswer: 1,
      explanation: "O preloading faz o carregamento apenas uma vez no arranque da Zend Engine, mantendo a performance de pico."
    }
  ]
};

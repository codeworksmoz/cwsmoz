import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-eco-mq10",
  title: "Quiz Master: PSR Standards e Interoperabilidade",
  passingScore: 85,
  questions: [
    {
      id: "q10_1",
      question: "Qual o principal objetivo do grupo PHP-FIG?",
      options: [
        "Lançar novas versões do PHP.",
        "Promover a interoperabilidade entre frameworks através de recomendações padrão (PSRs).",
        "Criar o servidor web Apache.",
        "Substituir o Composer."
      ],
      correctAnswer: 1
    },
    {
      id: "q10_2",
      question: "A PSR-4 refere-se a qual aspecto do desenvolvimento?",
      options: [
        "Estilo de código (Coding Style).",
        "Autoloading de classes a partir de Namespaces.",
        "Interface de Log.",
        "Mensagens HTTP."
      ],
      correctAnswer: 1
    },
    {
      id: "q10_3",
      question: "Por que as mensagens de Request e Response na PSR-7 são Imutáveis?",
      options: [
        "Para ocupar menos memória RAM.",
        "Para evitar efeitos colaterais indesejados ao passar o pedido por múltiplos middlewares.",
        "Porque o PHP 8 não suporta objetos mutáveis.",
        "Para acelerar o banco de dados."
      ],
      correctAnswer: 1,
      explanation: "A imutabilidade garante que se precisares de alterar o pedido, deves criar uma nova instância, preservando o estado original para auditoria ou outros processos."
    },
    {
      id: "q10_4",
      question: "Qual PSR define a interface comum para Contentores de Injeção de Dependência?",
      options: ["PSR-3", "PSR-7", "PSR-11", "PSR-12"],
      correctAnswer: 2
    },
    {
      id: "q10_5",
      question: "O que a PSR-12 veio substituir como padrão de guia de estilo?",
      options: ["PSR-1", "PSR-2", "PSR-4", "O manual oficial do PHP"],
      correctAnswer: 1
    },
    {
      id: "q10_6",
      question: "A PSR-3 padroniza o quê?",
      options: [
        "O formato de datas no sistema.",
        "Uma interface comum para Logger (LoggerInterface), permitindo trocar Monolog por outros loggers.",
        "A conexão com o MySQL.",
        "O carregamento de ficheiros .env."
      ],
      correctAnswer: 1
    }
  ]
};

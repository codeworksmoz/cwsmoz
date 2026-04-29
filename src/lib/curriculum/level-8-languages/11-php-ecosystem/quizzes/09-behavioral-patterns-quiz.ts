import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-eco-mq9",
  title: "Quiz Master: Design Patterns Comportamentais",
  passingScore: 85,
  questions: [
    {
      id: "q9_1",
      question: "Qual padrão é o mais indicado para eliminar uma estrutura gigante de if/else que escolhe diferentes algoritmos de cálculo?",
      options: [
        "Observer",
        "Command",
        "Strategy",
        "Singleton"
      ],
      correctAnswer: 2,
      explanation: "O Strategy encapsula cada algoritmo numa classe separada e permite injetar a estratégia correta em runtime."
    },
    {
      id: "q9_2",
      question: "O padrão Observer é a base fundamental para qual tipo de arquitetura?",
      options: [
        "Arquitetura Monolítica",
        "Event-Driven Architecture (EDA)",
        "Sistemas de Ficheiros apenas",
        "Criptografia de disco"
      ],
      correctAnswer: 1,
      explanation: "O Observer permite que múltiplos componentes (Handlers) reajam a um evento disparado por um Sujeito sem que este conheça os seus dependentes."
    },
    {
      id: "q9_3",
      question: "Qual a função do padrão 'Chain of Responsibility' em frameworks web?",
      options: [
        "Ligar à base de dados.",
        "Implementar a lógica de Middlewares, onde o pedido passa por filtros sucessivos (Auth, Logs, etc).",
        "Mudar a versão do PHP.",
        "Gerar documentação automática."
      ],
      correctAnswer: 1
    },
    {
      id: "q9_4",
      question: "No padrão Command, por que guardamos o pedido como um objeto?",
      options: [
        "Para o código ficar mais longo.",
        "Para permitir o adiamento da execução (Queues), o histórico de comandos e operações de Undo.",
        "Para aumentar o uso de memória RAM.",
        "Porque o PHP 8 proíbe funções simples."
      ],
      correctAnswer: 1
    },
    {
      id: "q9_5",
      question: "Qual a diferença entre o padrão State e o Strategy?",
      options: [
        "Nenhuma, são o mesmo padrão.",
        "No State, os estados conhecem-se e gerem a transição; no Strategy, o cliente escolhe a estratégia e ela raramente muda durante o uso do objeto.",
        "Strategy é mais rápido.",
        "State é apenas para jogos."
      ],
      correctAnswer: 1
    },
    {
      id: "q9_6",
      question: "O uso de 'SplObjectStorage' no PHP é comum para implementar qual padrão e porquê?",
      options: [
        "Singleton, para guardar a instância.",
        "Observer, para gerir a lista de observadores anexados de forma eficiente e sem duplicados.",
        "Decorator, para guardar os objetos decorados.",
        "Factory, para mapear classes."
      ],
      correctAnswer: 1
    }
  ]
};

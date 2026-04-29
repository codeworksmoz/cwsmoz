import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-eco-mq11",
  title: "Quiz Master: Dependency Injection e Contentores",
  passingScore: 85,
  questions: [
    {
      id: "q1",
      question: "Qual o benefício principal do Autowiring em sistemas de larga escala?",
      options: [
        "Aumentar o uso de memória RAM.",
        "Reduzir a configuração manual de serviços, permitindo que o sistema se auto-organize via tipos.",
        "Impedir o uso de interfaces.",
        "Mudar a versão do PHP automaticamente."
      ],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "No contexto de um DIC, o que acontece numa estratégia 'Shared'?",
      options: [
        "O objeto é apagado após o uso.",
        "A mesma instância é reutilizada em todos os pedidos de injeção.",
        "O objeto é clonado a cada injeção.",
        "O objeto fica acessível apenas no modo CLI."
      ],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Qual interface da PSR define os métodos get() e has() para contentores?",
      options: ["PSR-3", "PSR-7", "PSR-11", "PSR-15"],
      correctAnswer: 2
    },
    {
      id: "q4",
      question: "Por que o 'Service Locator' é frequentemente chamado de anti-padrão em relação ao DI?",
      options: [
        "Porque é mais lento.",
        "Porque esconde as dependências dentro da classe, dificultando o teste e a clareza arquitetural.",
        "Porque não suporta PHP 8.",
        "Porque exige o uso de variáveis estáticas."
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "O que permite injetar uma implementação diferente (ex: Mock) durante testes unitários?",
      options: [
        "O uso de 'new' dentro do construtor.",
        "A dependência de interfaces (abstrações) em vez de classes concretas.",
        "O desligamento do OpCache.",
        "A compressão do ficheiro vendor."
      ],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "Qual API interna do PHP o Autowiring utiliza para descobrir os tipos do construtor?",
      options: ["PDO API", "Reflection API", "Streams API", "CURL API"],
      correctAnswer: 1
    }
  ]
};

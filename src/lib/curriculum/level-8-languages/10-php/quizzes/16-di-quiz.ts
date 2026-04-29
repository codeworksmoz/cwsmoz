import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq16",
  title: "Quiz Master: Dependency Injection e Contentores",
  passingScore: 85,
  questions: [
    {
      id: "q16_1",
      question: "Qual o principal benefício arquitetural da Injeção de Dependência (DI)?",
      options: [
        "Tornar o código mais rápido para o processador.",
        "Reduzir o acoplamento entre as classes, facilitando a manutenção e os testes.",
        "Eliminar o uso de interfaces.",
        "Aumentar o número de classes no projeto."
      ],
      correctAnswer: 1,
      explanation: "DI permite que as classes dependam de abstrações, tornando-as independentes das implementações concretas das suas dependências."
    },
    {
      id: "q16_2",
      question: "O que caracteriza a funcionalidade de 'Autowiring' num Contentor de Serviços?",
      options: [
        "A atualização automática do PHP.",
        "A capacidade de resolver e injetar dependências automaticamente usando a Reflection API.",
        "O envio automático de logs para a nuvem.",
        "A criação de bases de dados sem SQL."
      ],
      correctAnswer: 1,
      explanation: "O Autowiring lê os tipos definidos no construtor e procura as instâncias correspondentes no contentor para injetá-las sem configuração manual."
    },
    {
      id: "q16_3",
      question: "No contexto de um DIC, o que define a estratégia 'Singleton'?",
      options: [
        "A classe pode ter múltiplos donos.",
        "O contentor garante que existirá apenas uma única instância do serviço partilhada por toda a aplicação.",
        "O serviço é destruído após cada uso.",
        "O serviço não aceita parâmetros no construtor."
      ],
      correctAnswer: 1
    },
    {
      id: "q16_4",
      question: "Por que deves injetar Interfaces em vez de Classes Concretas nos construtores?",
      options: [
        "Porque interfaces ocupam menos memória RAM.",
        "Para respeitar o princípio DIP (SOLID) e permitir a troca de implementações (ex: Mocks em testes) sem mudar a classe consumidora.",
        "Porque o PHP 8 não suporta injeção de classes.",
        "Para acelerar o OpCache."
      ],
      correctAnswer: 1
    },
    {
      id: "q16_5",
      question: "O que acontece se houver uma 'Circular Dependency' entre dois serviços no contentor?",
      options: [
        "O PHP resolve o problema sozinho.",
        "O contentor entra em loop infinito ou lança uma exceção de dependência circular ao tentar instanciar os objetos.",
        "A aplicação torna-se 2x mais rápida.",
        "Os objetos são fundidos numa única classe."
      ],
      correctAnswer: 1,
      explanation: "Dependências circulares (A precisa de B, B precisa de A) indicam uma falha de design e impedem a instanciação automática."
    },
    {
      id: "q16_6",
      question: "Qual o papel do 'Service Locator' em relação ao 'Dependency Injection'?",
      options: [
        "São exatamente a mesma coisa.",
        "O Service Locator é frequentemente considerado um anti-padrão pois esconde as dependências dentro da classe, ao contrário do DI que as expõe no construtor.",
        "O Service Locator é a versão moderna do DI.",
        "O Service Locator é usado apenas em bases de dados."
      ],
      correctAnswer: 1,
      explanation: "No DI, vês o que a classe precisa na sua assinatura. No Service Locator, a classe 'puxa' o que precisa do contentor em segredo, dificultando o teste e a compreensão."
    }
  ]
};

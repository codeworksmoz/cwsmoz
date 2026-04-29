import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq15",
  title: "Quiz Master: Arquitetura Hexagonal e Isolamento de Domínio",
  passingScore: 85,
  questions: [
    {
      id: "q15_1",
      question: "Qual o outro nome comum para a Arquitetura Hexagonal?",
      options: [
        "Layered Architecture",
        "MVC (Model-View-Controller)",
        "Ports and Adapters",
        "Microservices Core"
      ],
      correctAnswer: 2
    },
    {
      id: "q15_2",
      question: "Onde devem residir as regras de negócio puras (Entities e Use Cases)?",
      options: [
        "Na camada de infraestrutura",
        "Dentro dos controladores web",
        "No centro do hexágono (Domínio)",
        "No ficheiro de configuração da base de dados"
      ],
      correctAnswer: 2
    },
    {
      id: "q15_3",
      question: "O que representa uma 'Porta' (Port) tecnicamente no PHP?",
      options: [
        "Um endereço IP do servidor",
        "Uma Interface que define o contrato esperado pelo domínio",
        "Uma classe que liga ao MySQL",
        "O diretório 'public' do projeto"
      ],
      correctAnswer: 1,
      explanation: "As portas são abstrações (interfaces) que permitem que o domínio defina como deseja interagir com o mundo externo."
    },
    {
      id: "q15_4",
      question: "O que é um 'Adaptador' (Adapter)?",
      options: [
        "Uma biblioteca instalada via Composer",
        "A implementação concreta de uma interface para uma tecnologia específica (ex: Redis, PostgreSQL)",
        "O próprio motor da Zend VM",
        "Uma ferramenta para converter JSON para XML"
      ],
      correctAnswer: 1
    },
    {
      id: "q15_5",
      question: "A Inversão de Dependência (DIP) garante que:",
      options: [
        "O banco de dados controle o código",
        "Módulos de alto nível (domínio) não dependam de módulos de baixo nível (infraestrutura)",
        "O PHP rode apenas em servidores Linux",
        "A aplicação não precise de memória RAM"
      ],
      correctAnswer: 1,
      explanation: "O domínio define a interface (Porta) e a infraestrutura a implementa, invertendo a dependência tradicional."
    },
    {
      id: "q15_6",
      question: "Qual o principal benefício para os Testes Unitários?",
      options: [
        "Tornar os testes mais lentos",
        "Permitir o uso de Mocks/Stubs que substituem a infraestrutura real com 100% de fidelidade ao contrato",
        "Eliminar a necessidade de testar a base de dados",
        "Criptografar o código de teste"
      ],
      correctAnswer: 1
    }
  ]
};

import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "net-mq1",
  title: "Quiz: Arquitetura de Redes e Modelo OSI",
  passingScore: 80,
  questions: [
    {
      id: "q1_1",
      question: "Em qual camada do modelo OSI ocorre o roteamento lógico baseado em endereços IP?",
      options: ["Camada 2 (Enlace)", "Camada 3 (Rede)", "Camada 4 (Transporte)", "Camada 7 (Aplicação)"],
      correctAnswer: 1
    },
    {
      id: "q1_2",
      question: "O que é o processo de 'Encapsulamento'?",
      options: [
        "A compressão de dados para envio rápido",
        "A adição de cabeçalhos de metadados em cada camada ao descer o stack OSI",
        "O fecho da conexão TCP",
        "A tradução de DNS para IP"
      ],
      correctAnswer: 1
    },
    {
      id: "q1_3",
      question: "Qual camada é responsável pela criptografia e compressão de dados (ex: TLS)?",
      options: ["Sessão", "Apresentação", "Aplicação", "Transporte"],
      correctAnswer: 1
    },
    {
      id: "q1_4",
      question: "O protocolo TCP opera em qual camada?",
      options: ["Rede", "Enlace", "Transporte", "Sessão"],
      correctAnswer: 2
    },
    {
      id: "q1_5",
      question: "Qual a principal diferença entre o Modelo OSI e o TCP/IP?",
      options: [
        "OSI tem 4 camadas e TCP/IP tem 7",
        "O TCP/IP é um modelo prático que combina as camadas superiores do OSI em uma única camada de Aplicação",
        "O Modelo OSI não suporta Wi-Fi",
        "Não há diferença técnica real"
      ],
      correctAnswer: 1
    },
    {
      id: "q1_6",
      question: "Um 'Frame' é a unidade de dados (PDU) de qual camada?",
      options: ["Física", "Rede", "Enlace", "Transporte"],
      correctAnswer: 2
    }
  ]
};

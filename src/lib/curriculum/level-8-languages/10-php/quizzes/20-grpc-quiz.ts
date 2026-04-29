import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq20",
  title: "Quiz Master: gRPC, Protobuf e Alta Disponibilidade",
  passingScore: 85,
  questions: [
    {
      id: "q20_1",
      question: "Qual protocolo de transporte o gRPC exige obrigatoriamente para funcionar?",
      options: [
        "HTTP/1.1",
        "HTTP/2 (ou HTTP/3)",
        "UDP Puro",
        "FTP"
      ],
      correctAnswer: 1,
      explanation: "O gRPC depende das funcionalidades de multiplexação e fluxos binários nativos do HTTP/2."
    },
    {
      id: "q20_2",
      question: "O que é o 'Protocol Buffers' (Protobuf) no ecossistema gRPC?",
      options: [
        "Uma base de dados em memória.",
        "Um mecanismo de serialização binário e uma Linguagem de Definição de Interface (IDL).",
        "Um plugin para o Nginx.",
        "Um tipo de servidor proxy."
      ],
      correctAnswer: 1
    },
    {
      id: "q20_3",
      question: "Qual a vantagem técnica de performance do Protobuf em relação ao JSON?",
      options: [
        "O JSON é mais seguro.",
        "O Protobuf é binário e elimina o custo de parsing de strings extensas, resultando em payloads muito menores.",
        "O Protobuf suporta apenas números inteiros.",
        "O JSON é mais rápido para enviar imagens."
      ],
      correctAnswer: 1
    },
    {
      id: "q20_4",
      question: "Como o PHP pode atuar como um servidor gRPC de alta performance?",
      options: [
        "Não pode, o PHP é apenas cliente.",
        "Utilizando o RoadRunner ou Swoole para manter os workers residentes na memória.",
        "Instalando o WordPress.",
        "Aumentando o tempo de execução no php.ini."
      ],
      correctAnswer: 1,
      explanation: "Servidores persistentes permitem que o PHP receba os streams binários do gRPC sem o overhead de reinicializar o script em cada chamada."
    },
    {
      id: "q20_5",
      question: "O que caracteriza o 'Bi-directional Streaming' no gRPC?",
      options: [
        "Apenas o servidor envia dados.",
        "Tanto o cliente quanto o servidor podem enviar uma sequência de mensagens de forma independente e assíncrona.",
        "O envio de dados em duas línguas diferentes.",
        "A duplicação de dados para segurança."
      ],
      correctAnswer: 1
    },
    {
      id: "q20_6",
      question: "Qual o papel do 'Client Stub' gerado a partir do ficheiro .proto?",
      options: [
        "Esconder o código do atacante.",
        "Fornecer uma interface tipada local que permite chamar métodos remotos como se fossem funções locais.",
        "Aumentar o brilho da interface visual.",
        "Limpar o cache do browser."
      ],
      correctAnswer: 1,
      explanation: "O Stub abstrai toda a complexidade de rede, serialização e HTTP/2, permitindo que o desenvolvedor foque apenas na lógica de negócio."
    }
  ]
};

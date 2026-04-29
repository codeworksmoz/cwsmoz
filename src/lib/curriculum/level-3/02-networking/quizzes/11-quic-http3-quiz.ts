import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "net-mq11",
  title: "Quiz: HTTP/3 e QUIC",
  passingScore: 80,
  questions: [
    {
      id: "q11_1",
      question: "Qual o principal problema do TCP que o QUIC resolve na web?",
      options: [
        "A falta de cores",
        "Head-of-line blocking a nível de transporte",
        "A necessidade de senhas",
        "O tamanho dos ecrãs"
      ],
      correctAnswer: 1
    },
    {
      id: "q11_2",
      question: "Como o QUIC permite a migração de conexão (ex: Wi-Fi para 4G)?",
      options: [
        "Usando o endereço MAC",
        "Usando um Connection ID persistente em vez da tupla de IPs",
        "Reiniciando o download",
        "Usando o GPS"
      ],
      correctAnswer: 1
    },
    {
      id: "q11_3",
      question: "O handshake 0-RTT permite enviar dados:",
      options: [
        "No primeiro pacote de uma reconexão",
        "Sem usar internet",
        "Apenas para o Google",
        "Depois de 10 segundos"
      ],
      correctAnswer: 0
    },
    {
      id: "q11_4",
      question: "QUIC corre obrigatoriamente sobre qual protocolo?",
      options: ["TCP", "UDP", "ICMP", "SCTP"],
      correctAnswer: 1
    },
    {
      id: "q11_5",
      question: "O TLS 1.3 é opcional no QUIC?",
      options: [
        "Sim, para testes",
        "Não, a criptografia está integrada no próprio protocolo por design",
        "Apenas em servidores Windows",
        "Sim, mas o browser avisa"
      ],
      correctAnswer: 1
    },
    {
      id: "q11_6",
      question: "Qual empresa liderou o desenvolvimento inicial do QUIC?",
      options: ["Microsoft", "Google", "Facebook", "Apple"],
      correctAnswer: 1
    }
  ]
};

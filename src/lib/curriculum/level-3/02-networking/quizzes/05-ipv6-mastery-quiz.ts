import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "net-mq5",
  title: "Quiz: IPv6 Mastery",
  passingScore: 80,
  questions: [
    {
      id: "q5_1",
      question: "Quantos bits tem um endereço IPv6?",
      options: ["32 bits", "64 bits", "128 bits", "256 bits"],
      correctAnswer: 2
    },
    {
      id: "q5_2",
      question: "O que é o SLAAC?",
      options: [
        "Um sistema de segurança contra hackers",
        "Autoconfiguração de endereço sem necessidade de servidor DHCP",
        "Um tipo de cabo de rede",
        "Um algoritmo de busca"
      ],
      correctAnswer: 1
    },
    {
      id: "q5_3",
      question: "Por que o IPv6 removeu o Checksum do cabeçalho IP?",
      options: [
        "Para ser menos seguro",
        "Para reduzir o tempo de processamento nos routers (performance)",
        "Porque o IPv6 não tem erros",
        "Para caber mais dados"
      ],
      correctAnswer: 1
    },
    {
      id: "q5_4",
      question: "Qual o endereço IPv6 especial de 'Loopback' (localhost)?",
      options: ["127.0.0.1", "::1", "ff02::1", "2001::"],
      correctAnswer: 1
    },
    {
      id: "q5_5",
      question: "No IPv6, o Broadcast foi substituído por:",
      options: ["Unicast", "Anycast", "Multicast", "Point-to-point"],
      correctAnswer: 2
    },
    {
      id: "q5_6",
      question: "O que permite a convivência de IPv4 e IPv6 (Dual Stack)?",
      options: ["Converter cabos", "Executar ambos os protocolos simultaneamente no mesmo hardware", "Desligar o IPv4", "Usar o Google"],
      correctAnswer: 1
    }
  ]
};

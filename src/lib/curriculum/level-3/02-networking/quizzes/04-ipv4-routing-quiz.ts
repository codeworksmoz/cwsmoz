import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "net-mq4",
  title: "Quiz: IPv4 e Roteamento",
  passingScore: 80,
  questions: [
    {
      id: "q4_1",
      question: "Quantos hosts utilizáveis existem numa sub-rede /24?",
      options: ["256", "254", "255", "128"],
      correctAnswer: 1,
      explanation: "2^8 - 2 (um para rede, um para broadcast)."
    },
    {
      id: "q4_2",
      question: "O que é o CIDR?",
      options: [
        "Um novo tipo de cabo",
        "Um sistema de endereçamento flexível que substituiu as classes A, B, C",
        "Um protocolo de segurança",
        "Uma marca de router"
      ],
      correctAnswer: 1
    },
    {
      id: "q4_3",
      question: "O que um router faz ao receber um pacote com TTL (Time to Live) igual a 1?",
      options: [
        "Envia para o destino final",
        "Descarta o pacote e envia uma mensagem ICMP de erro",
        "Aumenta o TTL para 64",
        "Guarda no cache"
      ],
      correctAnswer: 1
    },
    {
      id: "q4_4",
      question: "Qual o endereço de Broadcast de uma rede 192.168.1.0/24?",
      options: ["192.168.1.1", "192.168.1.255", "192.168.1.0", "255.255.255.0"],
      correctAnswer: 1
    },
    {
      id: "q4_5",
      question: "Longest Prefix Match significa que o router escolhe a rota:",
      options: ["Mais curta em metros", "Mais genérica", "Mais específica (maior máscara)", "Mais antiga"],
      correctAnswer: 2
    },
    {
      id: "q4_6",
      question: "Para que serve o protocolo ARP?",
      options: ["Resolver nomes em IPs", "Descobrir o endereço MAC a partir de um endereço IP local", "Encriptar o tráfego", "Distribuir IPs dinâmicos"],
      correctAnswer: 1
    }
  ]
};

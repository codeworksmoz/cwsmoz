import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "net-mq7",
  title: "Quiz: UDP e Protocolos de Tempo Real",
  passingScore: 80,
  questions: [
    {
      id: "q7_1",
      question: "Qual o tamanho do cabeçalho UDP padrão?",
      options: ["8 bytes", "20 bytes", "40 bytes", "64 bytes"],
      correctAnswer: 0
    },
    {
      id: "q7_2",
      question: "Por que o UDP é preferível para Streaming de Voz (VoIP)?",
      options: [
        "Porque tem melhor qualidade de áudio",
        "Porque a latência baixa é mais importante que a integridade total de cada pacote",
        "Porque o TCP é proibido em redes móveis",
        "Porque usa menos bateria"
      ],
      correctAnswer: 1
    },
    {
      id: "q7_3",
      question: "O UDP faz controlo de congestionamento?",
      options: [
        "Sim, tal como o TCP",
        "Não, ele envia na velocidade máxima permitida pela aplicação",
        "Apenas em redes 5G",
        "Sim, mas apenas se o router pedir"
      ],
      correctAnswer: 1
    },
    {
      id: "q7_4",
      question: "O protocolo QUIC (HTTP/3) corre sobre qual transporte?",
      options: ["TCP", "UDP", "SCTP", "ICMP"],
      correctAnswer: 1
    },
    {
      id: "q7_5",
      question: "O que acontece se um pacote UDP se perder na rede?",
      options: [
        "O sistema reenvia automaticamente",
        "O pacote é perdido para sempre, a menos que a aplicação trate a perda",
        "O router avisa o emissor",
        "A internet cai"
      ],
      correctAnswer: 1
    },
    {
      id: "q7_6",
      question: "DNS usa majoritariamente UDP porquê?",
      options: [
        "Para ser mais seguro",
        "Pela eficiência de pedidos curtos e ausência de overhead de conexão",
        "Porque o porto 53 só aceita UDP",
        "Para evitar o Google"
      ],
      correctAnswer: 1
    }
  ]
};

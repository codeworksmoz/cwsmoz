import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "net-mq6",
  title: "Quiz: TCP Internals",
  passingScore: 80,
  questions: [
    {
      id: "q6_1",
      question: "Qual a sequência correta de flags para abrir uma conexão TCP?",
      options: ["ACK, SYN, SYN-ACK", "SYN, SYN-ACK, ACK", "SYN, ACK, FIN", "PUSH, ACK, SYN"],
      correctAnswer: 1
    },
    {
      id: "q6_2",
      question: "O que o algoritmo 'Slow Start' faz?",
      options: [
        "Desliga o servidor se houver erro",
        "Inicia o envio com uma janela pequena e dobra-a a cada RTT até detectar perdas",
        "Aumenta a CPU gradualmente",
        "Diminui a velocidade do disco"
      ],
      correctAnswer: 1
    },
    {
      id: "q6_3",
      question: "O que acontece se um receptor enviar um ACK com o mesmo número repetido (Triple Duplicate ACK)?",
      options: ["A conexão cai", "O emissor assume perda de pacote e faz uma retransmissão rápida (Fast Retransmit)", "O emissor ignora", "O dado é apagado"],
      correctAnswer: 1
    },
    {
      id: "q6_4",
      question: "Para que serve a 'Receive Window' (rwnd)?",
      options: ["Aumentar o brilho", "Indicar ao emissor quanto espaço livre existe no buffer do receptor para evitar overflow", "Medir a distância física", "Contar o número de pacotes"],
      correctAnswer: 1
    },
    {
      id: "q6_5",
      question: "Qual flag encerra a conexão de forma graciosa?",
      options: ["RST", "FIN", "PSH", "URG"],
      correctAnswer: 1
    },
    {
      id: "q6_6",
      question: "O TCP garante a ordem dos dados?",
      options: [
        "Não, os dados chegam aleatórios",
        "Sim, através de números de sequência e buffers de reordenação no destino",
        "Apenas em redes locais",
        "Sim, mas apenas se usar fibra"
      ],
      correctAnswer: 1
    }
  ]
};

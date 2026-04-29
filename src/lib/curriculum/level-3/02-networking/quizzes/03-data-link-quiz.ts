import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "net-mq3",
  title: "Quiz: Camada de Enlace e Ethernet",
  passingScore: 80,
  questions: [
    {
      id: "q3_1",
      question: "Qual a função da Tabela CAM num Switch?",
      options: [
        "Guardar senhas de rede",
        "Mapear endereços MAC para portas físicas específicas",
        "Resolver nomes de domínio",
        "Bloquear vírus de rede"
      ],
      correctAnswer: 1
    },
    {
      id: "q3_2",
      question: "O que acontece numa 'Broadcast Storm'?",
      options: [
        "A internet fica 2x mais rápida",
        "Frames circulam infinitamente devido a loops, consumindo toda a banda",
        "O router desliga por excesso de calor",
        "O sinal Wi-Fi aumenta"
      ],
      correctAnswer: 1
    },
    {
      id: "q3_3",
      question: "Qual protocolo previne loops em redes de Camada 2?",
      options: ["BGP", "OSPF", "STP (Spanning Tree Protocol)", "DHCP"],
      correctAnswer: 2
    },
    {
      id: "q3_4",
      question: "Um endereço MAC tem quantos bits?",
      options: ["32 bits", "48 bits", "64 bits", "128 bits"],
      correctAnswer: 1
    },
    {
      id: "q3_5",
      question: "Para que serve o campo CRC no final de um frame Ethernet?",
      options: ["Para endereçamento", "Para detecção de erros de bits durante a transmissão", "Para encriptação", "Para definir a prioridade"],
      correctAnswer: 1
    },
    {
      id: "q3_6",
      question: "O que o 'Tagging 802.1Q' permite?",
      options: ["Identificar tráfego de diferentes VLANs num único cabo (Trunk)", "Aumentar a velocidade do cabo", "Mudar a password do Switch", "Ligar servidores a impressoras"],
      correctAnswer: 0
    }
  ]
};


import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "os-q13",
  title: "Quiz: Boot Process e Drivers",
  passingScore: 70,
  questions: [
    {
      id: "q13_1",
      question: "Qual o papel do MBR (Master Boot Record) na BIOS antiga?",
      options: ["Guardar as fotos", "Guardar a tabela de partições e o código do bootloader", "Arrefecer o disco", "Ligar a internet"],
      correctAnswer: 1
    },
    {
      id: "q13_2",
      question: "O processo systemd (ou init) tem sempre qual PID?",
      options: ["0", "1", "100", "Qualquer um"],
      correctAnswer: 1
    },
    {
      id: "q13_3",
      question: "O Secure Boot na UEFI garante o quê?",
      options: ["Que a senha é forte", "Que apenas software assinado e confiável pode ser executado no boot", "Que o disco é SSD", "Que a CPU é Intel"],
      correctAnswer: 1
    },
    {
      id: "q13_4",
      question: "O que é o 'Runlevel' em sistemas Linux tradicionais?",
      options: ["A velocidade do processador", "O estado de operação do sistema (ex: modo texto, multi-utilizador)", "O nível de bateria", "O tamanho da swap"],
      correctAnswer: 1
    },
    {
      id: "q13_5",
      question: "Qual comando do Kernel Linux permite ver os logs de boot?",
      options: ["ls", "dmesg", "cat boot.log", "show init"],
      correctAnswer: 1
    },
    {
      id: "q13_6",
      question: "Um 'Kernel Panic' ocorre quando:",
      options: ["O utilizador grita", "O Kernel encontra um erro interno irrecuperável e pára o sistema para evitar danos", "A internet cai", "O monitor desliga"],
      correctAnswer: 1
    }
  ]
};

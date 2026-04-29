
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "os-q12",
  title: "Quiz: Namespaces e Cgroups",
  passingScore: 70,
  questions: [
    {
      id: "q12_1",
      question: "Qual Namespace do Linux isola a tabela de processos (PIDs)?",
      options: ["NET", "UTS", "PID", "MNT"],
      correctAnswer: 2
    },
    {
      id: "q12_2",
      question: "A função dos Cgroups (Control Groups) é:",
      options: ["Isolar a visão do processo", "Limitar o consumo de recursos físicos (CPU, RAM, I/O)", "Criptografar ficheiros", "Gerir o boot"],
      correctAnswer: 1
    },
    {
      id: "q12_3",
      question: "O Docker utiliza qual destes componentes internos do Kernel?",
      options: ["Somente Namespaces", "Somente Cgroups", "Namespaces, Cgroups e Layered File Systems", "Hypervisors Tipo 1"],
      correctAnswer: 2
    },
    {
      id: "q12_4",
      question: "O que acontece num contentor sem limite de Cgroups se ele entrar em loop infinito?",
      options: ["Nada, o SO isola", "Ele pode consumir 100% da CPU do host, afetando outros contentores", "O contentor reinicia sozinho", "A internet fica lenta"],
      correctAnswer: 1
    },
    {
      id: "q12_5",
      question: "A isolação de rede (Network Namespace) permite:",
      options: ["Ter múltiplos servidores na mesma porta 80 em IPs virtuais diferentes", "Aumentar a largura de banda", "Criptografar o WiFi", "Mudar o MAC address"],
      correctAnswer: 0
    },
    {
      id: "q12_6",
      question: "A diferença técnica fundamental entre VM e Contentor é:",
      options: ["VM é mais rápida", "Contentor partilha o Kernel do host; VM carrega o seu próprio Kernel", "VM é menor", "Contentor não usa RAM"],
      correctAnswer: 1
    }
  ]
};

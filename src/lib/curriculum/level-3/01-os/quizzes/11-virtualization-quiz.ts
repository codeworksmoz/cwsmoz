
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "os-q11",
  title: "Quiz: Virtualização e Hypervisors",
  passingScore: 70,
  questions: [
    {
      id: "q11_1",
      question: "Qual hypervisor corre diretamente sobre o hardware (Bare Metal)?",
      options: ["Tipo 1", "Tipo 2", "Tipo 3", "Docker"],
      correctAnswer: 0
    },
    {
      id: "q11_2",
      question: "O que é a 'Para-virtualização'?",
      options: ["Virtualização total", "O SO convidado é modificado para saber que está a correr sobre um hypervisor", "Virtualização por hardware apenas", "Simulação de CPU"],
      correctAnswer: 1
    },
    {
      id: "q11_3",
      question: "A técnica de 'Trap and Emulate' permite:",
      options: ["Aumentar a rede", "Intercetar instruções privilegiadas do SO convidado e emulá-las de forma segura", "Hackear o host", "Apagar a BIOS"],
      correctAnswer: 1
    },
    {
      id: "q11_4",
      question: "Qual a vantagem de usar hardware-assisted virtualization (VT-x)?",
      options: ["Reduz a performance", "Elimina o overhead de software ao tratar privilégios via hardware", "Não precisa de RAM", "É apenas para 32 bits"],
      correctAnswer: 1
    },
    {
      id: "q11_5",
      question: "O conceito de 'Binary Translation' serve para:",
      options: ["Traduzir línguas", "Reescrever instruções privilegiadas em runtime quando o hardware não suporta virtualização nativa", "Mudar o IP", "Zipar o binário"],
      correctAnswer: 1
    },
    {
      id: "q11_6",
      question: "Hypervisors Tipo 2 são mais usados em:",
      options: ["Data centers massivos", "Estações de trabalho para desenvolvimento e testes rápidos", "Satélites", "Telemóveis antigos"],
      correctAnswer: 1
    }
  ]
};

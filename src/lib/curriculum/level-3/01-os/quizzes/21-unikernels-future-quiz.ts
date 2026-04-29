
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "os-q21",
  title: "Quiz: O Futuro dos SO",
  passingScore: 70,
  questions: [
    {
      id: "q21_1",
      question: "O que caracteriza um Unikernel?",
      options: [
        "Um kernel muito grande",
        "Uma aplicação compilada junto com as funções mínimas do SO num único binário bootável",
        "Um sistema operativo para crianças",
        "Uma rede social"
      ],
      correctAnswer: 1
    },
    {
      id: "q21_2",
      question: "Qual a vantagem de segurança de um Unikernel?",
      options: ["Tem uma firewall maior", "Superfície de ataque mínima (apenas o código necessário existe)", "Não usa internet", "Muda a senha sozinho"],
      correctAnswer: 1
    },
    {
      id: "q21_3",
      question: "Micro-VMs (ex: Firecracker) são usadas para:",
      options: ["Ver televisão", "Isolamento ultra-rápido de funções serverless em milissegundos", "Criptografia de disco", "Design 3D"],
      correctAnswer: 1
    },
    {
      id: "q21_4",
      question: "O conceito de 'Immutable Infrastructure' diz que:",
      options: [
        "Nunca deves mudar o servidor; deves destruí-lo e criar um novo com a nova versão",
        "O hardware é eterno",
        "A base de dados não muda",
        "O código é escrito em pedra"
      ],
      correctAnswer: 0
    },
    {
      id: "q21_5",
      question: "Sistemas Operativos para Edge Computing focam em:",
      options: ["Ecrãs grandes", "Baixa latência e economia de energia para dispositivos de ponta", "Mais RAM", "Interface visual"],
      correctAnswer: 1
    },
    {
      id: "q21_6",
      question: "O futuro do Kernel Linux tende a ser:",
      options: ["Apenas monolítico", "Mais extensível e modular através de eBPF e microserviços internos", "Substituído pelo DOS", "Apenas para telemóveis"],
      correctAnswer: 1
    }
  ]
};

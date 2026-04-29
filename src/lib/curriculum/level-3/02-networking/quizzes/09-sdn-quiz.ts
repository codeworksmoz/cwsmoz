import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "net-mq9",
  title: "Quiz: SDN e Virtualização de Rede",
  passingScore: 80,
  questions: [
    {
      id: "q9_1",
      question: "Qual a principal separação proposta pelo SDN?",
      options: [
        "Separação entre Hardware e Software",
        "Separação entre Data Plane e Control Plane",
        "Separação entre WiFi e Cabo",
        "Separação entre TCP e UDP"
      ],
      correctAnswer: 1
    },
    {
      id: "q9_2",
      question: "O protocolo OpenFlow é usado para:",
      options: [
        "Descarregar ficheiros",
        "Comunicação entre o Controlador SDN e os switches de rede",
        "Mudar a password do router",
        "Ligar à internet"
      ],
      correctAnswer: 1
    },
    {
      id: "q9_3",
      question: "O que é o NFV (Network Function Virtualization)?",
      options: [
        "Trocar cabos de rede",
        "Substituir equipamentos físicos por funções de rede rodando em VMs/Contentores",
        "Aumentar a banda larga via software",
        "Nenhum dos anteriores"
      ],
      correctAnswer: 1
    },
    {
      id: "q9_4",
      question: "Onde se localiza a 'Inteligência' numa rede SDN?",
      options: ["Em cada Switch", "Num Controlador centralizado", "Nos cabos", "No browser do utilizador"],
      correctAnswer: 1
    },
    {
      id: "q9_5",
      question: "A principal vantagem do SDN para Cloud Computing é:",
      options: [
        "Aumentar a cor dos servidores",
        "Agilidade e automação na criação e gestão de redes complexas via API",
        "Remover a necessidade de eletricidade",
        "Aumentar o espaço em disco"
      ],
      correctAnswer: 1
    },
    {
      id: "q9_6",
      question: "O termo 'Northbound API' refere-se à comunicação entre:",
      options: [
        "Switches e Routers",
        "Controlador SDN e as Aplicações/Orquestradores",
        "Servidor e Base de dados",
        "Teclado e Monitor"
      ],
      correctAnswer: 1
    }
  ]
};

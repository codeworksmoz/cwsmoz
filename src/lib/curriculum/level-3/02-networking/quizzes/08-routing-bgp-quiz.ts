import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "net-mq8",
  title: "Quiz: Roteamento Avançado BGP/OSPF",
  passingScore: 80,
  questions: [
    {
      id: "q8_1",
      question: "O BGP é um protocolo de que tipo?",
      options: ["Link State", "Path Vector", "Distance Vector", "Static"],
      correctAnswer: 1
    },
    {
      id: "q8_2",
      question: "Qual algoritmo o OSPF utiliza para calcular rotas?",
      options: ["Bellman-Ford", "Dijkstra (Shortest Path First)", "Bubble Sort", "Greedy Search"],
      correctAnswer: 1
    },
    {
      id: "q8_3",
      question: "O que é um 'Autonomous System' (AS)?",
      options: [
        "Um computador que se liga sozinho",
        "Uma rede ou grupo de redes sob uma única política de administração (ex: um ISP)",
        "Um sistema operativo automático",
        "Um satélite"
      ],
      correctAnswer: 1
    },
    {
      id: "q8_4",
      question: "O que acontece no 'BGP Hijacking'?",
      options: [
        "O router explode",
        "Um AS anuncia rotas para IPs que não lhe pertencem para atrair tráfego",
        "A internet fica mais rápida",
        "As senhas de Wi-Fi são roubadas"
      ],
      correctAnswer: 1
    },
    {
      id: "q8_5",
      question: "Para que serve a 'Administrative Distance'?",
      options: [
        "Medir a distância entre países",
        "Definir a confiabilidade de um protocolo de roteamento em relação a outro",
        "Aumentar a banda larga",
        "Contar o número de saltos"
      ],
      correctAnswer: 1
    },
    {
      id: "q8_6",
      question: "No BGP, o que é o 'Peering'?",
      options: [
        "Dois ISPs trocando tráfego diretamente para reduzir custos e latência",
        "Um erro de conexão",
        "Um tipo de cabo",
        "Instalar um novo router"
      ],
      correctAnswer: 0
    }
  ]
};

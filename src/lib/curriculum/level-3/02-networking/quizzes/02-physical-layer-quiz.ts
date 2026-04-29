import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "net-mq2",
  title: "Quiz: Camada Física e Sinais",
  passingScore: 80,
  questions: [
    {
      id: "q2_1",
      question: "Por que a fibra ótica é imune a interferências eletromagnéticas?",
      options: [
        "Porque é feita de plástico barato",
        "Porque transmite dados através de pulsos de luz em vez de eletrões",
        "Porque corre no vácuo",
        "Porque tem uma blindagem de chumbo"
      ],
      correctAnswer: 1
    },
    {
      id: "q2_2",
      question: "O que o Limite de Shannon define?",
      options: [
        "A distância máxima de um cabo",
        "A capacidade máxima teórica de transmissão de dados num canal com ruído",
        "O número de routers numa rede",
        "O tempo de vida de um satélite"
      ],
      correctAnswer: 1
    },
    {
      id: "q2_3",
      question: "Qual tipo de cabo utiliza o trançado de fios para cancelar ruídos?",
      options: ["Coaxial", "Fibra Monomodo", "UTP (Unshielded Twisted Pair)", "HDMI"],
      correctAnswer: 2
    },
    {
      id: "q2_4",
      question: "Modulação por Amplitude (AM) altera o quê numa onda portadora?",
      options: ["A frequência", "A altura (intensidade) da onda", "O comprimento físico", "A cor da luz"],
      correctAnswer: 1
    },
    {
      id: "q2_5",
      question: "Qual a principal vantagem da Fibra Monomodo sobre a Multimodo?",
      options: ["É mais barata", "Permite maiores distâncias sem regeneração do sinal", "É mais fácil de instalar", "Suporta apenas 10Mbps"],
      correctAnswer: 1
    },
    {
      id: "q2_6",
      question: "Latência de propagação na camada física é limitada principalmente por:",
      options: ["Velocidade da CPU", "Velocidade da luz no meio", "Número de switches", "Quantidade de memória RAM"],
      correctAnswer: 1
    }
  ]
};

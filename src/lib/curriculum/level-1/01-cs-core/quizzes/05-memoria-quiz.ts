import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "cs-t5-quiz",
  title: "Quiz: Memória e Armazenamento",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "O que define uma memória como 'Volátil'?",
      options: [
        "Ela é muito instável e pode explodir",
        "Ela perde todos os dados quando a energia é cortada",
        "Ela é extremamente lenta para ler",
        "Ela só funciona com chips da Intel"
      ],
      correctAnswer: 1,
      explanation: "Volatilidade refere-se à dependência de energia. RAM e Cache são voláteis: sem luz, nada de dados."
    },
    {
      id: "q2",
      question: "Qual destas memórias é a mais rápida na hierarquia computacional?",
      options: ["RAM", "SSD", "Registradores da CPU", "Memória Flash USB"],
      correctAnswer: 2,
      explanation: "Os registradores estão fisicamente dentro do núcleo da CPU. Estão à distância de um ciclo de relógio, sendo a memória de topo."
    },
    {
      id: "q3",
      question: "Qual a principal vantagem tecnológica de um SSD sobre um HDD?",
      options: [
        "É feito de metal mais pesado",
        "Não possui peças móveis, usando apenas sinais elétricos",
        "É muito mais barato para guardar 10TB",
        "Funciona apenas em computadores desktop"
      ],
      correctAnswer: 1,
      explanation: "O SSD (Solid State) usa chips flash. Sem discos a girar, o acesso ao dado é quase instantâneo em comparação ao HDD mecânico."
    },
    {
      id: "q4",
      question: "Por que o computador fica lento quando a RAM está cheia?",
      options: [
        "O processador desliga núcleos para poupar RAM",
        "O SO começa a usar o disco (muito mais lento) para simular RAM (Swap)",
        "A eletricidade corre mais devagar nos fios",
        "A memória RAM precisa de arrefecer"
      ],
      correctAnswer: 1,
      explanation: "Este processo chama-se Paginação ou Swap. Como o disco é milhares de vezes mais lento que a RAM, sentes o sistema a 'congelar'."
    },
    {
      id: "q5",
      question: "Onde o Sistema Operativo é carregado quando ligas o computador?",
      options: [
        "Ele corre diretamente do SSD para sempre",
        "Ele é movido do Armazenamento Secundário para a RAM",
        "Ele vive dentro da CPU permanentemente",
        "Ele é descarregado da Internet em cada boot"
      ],
      correctAnswer: 1,
      explanation: "Para o SO ser executado, ele deve estar na RAM. O processo de 'Boot' é justamente carregar o Kernel do disco para a memória principal."
    }
  ]
};

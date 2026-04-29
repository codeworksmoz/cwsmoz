import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q18-master",
  title: "Quiz: Ética Profissional e Impacto Social",
  passingScore: 80,
  questions: [
    {
      id: "q18_1",
      question: "Segundo o código de ética da ACM/IEEE, quem deve ser a prioridade máxima do engenheiro?",
      options: [
        "A empresa que paga o salário.",
        "O bem-estar e o interesse público.",
        "A tecnologia mais moderna disponível.",
        "O próprio desenvolvimento profissional."
      ],
      correctAnswer: 1
    },
    {
      id: "q18_2",
      question: "O que caracteriza o 'Viés Algorítmico'?",
      options: [
        "Um erro de sintaxe no código.",
        "A reprodução de preconceitos sociais por modelos de software devido a dados de treino tendenciosos.",
        "A preferência por uma linguagem de programação sobre outra.",
        "O uso excessivo de memória RAM."
      ],
      correctAnswer: 1
    },
    {
      id: "q18_3",
      question: "Qual deve ser a atitude de um Engenheiro Master ao ser pressionado a lançar um software com falha de segurança conhecida?",
      options: [
        "Lançar e corrigir depois via patch.",
        "Reportar o risco e recusar-se a comprometer a segurança, sugerindo um adiamento.",
        "Ignorar a falha, pois a responsabilidade é da empresa.",
        "Fingir que não viu a falha."
      ],
      correctAnswer: 1
    },
    {
      id: "q18_4",
      question: "O que o caso histórico 'Therac-25' ensinou à engenharia de software?",
      options: [
        "Que o hardware é mais importante que o software.",
        "Que a falta de redundância de software e má gestão de concorrência pode matar pessoas.",
        "Que o Java é a melhor linguagem para medicina.",
        "Que não devemos usar ecrãs tácteis em hospitais."
      ],
      correctAnswer: 1
    },
    {
      id: "q18_5",
      question: "O princípio da Transparência em IA defende que:",
      options: [
        "O código fonte deve ser sempre open-source.",
        "As decisões tomadas por algoritmos devem ser explicáveis e auditáveis por humanos.",
        "O sistema deve ser gratuito para todos.",
        "A interface deve ser feita em vidro transparente."
      ],
      correctAnswer: 1
    },
    {
      id: "q18_6",
      question: "O que é 'Dark Engineering'?",
      options: [
        "Programar durante a noite.",
        "A criação deliberada de sistemas que enganam o utilizador para obter lucro ou dados.",
        "O uso de temas escuros na IDE.",
        "O estudo de bases de dados encriptadas."
      ],
      correctAnswer: 1
    }
  ]
};

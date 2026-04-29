import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q13-master",
  title: "Quiz: SRE - Engenharia de Fiabilidade de Elite",
  passingScore: 80,
  questions: [
    {
      id: "q13_1",
      question: "Qual a definição clássica de SRE segundo o Google?",
      options: [
        "É contratar mais pessoas para o suporte técnico.",
        "É o que acontece quando pedes a um engenheiro de software para desenhar uma função de operações.",
        "É a obrigatoriedade de usar apenas servidores Linux.",
        "É o fim da necessidade de programadores no projeto."
      ],
      correctAnswer: 1,
      explanation: "O SRE aplica práticas de engenharia de software para resolver problemas de infraestrutura e operações."
    },
    {
      id: "q13_2",
      question: "Qual a diferença fundamental entre um SLO e um SLA?",
      options: [
        "Nenhuma, são sinónimos.",
        "O SLO é um objetivo interno de performance; o SLA é o contrato legal com consequências financeiras.",
        "O SLA é para a equipa técnica e o SLO é para o marketing.",
        "O SLO mede hardware e o SLA mede software."
      ],
      correctAnswer: 1,
      explanation: "Equipas de elite visam cumprir o SLO (mais rigoroso) para nunca chegarem perto de quebrar o SLA (jurídico/financeiro)."
    },
    {
      id: "q13_3",
      question: "O que deve acontecer, segundo as práticas de SRE, se o Error Budget de um serviço for totalmente consumido?",
      options: [
        "A equipa deve ser punida com horas extras.",
        "Novos lançamentos de funcionalidades devem ser interrompidos para focar em fiabilidade.",
        "O SLO deve ser baixado para 'ajustar' a realidade.",
        "O sistema deve ser desligado até ao próximo mês."
      ],
      correctAnswer: 1,
      explanation: "O Error Budget é o mecanismo de controlo que equilibra a velocidade de lançamento com a estabilidade do sistema."
    },
    {
      id: "q13_4",
      question: "O que caracteriza o 'Toil' no contexto de SRE?",
      options: [
        "O tempo gasto a escrever código novo.",
        "Trabalho manual, repetitivo, automatizável e que não agrega valor duradouro.",
        "O tempo de férias da equipa.",
        "A reunião de Sprint Planning."
      ],
      correctAnswer: 1,
      explanation: "Toil é o inimigo da escala. O SRE luta para automatizar estas tarefas e manter o Toil abaixo de 50% do tempo de trabalho."
    },
    {
      id: "q13_5",
      question: "A métrica 'Taxa de Erros 5xx' é um exemplo de qual componente da tríade?",
      options: ["SLO", "SLA", "SLI", "Error Budget"],
      correctAnswer: 2,
      explanation: "O SLI (Service Level Indicator) é a métrica bruta que indica o comportamento do sistema."
    },
    {
      id: "q13_6",
      question: "Por que o SRE defende a automação através de código em vez de scripts manuais isolados?",
      options: [
        "Porque o Python é mais bonito.",
        "Para garantir consistência, versionamento e escalabilidade da infraestrutura.",
        "Para gastar todo o orçamento da empresa em licenças.",
        "Para que o sistema operativo corra mais rápido."
      ],
      correctAnswer: 1,
      explanation: "Tratar infraestrutura como código (IaC) permite aplicar as mesmas práticas de qualidade do software às operações."
    }
  ]
};

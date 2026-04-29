import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q14-master",
  title: "Quiz: Gestão de SLOs e Orçamentos de Erro",
  passingScore: 80,
  questions: [
    {
      id: "q14_1",
      question: "Qual o cálculo fundamental de um Error Budget?",
      options: [
        "SLA + SLO",
        "100% - SLO",
        "SLI * Uptime",
        "Disponibilidade / Latência"
      ],
      correctAnswer: 1,
      explanation: "O Error Budget é a margem de falha aceitável definida pela diferença entre a perfeição (100%) e o seu objetivo (SLO)."
    },
    {
      id: "q14_2",
      question: "O que deve acontecer, por norma, se o Error Budget de um serviço for totalmente consumido?",
      options: [
        "A equipa deve ser punida com redução de bónus.",
        "O lançamento de novas funcionalidades deve ser interrompido para focar em estabilidade.",
        "O SLO deve ser reajustado para ser menos rigoroso.",
        "O sistema deve ser reiniciado imediatamente."
      ],
      correctAnswer: 1,
      explanation: "Esta política garante que a fiabilidade é a prioridade número um quando os limites de erro são atingidos."
    },
    {
      id: "q14_3",
      question: "Qual a vantagem de usar uma 'Rolling Window' (Janela Móvel) de 28 dias em vez de um mês civil?",
      options: [
        "Gasta menos bateria no servidor.",
        "Evita que o orçamento recupere artificialmente apenas pela mudança de mês, mantendo a visão de saúde contínua.",
        "Facilita o cálculo para o departamento financeiro.",
        "Permite ignorar erros ocorridos aos fins de semana."
      ],
      correctAnswer: 1
    },
    {
      id: "q14_4",
      question: "Se o seu SLO de uptime é 99.9%, quanto tempo de downtime total você tem num mês de 30 dias?",
      options: [
        "Cerca de 43 minutos.",
        "Cerca de 8 horas.",
        "Cerca de 5 minutos.",
        "Zero minutos."
      ],
      correctAnswer: 0,
      explanation: "99.9% de disponibilidade permite apenas 0.1% de erro, o que equivale a ~43.2 minutos por mês."
    },
    {
      id: "q14_5",
      question: "Quem deve ser envolvido na definição dos valores de um SLO?",
      options: [
        "Apenas os desenvolvedores juniores.",
        "Apenas a equipa de operações.",
        "Product Owners, Engenheiros e Stakeholders de Negócio.",
        "O cliente final diretamente."
      ],
      correctAnswer: 2,
      explanation: "O SLO é uma decisão de negócio e técnica equilibrada: deve ser alto o suficiente para satisfazer o utilizador, mas baixo o suficiente para ser atingível e permitir inovação."
    },
    {
      id: "q14_6",
      question: "O que é um 'Burn Rate' no contexto de Error Budgets?",
      options: [
        "A velocidade com que o processador aquece.",
        "A velocidade com que o orçamento de erro está a ser consumido ao longo do tempo.",
        "O rácio de demissões na equipa de engenharia.",
        "O tempo que leva para compilar o código."
      ],
      correctAnswer: 1,
      explanation: "Monitorizar o burn rate permite prever se o orçamento vai acabar antes do fim do ciclo, permitindo ações proativas."
    }
  ]
};

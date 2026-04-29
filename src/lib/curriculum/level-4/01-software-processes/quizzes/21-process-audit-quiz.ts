import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q21-master",
  title: "Quiz: Auditoria de Processo e Performance Industrial",
  passingScore: 80,
  questions: [
    {
      id: "q21_1",
      question: "Qual das métricas DORA mede especificamente a agilidade da equipa em transformar uma ideia em código vivo?",
      options: [
        "Change Failure Rate",
        "Lead Time for Changes",
        "Deployment Frequency",
        "Mean Time to Recovery"
      ],
      correctAnswer: 1,
      explanation: "O Lead Time mede a velocidade do pipeline e do processo de review: do commit à produção."
    },
    {
      id: "q21_2",
      question: "Uma equipa de elite, segundo o relatório DORA, deve ser capaz de restaurar um serviço (MTTR) em quanto tempo?",
      options: [
        "Menos de uma hora",
        "No máximo 24 horas",
        "Dentro da mesma semana",
        "Apenas após uma auditoria completa"
      ],
      correctAnswer: 0
    },
    {
      id: "q21_3",
      question: "O conceito de 'Kaizen' aplicado à engenharia de software foca em:",
      options: [
        "Reescrever o código legado a cada 6 meses.",
        "Pequenas e contínuas melhorias incrementais baseadas em evidências e feedback.",
        "Contratar o máximo de estagiários possível para reduzir custos.",
        "Automatizar apenas a interface visual do site."
      ],
      correctAnswer: 1
    },
    {
      id: "q21_4",
      question: "Qual o principal perigo de comparar a 'Velocity' (Story Points) entre duas equipas diferentes?",
      options: [
        "Nenhum, serve para premiar a melhor equipa.",
        "É um erro metodológico, pois Story Points são relativos e cada equipa tem a sua própria régua de esforço.",
        "Aumenta a velocidade do processador.",
        "Torna o código mais longo e difícil de ler."
      ],
      correctAnswer: 1,
      explanation: "A velocidade é uma métrica de capacidade interna da equipa, não uma ferramenta de comparação competitiva externa."
    },
    {
      id: "q21_5",
      question: "Ao auditar um processo, se observares uma 'Change Failure Rate' superior a 50%, qual deve ser a recomendação técnica prioritária?",
      options: [
        "Dobrar o número de desenvolvedores.",
        "Investir em automação de testes e melhorar o processo de Code Review antes do deploy.",
        "Desligar o servidor de produção.",
        "Mudar a linguagem de programação do sistema."
      ],
      correctAnswer: 1,
      explanation: "Uma alta taxa de falha indica instabilidade no processo de garantia de qualidade (QA)."
    },
    {
      id: "q21_6",
      question: "Maturidade em Engenharia de Software significa que o processo de desenvolvimento é:",
      options: [
        "Livre de qualquer bug.",
        "Previsível, monitorizado e em constante otimização baseada em dados.",
        "Escrito inteiramente por inteligência artificial.",
        "Executado sem necessidade de reuniões de alinhamento."
      ],
      correctAnswer: 1
    }
  ]
};

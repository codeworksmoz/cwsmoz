import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q19-master",
  title: "Quiz: Liderança Técnica e Impacto de Equipa",
  passingScore: 80,
  questions: [
    {
      id: "q19_1",
      question: "Qual o principal indicador de sucesso de um Staff Engineer ou Tech Lead na Codworks Moz?",
      options: [
        "O número de commits e linhas de código que ele produz individualmente.",
        "A melhoria da autonomia, velocidade e qualidade técnica de toda a equipa.",
        "A capacidade de fechar mais tickets no Jira do que os juniores.",
        "Manter o silêncio absoluto e evitar reuniões de alinhamento."
      ],
      correctAnswer: 1,
      explanation: "Liderança master é sobre o impacto multiplicador: quão melhor a equipa se torna sob a sua orientação."
    },
    {
      id: "q19_2",
      question: "A técnica de 'Mentoria Socrática' consiste em:",
      options: [
        "Exigir que o desenvolvedor júnior estude a fundo a história da Grécia Antiga.",
        "Fornecer a solução pronta e o código corrigido para acelerar o deploy.",
        "Guiar o aprendizado através de perguntas estratégicas para que o mentorado descubra a solução.",
        "Ignorar as dúvidas para forçar a independência forçada do júnior."
      ],
      correctAnswer: 2,
      explanation: "Perguntar em vez de responder ensina o processo de pensamento e o diagnóstico, criando autonomia real."
    },
    {
      id: "q19_3",
      question: "O que representa o 'Bus Factor' num projeto de software?",
      options: [
        "A velocidade de transferência de dados entre o servidor e o cliente.",
        "O número mínimo de membros da equipa que, se saírem, fariam o projeto parar por falta de conhecimento.",
        "O custo do transporte dos funcionários para o escritório.",
        "A quantidade de bugs encontrados durante o teste de carga."
      ],
      correctAnswer: 1
    },
    {
      id: "q19_4",
      question: "Como um Líder Técnico deve agir perante uma 'Race Condition' detetada por um júnior no código de produção?",
      options: [
        "Corrigir o erro sozinho à noite para não expor a falha da equipa.",
        "Usar o momento como uma oportunidade de 'Shadowing' ou 'Pair Programming' para ensinar sobre sincronização.",
        "Delegar a correção para outro sénior para ganhar tempo.",
        "Punir o júnior pelo erro para garantir que não se repita."
      ],
      correctAnswer: 1
    },
    {
      id: "q19_5",
      question: "Qual a diferença fundamental entre Mentoria e Sponsorship (Patrocínio)?",
      options: [
        "Sponsorship é apenas para diretores da empresa.",
        "Mentoria é dar conselhos; Sponsorship é usar o seu poder e influência para criar oportunidades para o outro.",
        "Sponsorship é pagar cursos e certificações para a equipa.",
        "Não existe diferença, são termos sinónimos na engenharia."
      ],
      correctAnswer: 1
    },
    {
      id: "q19_6",
      question: "Um Tech Lead decide aceitar um débito técnico para cumprir um prazo crítico de negócio. Qual a ação master obrigatória?",
      options: [
        "Esconder o débito dos outros engenheiros para evitar discussões.",
        "Registrar a decisão e as consequências num ADR (Architecture Decision Record) e criar uma tarefa de refatoração no backlog.",
        "Culpar os stakeholders se o sistema ficar lento no futuro.",
        "Reescrever o sistema inteiro em segredo após o lançamento."
      ],
      correctAnswer: 1,
      explanation: "A transparência e a rastreabilidade são as marcas da maturidade técnica."
    }
  ]
};

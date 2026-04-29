import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q16-master",
  title: "Quiz: Post-mortems e Análise de Causa Raiz",
  passingScore: 80,
  questions: [
    {
      id: "q16_1",
      question: "Qual o objetivo primordial de um Post-mortem numa cultura de engenharia de elite?",
      options: [
        "Identificar o responsável para aplicação de medidas disciplinares.",
        "Aprender com a falha e implementar melhorias sistémicas que evitem a repetição.",
        "Justificar o erro perante os clientes com desculpas técnicas.",
        "Documentar o erro apenas para fins de auditoria legal."
      ],
      correctAnswer: 1,
      explanation: "O foco é o aprendizado coletivo e a resiliência do sistema, não a culpa individual."
    },
    {
      id: "q16_2",
      question: "O que caracteriza um post-mortem 'Blame-free' (Sem Culpa)?",
      options: [
        "Ignorar que o erro aconteceu para não chatear a equipa.",
        "Focar em falhas no processo e no design do sistema que permitiram o erro humano.",
        "Permitir que qualquer pessoa apague os logs de erro.",
        "Não escrever relatórios técnicos sobre falhas."
      ],
      correctAnswer: 1
    },
    {
      id: "q16_3",
      question: "Ao aplicar a técnica dos '5 Porquês', o objetivo é:",
      options: [
        "Perguntar a 5 pessoas diferentes quem errou.",
        "Aprofundar a investigação para além dos sintomas superficiais até atingir a causa raiz.",
        "Demorar pelo menos 5 dias a analisar o incidente.",
        "Listar 5 culpados diferentes para o mesmo erro."
      ],
      correctAnswer: 1,
      explanation: "Cada 'porquê' serve para descascar uma camada do problema até chegar à falha estrutural."
    },
    {
      id: "q16_4",
      question: "O que deve ser a prioridade ao definir os 'Action Items' de um post-mortem?",
      options: [
        "Punir o desenvolvedor envolvido.",
        "Automação e correções no processo que eliminem a possibilidade do erro ocorrer novamente.",
        "Escrever um manual de 100 páginas explicando o erro.",
        "Pedir aos desenvolvedores para terem 'mais cuidado' na próxima vez."
      ],
      correctAnswer: 1,
      explanation: "Pedir 'cuidado' não resolve o problema. Criar um teste automático ou uma barreira no pipeline sim."
    },
    {
      id: "q16_5",
      question: "Qual destas informações é INDISPENSÁVEL numa Timeline de incidente?",
      options: [
        "A marca de café que a equipa estava a beber.",
        "Timestamps precisos da deteção, início da mitigação e resolução final.",
        "O nome de todos os familiares dos envolvidos.",
        "A previsão do tempo no momento do crash."
      ],
      correctAnswer: 1
    },
    {
      id: "q16_6",
      question: "Por que a partilha de post-mortems é vital para a organização?",
      options: [
        "Para envergonhar publicamente quem cometeu o erro.",
        "Para disseminar o conhecimento e criar 'imunidade' técnica em outras equipas.",
        "Para aumentar o volume de ficheiros no servidor.",
        "Não existe vantagem em partilhar falhas."
      ],
      correctAnswer: 1,
      explanation: "Quando uma equipa aprende com o erro de outra, a empresa inteira torna-se mais resiliente sem precisar de falhar em todo o lado."
    }
  ]
};
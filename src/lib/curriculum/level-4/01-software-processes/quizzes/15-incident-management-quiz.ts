import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q15-master",
  title: "Quiz: Gestão de Incidentes e Resposta a Crises",
  passingScore: 80,
  questions: [
    {
      id: "q15_1",
      question: "Qual deve ser a prioridade número um de uma equipa durante um incidente de severidade P0?",
      options: [
        "Encontrar e punir o autor do bug.",
        "Mitigar o impacto e restaurar o serviço o mais rápido possível.",
        "Reescrever a documentação do sistema.",
        "Fazer uma análise profunda da causa raiz antes de qualquer ação."
      ],
      correctAnswer: 1,
      explanation: "Em crises críticas, o foco é a mitigação imediata (parar o sangramento). A análise profunda ocorre depois, na fase de post-mortem."
    },
    {
      id: "q15_2",
      question: "Qual a função principal do Incident Commander (IC) numa sala de crise?",
      options: [
        "Escrever o código que corrige o bug.",
        "Coordenar a resposta, delegar tarefas e gerir a comunicação.",
        "Apresentar desculpas ao cliente por telefone.",
        "Configurar os servidores de base de dados."
      ],
      correctAnswer: 1,
      explanation: "O IC é o orquestrador. Ele liberta os técnicos da carga de coordenação para que possam focar na solução."
    },
    {
      id: "q15_3",
      question: "O que caracteriza o estado de 'Mitigação' num incidente?",
      options: [
        "O problema foi resolvido e o código foi limpo.",
        "O serviço foi restaurado (ex: via rollback), embora a causa raiz ainda possa existir.",
        "O servidor foi desligado permanentemente.",
        "O cliente aceitou o erro."
      ],
      correctAnswer: 1
    },
    {
      id: "q15_4",
      question: "Por que se deve evitar tentar 'corrigir o bug' (hotfix) diretamente em produção durante uma crise P0 se um Rollback for possível?",
      options: [
        "Porque o Rollback é mais lento.",
        "Porque um hotfix apressado sob pressão tem alta probabilidade de introduzir novos erros imprevistos.",
        "Porque o Git não permite hotfixes.",
        "Porque o cliente prefere versões antigas."
      ],
      correctAnswer: 1,
      explanation: "Rollback para uma versão estável conhecida é a manobra de segurança padrão para garantir a volta imediata do serviço."
    },
    {
      id: "q15_5",
      question: "Qual a importância de uma 'Status Page' externa durante um incidente?",
      options: [
        "Para mostrar anúncios aos utilizadores.",
        "Para reduzir o volume de suporte e manter a transparência e confiança com os utilizadores.",
        "Para esconder que o sistema está em baixo.",
        "Para medir a velocidade da internet."
      ],
      correctAnswer: 1
    },
    {
      id: "q15_6",
      question: "O que o indicador MTTR (Mean Time To Recovery) mede?",
      options: [
        "O tempo médio que a equipa leva para começar a trabalhar.",
        "O tempo médio decorrido desde a deteção do incidente até à sua mitigação/resolução.",
        "O número de mensagens trocadas no Slack durante a crise.",
        "A quantidade de código escrito por hora."
      ],
      correctAnswer: 1,
      explanation: "O MTTR é a métrica de ouro da resiliência operacional: quão rápido conseguimos recuperar de uma falha."
    }
  ]
};

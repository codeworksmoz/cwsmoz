import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q17-master",
  title: "Quiz: Documentação de Arquitetura e ADRs",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Qual o objetivo primordial de um Architecture Decision Record (ADR)?",
      options: [
        "Descrever cada linha de código do sistema.",
        "Capturar o contexto, a decisão e as consequências de escolhas técnicas significativas.",
        "Servir como manual de utilizador para clientes não técnicos.",
        "Listar todos os bugs encontrados durante o Sprint."
      ],
      correctAnswer: 1,
      explanation: "O ADR foca no 'porquê' e no rasto de decisões que levaram à arquitetura atual do sistema."
    },
    {
      id: "q2",
      question: "Por que a seção de 'Consequences' (Consequências) é considerada a mais importante para um Engenheiro Master?",
      options: [
        "Para listar quem é o culpado pela decisão.",
        "Porque toda a decisão técnica envolve trade-offs (ganhos e perdas) que devem ser conhecidos pela equipa futura.",
        "Para definir o prazo de entrega da funcionalidade.",
        "Para esconder os pontos fracos do sistema."
      ],
      correctAnswer: 1,
      explanation: "Software engineering é sobre trade-offs. Entender o que foi sacrificado é vital para a manutenção e evolução do sistema."
    },
    {
      id: "q3",
      question: "O que deve ser feito quando uma decisão registada num ADR antigo é alterada?",
      options: [
        "Apagar o ficheiro ADR antigo.",
        "Editar o texto original do ADR antigo como se a decisão nova fosse a primeira.",
        "Manter o ADR original, marcar o estado como 'Superceded' e criar um novo ADR apontando para ele.",
        "Ignorar os ADRs e apenas mudar o código."
      ],
      correctAnswer: 2,
      explanation: "ADRs são um registo histórico imutável. Substituí-los formalmente preserva a memória de por que a mudança foi necessária."
    },
    {
      id: "q4",
      question: "Qual o benefício de guardar ADRs como ficheiros Markdown (.md) no Git?",
      options: [
        "Permite que o departamento de marketing os leia mais facilmente.",
        "Garante que as decisões sejam revistas via Pull Request e fiquem versionadas junto com o código.",
        "Torna o site mais rápido para o utilizador final.",
        "Ocupa menos espaço no servidor do que ficheiros PDF."
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "No contexto de estados de um ADR, o que significa 'Deprecated'?",
      options: [
        "A decisão ainda está em discussão.",
        "A funcionalidade ou tecnologia decidida já não deve ser usada mas ainda existe no sistema.",
        "O erro foi corrigido.",
        "O programador foi demitido."
      ],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "Qual destas informações NÃO pertence tipicamente a um ADR?",
      options: [
        "Data da decisão.",
        "Status da decisão.",
        "O código-fonte completo da implementação.",
        "Contexto do problema enfrentado."
      ],
      correctAnswer: 2,
      explanation: "O ADR deve ser conciso e focar na decisão arquitetural. O código vive nos ficheiros de fonte; o ADR justifica a existência desse código."
    }
  ]
};

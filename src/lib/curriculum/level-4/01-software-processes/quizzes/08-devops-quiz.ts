import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q8-master",
  title: "Quiz: Cultura DevOps e o Modelo CAMS",
  passingScore: 75,
  questions: [
    {
      id: "q8_1",
      question: "No modelo CAMS, o que representa o pilar 'Culture' no dia-a-dia de uma equipa de elite?",
      options: [
        "A obrigatoriedade de usar o Jira para todas as tarefas.",
        "A quebra de silos e a responsabilidade partilhada pela saúde do sistema em produção.",
        "A contratação de uma equipa externa de operações.",
        "O uso exclusivo de ferramentas open-source."
      ],
      correctAnswer: 1,
      explanation: "A cultura DevOps foca na colaboração radical e no fim do jogo de culpas entre quem escreve o código e quem o mantém vivo."
    },
    {
      id: "q8_2",
      question: "Qual o objetivo primordial de um 'Post-mortem' numa cultura de 'Blame-free'?",
      options: [
        "Identificar o desenvolvedor que causou o bug para punição.",
        "Identificar as falhas sistémicas no processo que permitiram que o erro ocorresse.",
        "Esconder a falha dos clientes e stakeholders.",
        "Calcular o bónus financeiro da equipa."
      ],
      correctAnswer: 1,
      explanation: "Focar no processo e não na pessoa garante que a equipa aprenda com o erro e implemente defesas automáticas para que ele não se repita."
    },
    {
      id: "q8_3",
      question: "O conceito de 'Shift Left' sugere que:",
      options: [
        "O monitor deve ser colocado à esquerda da mesa.",
        "Preocupações com testes, segurança e performance devem começar o mais cedo possível no SDLC.",
        "As tarefas mais difíceis devem ser feitas apenas no final do projeto.",
        "A equipa deve usar apenas a mão esquerda para digitar."
      ],
      correctAnswer: 1,
      explanation: "Quanto mais cedo um problema é detetado, menor é o seu custo de correção e menor o risco para o negócio."
    },
    {
      id: "q8_4",
      question: "Qual a métrica DevOps que mede o tempo médio necessário para restaurar o serviço após uma falha?",
      options: [
        "Lead Time",
        "Throughput",
        "MTTR (Mean Time To Recover)",
        "Code Coverage"
      ],
      correctAnswer: 2
    },
    {
      id: "q8_5",
      question: "Segundo o pilar 'Automation', o que deve ser a prioridade da equipa?",
      options: [
        "Automatizar apenas os testes de interface.",
        "Automatizar qualquer tarefa manual repetitiva que possa causar erro humano.",
        "Remover todos os humanos da equipa de operações.",
        "Usar IA para escrever 100% do código fonte."
      ],
      correctAnswer: 1,
      explanation: "A automação liberta o engenheiro para focar na lógica e criatividade, removendo a fricção de tarefas mecânicas."
    },
    {
      id: "q8_6",
      question: "Qual a relação correta entre DevOps e SRE (Site Reliability Engineering)?",
      options: [
        "São concorrentes e não podem ser usados juntos.",
        "SRE é uma implementação específica e técnica da filosofia DevOps.",
        "DevOps é para startups e SRE apenas para o Google.",
        "SRE foca apenas em hardware e DevOps apenas em código."
      ],
      correctAnswer: 1,
      explanation: "SRE é o que acontece quando pedes a um engenheiro de software para desenhar uma equipa de operações."
    }
  ]
};
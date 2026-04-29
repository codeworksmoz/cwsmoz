import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q4-master",
  title: "Quiz: Kanban, Lean e Eficiência de Fluxo",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Qual o objetivo técnico de definir um 'WIP Limit'?",
      options: [
        "Aumentar o número de horas extras da equipa",
        "Reduzir o multitasking e focar na conclusão das tarefas para melhorar o Cycle Time",
        "Esconder as tarefas difíceis",
        "Substituir o papel do gestor"
      ],
      correctAnswer: 1,
      explanation: "Limitar o trabalho em progresso força a equipa a resolver gargalos em vez de iniciar novas tarefas indefinidamente."
    },
    {
      id: "q2",
      question: "A métrica 'Lead Time' mede o quê?",
      options: [
        "O tempo que o programador leva a digitar",
        "O tempo total desde o pedido do cliente até à entrega final em produção",
        "O número de bugs encontrados no mês",
        "A velocidade da conexão de rede"
      ],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Um sistema de Kanban é considerado um sistema 'Pull'. Isto significa que:",
      options: [
        "As tarefas são empurradas para os programadores pelos chefes",
        "As tarefas são puxadas pelos programadores apenas quando há capacidade disponível (WIP livre)",
        "O código é puxado do servidor GitHub automaticamente",
        "O cliente puxa o site para o seu browser"
      ],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "No contexto Lean, o que é 'Waste' (Desperdício) no desenvolvimento de software?",
      options: [
        "Código que está na RAM mas não no HD",
        "Qualquer atividade que não adiciona valor direto ao produto final (ex: bugs, reuniões excessivas)",
        "O uso de energia elétrica pelo servidor",
        "Papéis e post-its velhos"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "O que indica um 'Bottleneck' (Gargalo) num quadro Kanban?",
      options: [
        "Uma coluna vazia",
        "Uma coluna onde o trabalho se acumula e o limite de WIP é constantemente atingido",
        "O fim da Sprint",
        "Quando o Product Owner entra de férias"
      ],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "Qual a diferença de ritmo entre Scrum e Kanban?",
      options: [
        "Nenhuma, são iguais",
        "Scrum usa cadência fixa (Sprints); Kanban usa fluxo contínuo sem janelas de tempo obrigatórias",
        "Kanban é mais lento por design",
        "Scrum é apenas para design e Kanban para código"
      ],
      correctAnswer: 1,
      explanation: "Scrum trabalha em blocos fechados. Kanban entrega cada item assim que estiver pronto, sem esperar pelo fim de um ciclo."
    }
  ]
};
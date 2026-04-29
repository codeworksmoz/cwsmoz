import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "hci-q2",
  title: "Quiz: Heurísticas de Nielsen",
  passingScore: 70,
  questions: [
    {
      id: "hci_q2_1",
      question: "Qual heurística recomenda que o utilizador deve saber sempre o que está a acontecer?",
      options: [
        "Consistência e Padrões",
        "Visibilidade do Estado do Sistema",
        "Mapeamento com o Mundo Real",
        "Ajuda e Documentação"
      ],
      correctAnswer: 1
    },
    {
      id: "hci_q2_2",
      question: "Para que serve a heurística de 'Controlo e Liberdade do Utilizador'?",
      options: [
        "Para impedir que o utilizador feche o site",
        "Para oferecer funções de desfazer (Undo) e refazer (Redo) em erros acidentais",
        "Para dar acesso de administrador a todos",
        "Para apagar o histórico do browser"
      ],
      correctAnswer: 1
    },
    {
      id: "hci_q2_3",
      question: "O uso de um ícone de 'Pasta' para representar um diretório cumpre qual heurística?",
      options: [
        "Flexibilidade e Eficiência",
        "Correspondência entre o Sistema e o Mundo Real",
        "Reconhecimento em vez de Relembrança",
        "Estética e Design Minimalista"
      ],
      correctAnswer: 1
    },
    {
      id: "hci_q2_4",
      question: "O que evita que um utilizador precise de memorizar onde estão os botões em cada página?",
      options: [
        "Consistência e Padrões",
        "Ajuda aos utilizadores a reconhecer erros",
        "Prevenção de erros",
        "Design Minimalista"
      ],
      correctAnswer: 0
    },
    {
      id: "hci_q2_5",
      question: "Um diálogo de confirmação antes de apagar um ficheiro é um exemplo de:",
      options: ["Prevenção de Erros", "Liberdade do utilizador", "Visibilidade de estado", "Estética"],
      correctAnswer: 0
    },
    {
      id: "hci_q2_6",
      question: "Atalhos de teclado (shortcuts) para utilizadores experientes cumprem qual heurística?",
      options: [
        "Visibilidade de estado",
        "Flexibilidade e Eficiência de Uso",
        "Consistência",
        "Ajuda e documentação"
      ],
      correctAnswer: 1
    }
  ]
};

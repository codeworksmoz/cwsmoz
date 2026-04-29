import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "css-mq2",
  title: "Quiz Master: Cascade Layers (@layer)",
  passingScore: 85,
  questions: [
    {
      id: "q2_1",
      question: "Numa declaração '@layer base, components, utilities', qual camada tem a maior prioridade de aplicação?",
      options: [
        "A camada 'base', por ser a primeira definida.",
        "A camada 'utilities', por ser a última na ordem de precedência declarada.",
        "A que tiver o seletor com mais IDs (#).",
        "A camada que estiver escrita fisicamente por último no ficheiro."
      ],
      correctAnswer: 1,
      explanation: "A ordem de definição no topo dita a hierarquia. A última camada da lista vence todas as anteriores, independentemente da especificidade dos seletores internos."
    },
    {
      id: "q2_2",
      question: "Qual a relação de prioridade entre estilos 'unlayered' (fora de @layer) e estilos dentro de camadas?",
      options: [
        "Estilos dentro de camadas sempre vencem estilos sem camada.",
        "Estilos sem camada (unlayered) têm prioridade máxima sobre qualquer camada.",
        "Ambos competem apenas por especificidade (IDs e Classes).",
        "O browser escolhe aleatoriamente para evitar deadlocks."
      ],
      correctAnswer: 1,
      explanation: "No algoritmo da cascata moderna, o código fora de camadas é considerado o mais importante, vencendo qualquer bloco @layer."
    },
    {
      id: "q2_3",
      question: "Como o @layer ajuda a integrar bibliotecas externas como o Bootstrap?",
      options: [
        "Acelera o download do ficheiro CSS.",
        "Permite 'domar' a biblioteca colocando-a numa camada de baixa prioridade, facilitando a sobreposição de estilos.",
        "Converte o código da biblioteca para SASS automaticamente.",
        "Elimina a necessidade de usar o comando @import."
      ],
      correctAnswer: 1
    },
    {
      id: "q2_4",
      question: "O que acontece se tentares aninhar uma camada usando a sintaxe '@layer framework.theme'?",
      options: [
        "Ocorre um erro de sintaxe.",
        "Crias uma sub-camada chamada 'theme' dentro da camada pai 'framework'.",
        "As duas camadas fundem-se numa só.",
        "A camada 'theme' ganha prioridade global."
      ],
      correctAnswer: 1
    },
    {
      id: "q2_5",
      question: "É possível redefinir a ordem das camadas múltiplas vezes no mesmo projeto?",
      options: [
        "Sim, a última declaração '@layer' sempre altera a ordem global.",
        "Não, a ordem é definida pela PRIMEIRA vez que os nomes das camadas aparecem no sistema.",
        "Apenas se usares o seletor !important.",
        "Sim, mas apenas em ficheiros CSS diferentes."
      ],
      correctAnswer: 1,
      explanation: "A ordem de precedência das camadas é imutável após a primeira declaração/aparição dos seus nomes."
    },
    {
      id: "q2_6",
      question: "Qual o efeito do !important dentro de uma camada?",
      options: [
        "Ele inverte a lógica da cascata: o !important numa camada de baixa prioridade vence o !important numa de alta.",
        "Ele funciona normalmente, dando prioridade à camada mais forte.",
        "Ele é ignorado pelo browser dentro de blocos @layer.",
        "Ele torna a camada imutável."
      ],
      correctAnswer: 0,
      explanation: "Esta é uma nuance técnica: o !important inverte a ordem das camadas para aquele seletor específico, tornando a manutenção ainda mais complexa. Evite!"
    }
  ]
};
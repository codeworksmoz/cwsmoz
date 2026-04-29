import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "web-t11-quiz",
  title: "Quiz: Acessibilidade e Padrões ARIA",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual é a primeira regra oficial do uso de ARIA no desenvolvimento Web?",
      options: [
        "Usar ARIA em todas as tags para garantir segurança",
        "Se existir uma tag HTML nativa para a função, use-a em vez de ARIA",
        "Sempre usar role='button' em todas as divs clicáveis",
        "O ARIA deve substituir as classes CSS"
      ],
      correctAnswer: 1,
      explanation: "Tags nativas (<button>, <nav>, <header>) já possuem acessibilidade embutida por padrão nos browsers. ARIA serve para preencher lacunas, não para substituir o básico."
    },
    {
      id: "q2",
      question: "Para que serve o atributo 'aria-label'?",
      options: [
        "Para mudar o título que aparece na aba do browser",
        "Para fornecer uma descrição em texto para elementos que não possuem texto visível (ex: botões de ícone)",
        "Para traduzir o site automaticamente",
        "Para aumentar o tamanho da fonte"
      ],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "O que o atributo 'tabindex=\"-1\"' faz num elemento?",
      options: [
        "Coloca o elemento como o primeiro da lista de foco",
        "Remove o elemento da navegação sequencial do teclado (Tab), mas permite foco via JavaScript",
        "Apaga o elemento do DOM",
        "Torna o elemento invisível"
      ],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "Qual o rácio de contraste mínimo recomendado pelo WCAG 2.1 (Nível AA) para texto normal?",
      options: ["2.0:1", "3.0:1", "4.5:1", "7.0:1"],
      correctAnswer: 2,
      explanation: "O rácio 4.5:1 garante que a maioria dos utilizadores consiga ler o texto contra o fundo com clareza."
    },
    {
      id: "q5",
      question: "Qual o objetivo de usar 'aria-expanded=\"true\"'?",
      options: [
        "Aumentar o tamanho de uma imagem",
        "Comunicar a utilizadores de leitores de ecrã que um menu ou secção está atualmente aberta/expandida",
        "Fazer o site ocupar o ecrã inteiro",
        "Ativar o modo de ecrã panorâmico"
      ],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "Por que se deve evitar o uso de 'role=\"presentation\"' ou 'role=\"none\"' em elementos importantes?",
      options: [
        "Porque apaga os estilos CSS",
        "Porque remove todo o significado semântico do elemento para tecnologias assistivas, tornando-o 'invisível' para elas",
        "Porque torna o site mais lento",
        "Porque o Google penaliza sites com muitos papéis"
      ],
      correctAnswer: 1
    }
  ]
};

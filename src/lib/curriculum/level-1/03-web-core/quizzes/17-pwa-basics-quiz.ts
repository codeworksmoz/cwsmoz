import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "web-q17",
  title: "Quiz: Fundamentos de PWA",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual o papel principal do Service Worker numa PWA?",
      options: [
        "Mudar o estilo CSS",
        "Funcionar como um proxy de rede e permitir cache offline",
        "Aumentar a resolução das fotos",
        "Enviar mensagens de chat"
      ],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "Qual ficheiro define o ícone e o nome do site quando instalado no telemóvel?",
      options: ["index.html", "style.css", "manifest.json", "config.xml"],
      correctAnswer: 2
    },
    {
      id: "q3",
      question: "Para uma PWA ser considerada instalável, qual requisito de segurança é obrigatório?",
      options: [
        "Ter um domínio .com",
        "Estar a correr sobre HTTPS",
        "Não ter imagens pesadas",
        "Ter pelo menos 10 páginas"
      ],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "O que o modo 'standalone' no manifest.json faz?",
      options: [
        "Abre o site num separador novo",
        "Remove a interface do browser (barra de endereços), parecendo uma app nativa",
        "Torna o site a preto e branco",
        "Impede o scroll da página"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Um Service Worker tem acesso direto ao DOM (HTML)?",
      options: [
        "Sim, total acesso",
        "Não, ele corre numa thread separada e comunica via mensagens",
        "Apenas no browser Chrome",
        "Sim, mas apenas em modo de leitura"
      ],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "Qual a principal vantagem de uma PWA em relação a uma App Nativa?",
      options: [
        "É mais cara de produzir",
        "Não precisa de ser descarregada da App Store e funciona em qualquer browser moderno",
        "Usa mais memória RAM",
        "Funciona apenas em computadores"
      ],
      correctAnswer: 1
    }
  ]
};

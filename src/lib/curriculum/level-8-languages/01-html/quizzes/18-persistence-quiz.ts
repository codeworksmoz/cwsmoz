import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "html-mq18",
  title: "Quiz: Persistência de Dados e Web Storage",
  passingScore: 80,
  questions: [
    {
      id: "q18_1",
      question: "Qual a principal diferença entre LocalStorage e SessionStorage?",
      options: [
        "LocalStorage é mais rápido.",
        "LocalStorage persiste após o fecho da aba; SessionStorage é limpo ao fechar a sessão.",
        "SessionStorage permite guardar ficheiros binários.",
        "LocalStorage é acessível apenas via HTTPS."
      ],
      correctAnswer: 1
    },
    {
      id: "q18_2",
      question: "Para que serve a Cache API no contexto de um Service Worker?",
      options: [
        "Para guardar a senha do utilizador.",
        "Para armazenar recursos de rede (HTML/CSS/JS) e permitir funcionamento offline.",
        "Para acelerar o processamento de loops JavaScript.",
        "Para limpar o histórico do navegador automaticamente."
      ],
      correctAnswer: 1
    },
    {
      id: "q18_3",
      question: "Qual estrutura de armazenamento é recomendada para guardar Gigabytes de dados complexos com suporte a índices?",
      options: [
        "Cookies",
        "LocalStorage",
        "IndexedDB",
        "SessionStorage"
      ],
      correctAnswer: 2
    },
    {
      id: "q18_4",
      question: "As operações no LocalStorage são Síncronas ou Assíncronas?",
      options: [
        "Síncronas (bloqueiam a thread principal).",
        "Assíncronas (usam Promises).",
        "Depende do tamanho do dado.",
        "Apenas em servidores Node.js."
      ],
      correctAnswer: 0,
      explanation: "LocalStorage é síncrono. Se guardares ou leres dados massivos nele, podes causar 'jank' na interface."
    },
    {
      id: "q18_5",
      question: "O que acontece se o utilizador navegar em 'Modo Incógnito'?",
      options: [
        "O Web Storage é desativado.",
        "O armazenamento é volátil e limpo assim que a janela privada é fechada.",
        "Os dados são gravados permanentemente mas escondidos.",
        "O browser usa uma base de dados na nuvem."
      ],
      correctAnswer: 1
    },
    {
      id: "q18_6",
      question: "O que o método navigator.storage.persist() tenta garantir?",
      options: [
        "Que o utilizador não apague o histórico.",
        "Que o browser não apague os dados da aplicação automaticamente para libertar espaço em disco.",
        "Que a internet nunca caia.",
        "Que o site seja traduzido para todos os idiomas."
      ],
      correctAnswer: 1
    }
  ]
};
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "html-mq21",
  title: "Quiz Final: Segurança e Auditoria de Dados",
  passingScore: 85,
  questions: [
    {
      id: "q21_1",
      question: "Qual flag de cookie garante que este não seja acessível via JavaScript (prevenindo roubo por XSS)?",
      options: [
        "Secure",
        "HttpOnly",
        "SameSite",
        "Path=/"
      ],
      correctAnswer: 1,
      explanation: "A flag HttpOnly instrui o browser a não permitir o acesso ao cookie através da API document.cookie."
    },
    {
      id: "q21_2",
      question: "Para que serve o atributo 'SameSite=Strict'?",
      options: [
        "Para acelerar o carregamento do site",
        "Para impedir que o cookie seja enviado em pedidos vindos de domínios externos (proteção CSRF)",
        "Para que o site funcione apenas no Google Chrome",
        "Para criptografar o conteúdo do cookie"
      ],
      correctAnswer: 1
    },
    {
      id: "q21_3",
      question: "No contexto de aplicações modernas, onde deves guardar preferencialmente o Token de Sessão (JWT)?",
      options: [
        "LocalStorage (mais fácil de aceder)",
        "Variável global de JavaScript",
        "Cookie com flag HttpOnly e Secure",
        "URL via Query Params"
      ],
      correctAnswer: 2,
      explanation: "Guardar em cookies seguros (HttpOnly) é o padrão de segurança para mitigar ataques de injeção de script."
    },
    {
      id: "q21_4",
      question: "O que o atributo 'Partitioned' num cookie (CHIPS) resolve?",
      options: [
        "Reduz o tamanho do cookie",
        "Permite o uso de cookies de terceiros em frames de forma privada e isolada por site",
        "Apaga o cookie após 5 minutos",
        "Divide o cookie em dois servidores diferentes"
      ],
      correctAnswer: 1
    },
    {
      id: "q21_5",
      question: "Se o seu site está em HTTP (sem S), a flag 'Secure' terá qual efeito?",
      options: [
        "Nenhum, o site continua inseguro",
        "O cookie não será enviado nem guardado pelo browser (exige HTTPS)",
        "O browser cria um túnel seguro automático",
        "O site muda para HTTPS sozinho"
      ],
      correctAnswer: 1
    },
    {
      id: "q21_6",
      question: "Qual técnica é usada para garantir que o browser não descarte os dados do IndexedDB quando o disco estiver quase cheio?",
      options: [
        "Aumentar a memória RAM",
        "Solicitar Persistência Durável via navigator.storage.persist()",
        "Usar apenas cookies",
        "Não é possível garantir a persistência"
      ],
      correctAnswer: 1
    }
  ]
};

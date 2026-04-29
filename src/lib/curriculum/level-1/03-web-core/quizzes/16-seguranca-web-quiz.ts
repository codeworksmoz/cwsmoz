import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "web-q16",
  title: "Quiz: Segurança Web e CSP",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "O que o 'S' em HTTPS garante?",
      options: [
        "O site é mais rápido",
        "A conexão é encriptada via TLS/SSL",
        "O site é compatível com telemóveis",
        "As imagens são comprimidas"
      ],
      correctAnswer: 1,
      explanation: "O HTTPS utiliza o protocolo TLS para garantir que os dados viajam num túnel seguro e ilegível para atacantes."
    },
    {
      id: "q2",
      question: "Qual o principal objetivo de uma Content Security Policy (CSP)?",
      options: [
        "Mudar o tema do site",
        "Controlar quais recursos o browser tem permissão para carregar, prevenindo ataques XSS",
        "Aumentar o ranking no Google",
        "Reduzir o consumo de bateria"
      ],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "O que é um ataque de XSS (Cross-Site Scripting)?",
      options: [
        "Um ataque que desliga o servidor",
        "A injeção de scripts maliciosos num site legítimo para roubar dados de utilizadores",
        "O envio de muitos emails de spam",
        "Um erro de CSS que desalinha a página"
      ],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "Na diretiva CSP 'default-src 'self'', o que significa o valor 'self'?",
      options: [
        "Permite recursos de qualquer lugar",
        "Permite carregar recursos apenas do próprio domínio do site",
        "Bloqueia todos os recursos",
        "Permite apenas imagens"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Por que não se deve usar inline scripts (códigos JS dentro do HTML) em sites seguros?",
      options: [
        "Porque o ficheiro fica maior",
        "Porque facilitam a vida a atacantes que queiram injetar código malicioso",
        "Porque o browser não os executa mais",
        "Não existe problema em usar"
      ],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "Qual protocolo é o sucessor do SSL e é usado no HTTPS moderno?",
      options: ["HTTP/2", "TLS", "UDP", "FTP"],
      correctAnswer: 1
    }
  ]
};

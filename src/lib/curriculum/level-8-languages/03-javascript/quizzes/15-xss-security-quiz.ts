import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "js-mq15",
  title: "Quiz: Segurança e XSS de Elite",
  passingScore: 85,
  questions: [
    {
      id: "q15_1",
      question: "Qual o principal perigo de usar 'innerHTML' com dados vindos do utilizador?",
      options: [
        "O site carrega mais devagar.",
        "Permite a execução de scripts maliciosos injetados (XSS).",
        "Muda a cor do texto para vermelho.",
        "O computador do utilizador aquece."
      ],
      correctAnswer: 1
    },
    {
      id: "q15_2",
      question: "O que o atributo 'nonce' numa tag script resolve?",
      options: [
        "Acelera o download do script.",
        "Garante que apenas scripts autorizados e assinados pelo servidor sejam executados pela CSP.",
        "Reduz o uso de memória RAM.",
        "Muda o nome das variáveis."
      ],
      correctAnswer: 1
    },
    {
      id: "q15_3",
      question: "Qual a função primária da Sanitizer API?",
      options: [
        "Remover comentários do código.",
        "Limpar strings HTML de tags e atributos perigosos de forma nativa e segura.",
        "Criptografar o banco de dados.",
        "Comprimir imagens."
      ],
      correctAnswer: 1
    },
    {
      id: "q15_4",
      question: "Trusted Types impedem o quê especificamente?",
      options: [
        "O uso de loops for.",
        "A passagem de strings inseguras (não validadas) para APIs perigosas como innerHTML.",
        "O acesso à internet sem HTTPS.",
        "O uso de cookies."
      ],
      correctAnswer: 1
    },
    {
      id: "q15_5",
      question: "Qual técnica é recomendada para mostrar texto puro sem risco de injeção?",
      options: ["innerHTML", "insertAdjacentHTML", "textContent", "write()"],
      correctAnswer: 2
    },
    {
      id: "q15_6",
      question: "O que o motor do browser faz ao encontrar uma violação de CSP?",
      options: [
        "Ignora e continua a execução.",
        "Bloqueia o carregamento do recurso e reporta o erro na consola e via reporte de endpoint.",
        "Apaga o histórico do utilizador.",
        "Reinicia o servidor."
      ],
      correctAnswer: 1
    }
  ]
};

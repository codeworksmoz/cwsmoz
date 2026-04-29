import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "web-q14",
  title: "Quiz: Protocolo HTTP e Comunicação Web",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "O que significa a sigla HTTP?",
      options: [
        "High Text Transfer Process",
        "HyperText Transfer Protocol",
        "Hybrid Type Transfer Program",
        "Hard Target Transfer Protocol"
      ],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "Qual método HTTP é mais seguro para enviar uma senha de login?",
      options: ["GET", "PUT", "POST", "DELETE"],
      correctAnswer: 2,
      explanation: "O método POST envia os dados no corpo da mensagem, não na URL, o que é fundamental para segurança e privacidade."
    },
    {
      id: "q3",
      question: "O código de estado '404' indica o quê?",
      options: [
        "Sucesso ao carregar a página",
        "O servidor está desligado",
        "O recurso solicitado não foi encontrado",
        "O utilizador não tem permissão"
      ],
      correctAnswer: 2
    },
    {
      id: "q4",
      question: "Qual a função do Certificado SSL/TLS no HTTPS?",
      options: [
        "Aumentar o brilho do monitor",
        "Encriptar a comunicação entre o cliente e o servidor",
        "Mudar o nome do domínio",
        "Fazer o site carregar em 1 segundo"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Um código de estado da família '5xx' (ex: 500, 502) refere-se a erros de quem?",
      options: ["Do utilizador", "Da internet", "Do servidor", "Do browser"],
      correctAnswer: 2,
      explanation: "Erros 500 indicam que o servidor encontrou uma situação inesperada que o impediu de completar o pedido."
    },
    {
      id: "q6",
      question: "O que são 'HTTP Headers'?",
      options: [
        "Títulos gigantes no topo do site",
        "Metadados enviados no pedido e na resposta com informações extras (ex: tipo de ficheiro, cookies)",
        "Erros de ligação",
        "O nome do computador do utilizador"
      ],
      correctAnswer: 1
    }
  ]
};

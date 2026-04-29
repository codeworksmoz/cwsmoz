import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "dt-q8",
  title: "Quiz: API Testing e Postman",
  passingScore: 70,
  questions: [
    {
      id: "q8_1",
      question: "O que representa o Status Code 201?",
      options: ["Erro interno", "Página não encontrada", "Recurso criado com sucesso", "Redireccionamento"],
      correctAnswer: 2
    },
    {
      id: "q8_2",
      question: "Onde se coloca o Token de Autenticação (Bearer) num pedido profissional?",
      options: ["Na URL", "Nos Headers (Authorization)", "No corpo da mensagem", "No título do site"],
      correctAnswer: 1
    },
    {
      id: "q8_3",
      question: "Qual o benefício de usar Variáveis de Ambiente no Postman?",
      options: ["Tornar o app mais rápido", "Alternar entre Localhost e Produção sem mudar as URLs manualmente", "Criptografar o código", "Aumentar o brilho do monitor"],
      correctAnswer: 1
    },
    {
      id: "q8_4",
      question: "O que é um 'Payload'?",
      options: ["O tempo de resposta", "O dado real (JSON) enviado no corpo do pedido", "O endereço IP do servidor", "O nome do browser"],
      correctAnswer: 1
    },
    {
      id: "q8_5",
      question: "Qual método HTTP deves usar para atualizar parcialmente um recurso?",
      options: ["GET", "POST", "PATCH", "HEAD"],
      correctAnswer: 2
    },
    {
      id: "q8_6",
      question: "Para que serve a aba 'Tests' no Postman?",
      options: ["Para escrever comentários", "Para escrever scripts JS que validam a resposta do servidor automaticamente", "Para desativar a internet", "Para mudar a password"],
      correctAnswer: 1
    }
  ]
};
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "net-mq10",
  title: "Quiz: HTTP Semantics Master",
  passingScore: 80,
  questions: [
    {
      id: "q10_1",
      question: "O que significa um método ser 'Idempotente'?",
      options: [
        "Ele é muito rápido",
        "Múltiplas execuções idênticas resultam no mesmo estado final do servidor",
        "Ele não pode ser cancelado",
        "Só funciona via HTTPS"
      ],
      correctAnswer: 1
    },
    {
      id: "q10_2",
      question: "Qual método HTTP deve ser usado para ATUALIZAR parcialmente um recurso?",
      options: ["PUT", "PATCH", "POST", "UPDATE"],
      correctAnswer: 1,
      explanation: "PUT substitui o recurso inteiro; PATCH aplica modificações parciais."
    },
    {
      id: "q10_3",
      question: "O Status Code 429 indica qual problema?",
      options: [
        "Erro de servidor",
        "Too Many Requests (Rate Limiting)",
        "Página movida",
        "Não autorizado"
      ],
      correctAnswer: 1
    },
    {
      id: "q10_4",
      question: "Para que serve o cabeçalho 'ETag'?",
      options: [
        "Para mudar o título do site",
        "Para validação de cache baseada na versão do conteúdo",
        "Para encriptar a senha",
        "Para contar cliques"
      ],
      correctAnswer: 1
    },
    {
      id: "q10_5",
      question: "No HTTP/1.1, por que usamos múltiplas conexões para o mesmo domínio?",
      options: [
        "Para ser mais seguro",
        "Para contornar o bloqueio de cabeça de linha (HOL) enviando ficheiros em paralelo",
        "Porque o browser exige",
        "Para aumentar o brilho"
      ],
      correctAnswer: 1
    },
    {
      id: "q10_6",
      question: "O método HEAD retorna o quê?",
      options: [
        "O corpo do site",
        "Apenas os cabeçalhos da resposta, sem o corpo",
        "Uma lista de erros",
        "O nome do servidor"
      ],
      correctAnswer: 1
    }
  ]
};

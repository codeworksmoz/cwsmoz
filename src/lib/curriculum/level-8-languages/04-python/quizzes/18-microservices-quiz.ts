import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "py-mq18",
  title: "Quiz: Microserviços e gRPC",
  passingScore: 80,
  questions: [
    {
      id: "q18_1",
      question: "Qual o benefício técnico do gRPC sobre o REST/JSON tradicional?",
      options: [
        "Usa XML para maior compatibilidade",
        "Utiliza HTTP/2 e Protocol Buffers para menor latência e payloads binários reduzidos",
        "É mais fácil de ler para humanos",
        "Não necessita de autenticação"
      ],
      correctAnswer: 1
    },
    {
      id: "q18_2",
      question: "No padrão 'Saga', como se resolve uma falha numa transação distribuída?",
      options: [
        "Reiniciando todos os servidores",
        "Através de transações compensatórias que revertem as ações anteriores",
        "Aumentando o timeout da rede",
        "Ignorando o erro e seguindo em frente"
      ],
      correctAnswer: 1
    }
  ]
};
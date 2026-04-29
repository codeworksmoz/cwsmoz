import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-eco-mq7",
  title: "Quiz Master: CQRS e Event Sourcing",
  passingScore: 85,
  questions: [
    {
      id: "q7_1",
      question: "Qual o benefício arquitetural primário do Event Sourcing em relação ao armazenamento de estado tradicional?",
      options: [
        "O banco de dados fica mais pequeno.",
        "Possui um rasto de auditoria completo e imutável por design, permitindo reconstruir o estado em qualquer ponto do tempo.",
        "Elimina a necessidade de usar SQL.",
        "Torna as queries de busca mais rápidas nativamente."
      ],
      correctAnswer: 1,
      explanation: "No Event Sourcing, os eventos são a fonte da verdade. Isto permite auditoria total e a capacidade de 're-build' de modelos de leitura a qualquer momento."
    },
    {
      id: "q7_2",
      question: "No padrão CQRS, o que caracteriza o 'Read Model'?",
      options: [
        "A aplicação de regras de negócio complexas.",
        "Dados otimizados e desnormalizados para visualização rápida na interface.",
        "O local onde as validações de integridade ocorrem.",
        "O rasto binário de logs do servidor."
      ],
      correctAnswer: 1,
      explanation: "O Read Model existe para servir a UI. Ele deve ser o mais simples possível, evitando JOINS e processamento pesado no momento da consulta."
    },
    {
      id: "q7_3",
      question: "O que é uma 'Projection' (Projeção) técnica?",
      options: [
        "Um gráfico gerado pelo sistema.",
        "Um processo que consome o stream de eventos para atualizar um banco de dados de leitura.",
        "Uma técnica de encriptação de dados.",
        "O ato de prever falhas no servidor."
      ],
      correctAnswer: 1
    },
    {
      id: "q7_4",
      question: "Por que se utiliza a técnica de 'Snapshot' em sistemas de Event Sourcing?",
      options: [
        "Para tirar fotos dos utilizadores.",
        "Para evitar o custo de processar milhares de eventos ao reconstruir o estado de um agregado.",
        "Para fazer o backup do servidor.",
        "Para reduzir o uso de CPU no carregamento do CSS."
      ],
      correctAnswer: 1,
      explanation: "O Snapshot guarda o estado calculado até certo ponto, permitindo que a reconstrução recomece daquele ponto em vez do início dos tempos."
    },
    {
      id: "q7_5",
      question: "O que é a 'Consistência Eventual' neste contexto?",
      options: [
        "Um erro que deve ser evitado a todo o custo.",
        "O intervalo de tempo entre a gravação do comando e a atualização da projeção no banco de leitura.",
        "Quando o sistema nunca chega a um estado válido.",
        "A garantia de que o banco de dados nunca falha."
      ],
      correctAnswer: 1
    },
    {
      id: "q7_6",
      question: "Qual o maior desafio de implementar CQRS e Event Sourcing?",
      options: [
        "O código fica demasiado curto.",
        "O aumento da complexidade operacional e a mudança de mentalidade para lidar com consistência eventual.",
        "A impossibilidade de usar PHP 8.",
        "O custo de licenças de software."
      ],
      correctAnswer: 1
    }
  ]
};

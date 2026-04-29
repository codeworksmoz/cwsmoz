import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "py-mq17",
  title: "Quiz: Profiling e Benchmarking",
  passingScore: 80,
  questions: [
    {
      id: "q17_1",
      question: "Qual a principal limitação do cProfile para monitorizar sistemas em produção?",
      options: [
        "Não suporta Python 3",
        "Introduz um overhead significativo (degradação de performance) durante a medição",
        "Não gera gráficos",
        "Funciona apenas em Windows"
      ],
      correctAnswer: 1
    },
    {
      id: "q17_2",
      question: "O que caracteriza um 'Flame Graph' na análise de performance?",
      options: [
        "Uma lista de erros de compilação",
        "Uma visualização hierárquica que mostra o tempo gasto em cada stack de chamadas",
        "Um gráfico de temperatura do processador",
        "O log de acessos ao banco de dados"
      ],
      correctAnswer: 1
    }
  ]
};
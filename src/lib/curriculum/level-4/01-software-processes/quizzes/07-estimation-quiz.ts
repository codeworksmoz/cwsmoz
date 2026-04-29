import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q7-master",
  title: "Quiz: Estimativa Relativa e Planeamento Ágil",
  passingScore: 80,
  questions: [
    {
      id: "q7_1",
      question: "Qual a principal vantagem de estimar em Story Points em vez de Horas?",
      options: [
        "Permite cobrar mais caro ao cliente.",
        "Os pontos são imutáveis perante a experiência do desenvolvedor, focando no tamanho da tarefa.",
        "Facilita o microgerenciamento por parte do Scrum Master.",
        "Elimina a necessidade de fazer testes automatizados."
      ],
      correctAnswer: 1,
      explanation: "Horas são subjetivas. Um Sénior faz em 2h o que um Júnior faz em 8h, mas o esforço/tamanho da tarefa (Story Points) permanece o mesmo para ambos."
    },
    {
      id: "q7_2",
      question: "Por que a sequência de Fibonacci é preferida para estimativas?",
      options: [
        "Porque é uma sequência mágica na natureza.",
        "Para refletir que a incerteza aumenta proporcionalmente ao tamanho da tarefa.",
        "Porque o Python processa Fibonacci mais rápido.",
        "Para garantir que todas as tarefas tenham pesos ímpares."
      ],
      correctAnswer: 1,
      explanation: "A diferença crescente entre 5, 8 e 13 desencoraja debates inúteis sobre pequenas variações em tarefas grandes onde a incerteza é inerente."
    },
    {
      id: "q7_3",
      question: "No Planning Poker, o que deve ser feito quando há uma divergência extrema de votos (ex: 2 e 13)?",
      options: [
        "Fazer a média aritmética dos votos.",
        "O Product Owner escolhe o valor mais baixo para poupar dinheiro.",
        "Os dois votantes explicam os seus pontos de vista para expor riscos ou simplificações ocultas.",
        "O voto da maioria ganha automaticamente."
      ],
      correctAnswer: 2,
      explanation: "A divergência indica falta de alinhamento técnico ou conhecimento de um risco que a equipa ainda não percebeu."
    },
    {
      id: "q7_4",
      question: "O que compõe o 'Triângulo do Esforço' na definição de um Story Point?",
      options: [
        "Tempo, Custo e Qualidade.",
        "Complexidade, Volume de trabalho e Risco/Incerteza.",
        "Frontend, Backend e Base de Dados.",
        "Design, Código e Deploy."
      ],
      correctAnswer: 1,
      explanation: "Estimar pontos exige olhar para a dificuldade lógica, a quantidade de trabalho repetitivo e o quão desconhecido é o desafio."
    },
    {
      id: "q7_5",
      question: "Como o Product Owner deve utilizar a 'Velocidade' (Velocity) da equipa?",
      options: [
        "Para punir desenvolvedores que entregam menos pontos.",
        "Para realizar o planeamento de longo prazo (Release Planning) baseado na capacidade real comprovada.",
        "Para comparar o desempenho entre diferentes equipas da empresa.",
        "Para forçar o aumento do limite de WIP."
      ],
      correctAnswer: 1,
      explanation: "A velocidade é uma métrica de capacidade histórica, usada para prever quantas Sprints serão necessárias para esvaziar o backlog."
    },
    {
      id: "q7_6",
      question: "Uma história de 8 pontos que não foi concluída ('Done') no final da Sprint deve ser contada como quantos pontos na velocidade daquela Sprint?",
      options: [
        "4 pontos (proporcional ao que foi feito).",
        "8 pontos (pela intenção de entrega).",
        "0 pontos (apenas o que está 100% 'Done' conta para a velocidade).",
        "O Scrum Master decide baseado no esforço gasto."
      ],
      correctAnswer: 2,
      explanation: "No Scrum, a velocidade mede apenas o valor entregue. Itens incompletos não geram valor para o utilizador final, logo não contam para a métrica de progresso."
    }
  ]
};

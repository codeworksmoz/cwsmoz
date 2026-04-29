import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q3-master",
  title: "Quiz: Scrum e Gestão de Incrementos",
  passingScore: 85,
  questions: [
    {
      id: "q3_1",
      question: "Qual papel é responsável por remover impedimentos que bloqueiam o progresso da equipa?",
      options: [
        "Product Owner",
        "Stakeholders",
        "Scrum Master",
        "Gestor de Projetos"
      ],
      correctAnswer: 2,
      explanation: "O Scrum Master serve a equipa removendo obstáculos e facilitando a colaboração técnica e interpessoal."
    },
    {
      id: "q3_2",
      question: "O que deve acontecer com um item do Sprint Backlog que não foi concluído até ao final da Sprint?",
      options: [
        "Deve ser demonstrado na Sprint Review como 'em progresso'",
        "Deve ser movido automaticamente para a próxima Sprint",
        "Deve voltar ao Product Backlog para que o Product Owner o re-priorize",
        "Deve ser descartado"
      ],
      correctAnswer: 2,
      explanation: "No Scrum, apenas incrementos que cumprem a Definition of Done são mostrados. Itens incompletos voltam ao backlog principal."
    },
    {
      id: "q3_3",
      question: "Quem tem a palavra final sobre a ordem de importância dos itens no Product Backlog?",
      options: [
        "O Cliente",
        "O Scrum Master",
        "Os Developers",
        "O Product Owner"
      ],
      correctAnswer: 3,
      explanation: "O Product Owner é o único ponto de autoridade para o backlog, garantindo que a equipa foca no que gera mais valor de negócio."
    },
    {
      id: "q3_4",
      question: "Qual o objetivo técnico da 'Definition of Done' (DoD)?",
      options: [
        "Ser uma lista de desejos do cliente",
        "Garantir a transparência sobre os critérios de qualidade e o estado de 'concluído' do incremento",
        "Substituir a necessidade de testes manuais",
        "Medir o desempenho individual de cada programador"
      ],
      correctAnswer: 1,
      explanation: "A DoD é o padrão de qualidade comum que permite que todos entendam quando o trabalho é realmente utilizável e seguro."
    },
    {
      id: "q3_5",
      question: "Durante a Sprint, quem é responsável por gerir o progresso e o plano de trabalho diário?",
      options: [
        "O Product Owner",
        "Os Developers",
        "O Scrum Master",
        "A gerência externa"
      ],
      correctAnswer: 1,
      explanation: "Os Developers são auto-geridos. Eles decidem como transformar o Sprint Backlog em um incremento de valor."
    },
    {
      id: "q3_6",
      question: "Qual evento do Scrum foca especificamente em melhorar o PROCESSO e as relações humanas da equipa?",
      options: [
        "Sprint Planning",
        "Sprint Review",
        "Sprint Retrospective",
        "Daily Scrum"
      ],
      correctAnswer: 2,
      explanation: "A Retrospectiva é o momento de inspeção e adaptação da própria equipa e do seu fluxo de trabalho."
    }
  ]
};

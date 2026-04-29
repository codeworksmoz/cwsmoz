import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q6-master",
  title: "Quiz: Engenharia de User Stories e INVEST",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "No acrónimo INVEST, o que representa a letra 'I' e por que ela é importante para a agilidade?",
      options: [
        "Inovadora: a história deve propor algo que ainda não existe no mercado.",
        "Independente: permite que o Product Owner ordene o backlog livremente sem causar bloqueios técnicos em cascata.",
        "Incremental: a história deve ser escrita apenas após o código base estar pronto.",
        "Imutável: uma vez no Sprint, a história não pode ser alterada em hipótese alguma."
      ],
      correctAnswer: 1,
      explanation: "A independência entre histórias garante flexibilidade no planeamento e evita que o progresso de um item trave todos os outros do Sprint."
    },
    {
      id: "q2",
      question: "Um Product Owner traz uma história: 'Como desenvolvedor, eu quero otimizar o índice da base de dados para melhorar a performance'. Qual critério INVEST esta história viola prioritariamente?",
      options: [
        "Small: otimização de banco é sempre uma tarefa grande.",
        "Valuable: a história deve focar no valor entregue ao utilizador final ou negócio, não na tarefa técnica isolada.",
        "Testable: performance de banco de dados não pode ser testada.",
        "Estimable: apenas o DBA consegue estimar esta tarefa."
      ],
      correctAnswer: 1,
      explanation: "User Stories devem expressar valor para o stakeholder. A forma master seria: 'Como utilizador, quero que o meu extrato carregue em menos de 2s para poupar tempo'."
    },
    {
      id: "q3",
      question: "O que caracteriza a fase de 'Conversation' nos 3 C's de uma User Story?",
      options: [
        "O momento em que o cliente dita o que quer e o programador apenas anota.",
        "O diálogo entre a equipa e o PO para refinar o entendimento, discutir riscos e negociar a implementação.",
        "Uma reunião de 4 horas para escrever a documentação completa do sistema.",
        "A gravação de áudio do cliente explicando o problema."
      ],
      correctAnswer: 1,
      explanation: "A conversa é o pilar da agilidade; o cartão é apenas um lembrete para que esse diálogo aconteça."
    },
    {
      id: "q4",
      question: "Qual o objetivo principal dos 'Critérios de Aceitação' (Confirmation) numa história?",
      options: [
        "Definir o bónus financeiro do programador.",
        "Estabelecer os limites do que será construído e como a história será validada para ser considerada 'Done'.",
        "Substituir o manual de utilizador final.",
        "Listar todas as variáveis que serão criadas no código."
      ],
      correctAnswer: 1,
      explanation: "Os critérios de aceitação alinham a expectativa entre o PO e a equipa, servindo de base para os testes de aceitação."
    },
    {
      id: "q5",
      question: "Por que uma história deve ser 'Small' (Pequena) segundo o INVEST?",
      options: [
        "Para que o programador consiga terminar em menos de 1 hora.",
        "Para reduzir a incerteza e garantir que o item seja concluído dentro do horizonte de tempo de um único Sprint.",
        "Porque o Jira não aceita textos longos.",
        "Para que o cliente não perceba a complexidade do que está a ser feito."
      ],
      correctAnswer: 1,
      explanation: "Histórias pequenas têm menor risco, são mais fáceis de estimar e permitem um fluxo de entrega mais rápido e constante."
    },
    {
      id: "q6",
      question: "A técnica 'Given-When-Then' é utilizada para:",
      options: [
        "Estimar o número de Story Points.",
        "Escrever Critérios de Aceitação claros e testáveis baseados no comportamento do utilizador.",
        "Calcular o ROI do projeto.",
        "Definir a hierarquia de classes no sistema."
      ],
      correctAnswer: 1,
      explanation: "Este formato (BDD) descreve o contexto (Given), a ação (When) e o resultado esperado (Then), facilitando a criação de testes automatizados."
    }
  ]
};

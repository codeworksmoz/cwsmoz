import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "html-mq8",
  title: "Quiz: Performance e Resource Hints",
  passingScore: 80,
  questions: [
    {
      id: "q8_1",
      question: "Qual instrução resolve o DNS e estabelece a conexão TCP/TLS antecipadamente?",
      options: ["dns-prefetch", "preconnect", "preload", "prefetch"],
      correctAnswer: 1
    },
    {
      id: "q8_2",
      question: "O que o atributo 'async' faz numa tag <script>?",
      options: [
        "Para o download do HTML até o script carregar",
        "Descarrega o script em paralelo e executa-o assim que estiver pronto, sem respeitar a ordem do documento",
        "Executa o script apenas após o DOM estar completo",
        "Comprime o ficheiro automaticamente"
      ],
      correctAnswer: 1
    }
  ]
};

import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-eco-mq13",
  title: "Quiz Master: Internals do Symfony",
  passingScore: 85,
  questions: [
    {
      id: "q1",
      question: "Qual componente do Symfony é responsável pelo ciclo de vida do Request?",
      options: ["Console", "DependencyInjection", "HttpKernel", "Form"],
      correctAnswer: 2
    },
    {
      id: "q2",
      question: "Qual evento do Kernel é disparado quando ocorre um erro não capturado no Controller?",
      options: ["kernel.terminate", "kernel.exception", "kernel.error", "kernel.finish_request"],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "O que o 'ControllerResolver' faz no Symfony?",
      options: ["Ligar à base de dados.", "Identificar qual classe e método devem processar o Request atual baseado na rota.", "Gerar o CSS da página.", "Validar o token JWT."],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "O Symfony foca na imutabilidade das mensagens HTTP através de qual padrão?",
      options: ["PSR-4", "PSR-7", "PSR-11", "Não utiliza PSRs."],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "O que permite injetar argumentos dinâmicos no método do Controller?",
      options: ["Configuração manual no YAML.", "ArgumentResolver utilizando Reflection.", "Variáveis globais do PHP.", "O motor de templates Twig."],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "Qual o evento final que permite realizar tarefas pesadas após a resposta ser enviada ao cliente?",
      options: ["kernel.response", "kernel.view", "kernel.terminate", "kernel.request"],
      correctAnswer: 2,
      explanation: "O evento terminate é ideal para fechar logs ou enviar emails sem fazer o utilizador esperar."
    }
  ]
};

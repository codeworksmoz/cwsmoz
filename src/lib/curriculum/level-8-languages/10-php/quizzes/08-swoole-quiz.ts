import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq8",
  title: "Quiz Master: Swoole e Sistemas de Alta Disponibilidade",
  passingScore: 85,
  questions: [
    {
      id: "q8_1",
      question: "Qual a diferença fundamental entre o ciclo de vida de uma aplicação no Swoole e no PHP-FPM?",
      options: [
        "O Swoole é interpretado e o FPM é compilado.",
        "O FPM limpa todo o estado em cada request; o Swoole mantém a aplicação residente na memória RAM.",
        "O Swoole só funciona com servidores Apache.",
        "O FPM suporta corrotinas e o Swoole não."
      ],
      correctAnswer: 1,
      explanation: "A residência em memória elimina o custo de bootstrapping e permite o uso de pools de conexão persistentes."
    },
    {
      id: "q8_2",
      question: "O que acontece tecnicamente quando uma Coroutine faz uma operação de I/O bloqueante (ex: query ao banco)?",
      options: [
        "Todo o processo do servidor trava até a resposta chegar.",
        "O Swoole suspende apenas aquela coroutine e utiliza o Event Loop para processar outros pedidos simultaneamente.",
        "O sistema operativo cria uma nova thread pesada.",
        "O PHP lança um erro de timeout imediato."
      ],
      correctAnswer: 1,
      explanation: "Este é o conceito de I/O não-bloqueante (Asynchronous I/O) que permite alta concorrência com baixo consumo de recursos."
    },
    {
      id: "q8_3",
      question: "Qual o papel do 'Manager Process' na arquitetura do Swoole?",
      options: [
        "Executar o código PHP do utilizador.",
        "Gerir o ciclo de vida dos Worker Processes, reiniciando-os em caso de falha.",
        "Descarregar as imagens do servidor.",
        "Criptografar as conexões SSL."
      ],
      correctAnswer: 1
    },
    {
      id: "q8_4",
      question: "Por que as variáveis globais (ex: static) são perigosas em ambientes Swoole?",
      options: [
        "Porque elas ocupam demasiado espaço.",
        "Porque o seu valor persiste entre diferentes pedidos e utilizadores, podendo causar vazamento de dados ou corrupção de estado.",
        "Porque o PHP 8 proibiu o uso de estáticos.",
        "Porque elas impedem o funcionamento das corrotinas."
      ],
      correctAnswer: 1
    },
    {
      id: "q8_5",
      question: "Para que servem os 'Task Workers' no Swoole?",
      options: [
        "Para escrever logs no terminal.",
        "Para executar tarefas síncronas e pesadas (ex: gerar PDF, enviar email) fora do fluxo principal de pedidos HTTP.",
        "Para traduzir o site para outros idiomas.",
        "Para substituir o banco de dados MySQL."
      ],
      correctAnswer: 1
    },
    {
      id: "q8_6",
      question: "O Swoole suporta nativamente quais protocolos além do HTTP?",
      options: [
        "Apenas FTP e SMTP.",
        "WebSockets, TCP, UDP, HTTP/2 e gRPC.",
        "Somente arquivos locais.",
        "Nenhum, exige o uso de bibliotecas externas."
      ],
      correctAnswer: 1
    }
  ]
};

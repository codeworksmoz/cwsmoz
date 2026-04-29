import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq12",
  title: "Quiz Master: Sockets, Streams e Redes de Baixo Nível",
  passingScore: 85,
  questions: [
    {
      id: "q12_1",
      question: "Qual a função fundamental do parâmetro AF_INET na função socket_create?",
      options: [
        "Definir que o socket será usado para ficheiros locais.",
        "Definir que o socket utilizará o protocolo IPv4 para comunicação em rede.",
        "Acelerar a velocidade de upload dos dados.",
        "Ativar a criptografia automática dos dados."
      ],
      correctAnswer: 1,
      explanation: "AF_INET refere-se à família de endereços da Internet (IPv4), permitindo que o socket comunique via endereços IP e portas."
    },
    {
      id: "q12_2",
      question: "Por que deves preferir Unix Domain Sockets (AF_UNIX) para comunicação entre processos (IPC) na mesma máquina?",
      options: [
        "Porque são compatíveis com o Windows.",
        "Porque evitam o overhead do stack de protocolos TCP/IP, resultando em menor latência e maior performance.",
        "Porque permitem o uso de Wi-Fi.",
        "Porque não exigem permissões de ficheiro."
      ],
      correctAnswer: 1,
      explanation: "Sockets Unix funcionam diretamente no Kernel através do sistema de ficheiros, eliminando o processamento de cabeçalhos de rede."
    },
    {
      id: "q12_3",
      question: "O que acontece tecnicamente quando chamas a função socket_set_nonblock() num socket de servidor?",
      options: [
        "O servidor desliga.",
        "Funções como socket_accept() ou socket_read() retornam imediatamente em vez de pausar a execução do script até haver dados.",
        "Aumenta o limite de memória RAM disponível.",
        "O PHP converte os dados para binário automaticamente."
      ],
      correctAnswer: 1
    },
    {
      id: "q12_4",
      question: "Qual a utilidade master da função socket_select()?",
      options: [
        "Escolher a melhor base de dados disponível.",
        "Monitorizar um array de múltiplos sockets para saber quais estão prontos para operações, evitando loops de 'busy waiting' que consomem 100% de CPU.",
        "Formatar o resultado da query SQL.",
        "Limpar o cache do servidor web."
      ],
      correctAnswer: 1
    },
    {
      id: "q12_5",
      question: "O que o erro 'EAGAIN' (ou EWOULDBLOCK) indica num socket não-bloqueante?",
      options: [
        "O socket está corrompido.",
        "A operação não pôde ser completada agora (ex: não há dados para ler), e o utilizador deve tentar novamente mais tarde.",
        "A conexão foi fechada pelo cliente.",
        "A porta de rede está bloqueada por um firewall."
      ],
      correctAnswer: 1
    },
    {
      id: "q12_6",
      question: "No contexto da Streams API, qual a vantagem do stream_socket_server sobre os sockets crus?",
      options: [
        "É compatível com versões mais antigas do PHP.",
        "Fornece uma abstração de alto nível que suporta nativamente protocolos como SSL/TLS e permite usar funções de ficheiro comuns.",
        "É a única forma de enviar dados via UDP.",
        "Não necessita da extensão de sockets habilitada no php.ini."
      ],
      correctAnswer: 1
    }
  ]
};

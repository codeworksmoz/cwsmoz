import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq11",
  title: "Quiz Master: RoadRunner e Servidores de Alta Escala",
  passingScore: 85,
  questions: [
    {
      id: "q11_1",
      question: "Qual a principal linguagem em que o servidor RoadRunner é escrito e porquê?",
      options: [
        "C++, para acesso direto ao hardware.",
        "Go (Golang), pela sua eficiência em concorrência e gestão de processos de rede.",
        "Rust, para garantir segurança de memória.",
        "PHP, para manter a compatibilidade total."
      ],
      correctAnswer: 1,
      explanation: "O RoadRunner aproveita as goroutines e a performance de rede do Go para atuar como um orquestrador de alta performance para o PHP."
    },
    {
      id: "q11_2",
      question: "O que é o protocolo Goridge no ecossistema RoadRunner?",
      options: [
        "Um sistema de rotas para o Laravel.",
        "Um protocolo binário de alta performance para comunicação entre o servidor Go e os workers PHP.",
        "Um motor de templates para o frontend.",
        "Uma extensão para encriptar a base de dados."
      ],
      correctAnswer: 1,
      explanation: "O Goridge é o 'tubo' de dados binário que permite que o Go e o PHP troquem informações com overhead mínimo, superando o FastCGI."
    },
    {
      id: "q11_3",
      question: "Como o RoadRunner melhora o tempo de resposta (TTFB) em comparação ao PHP-FPM?",
      options: [
        "Diminuindo a resolução das imagens.",
        "Mantendo os processos PHP residentes na memória, eliminando o custo de reinicializar a aplicação em cada pedido.",
        "Usando uma versão simplificada do PHP.",
        "Aumentando a frequência do CPU automaticamente."
      ],
      correctAnswer: 1,
      explanation: "A residência em memória significa que classes e frameworks (como o kernel do Symfony/Laravel) já estão carregados quando o pedido chega."
    },
    {
      id: "q11_4",
      question: "Qual o principal cuidado que um engenheiro deve ter ao programar para RoadRunner?",
      options: [
        "Não usar loops for.",
        "Evitar o acúmulo de estado em variáveis globais ou estáticas, o que pode causar 'vazamento' de dados entre diferentes pedidos.",
        "Usar apenas ficheiros .txt para guardar dados.",
        "Desativar o uso de classes."
      ],
      correctAnswer: 1,
      explanation: "Como o processo não morre, variáveis estáticas mantêm o valor do pedido anterior. É preciso gerir o estado de forma limpa."
    },
    {
      id: "q11_5",
      question: "O que acontece se um Worker PHP crashar (segfault) dentro do RoadRunner?",
      options: [
        "O servidor inteiro vai abaixo.",
        "O RoadRunner deteta a falha e reinicia um novo Worker automaticamente para manter a capacidade da rede.",
        "O utilizador recebe um erro 404.",
        "O computador entra em modo de segurança."
      ],
      correctAnswer: 1
    },
    {
      id: "q11_6",
      question: "Para que serve a configuração 'max_jobs' no ficheiro de configuração do RoadRunner?",
      options: [
        "Para definir o salário dos programadores.",
        "Para limitar quantos pedidos um worker processa antes de ser reiniciado, prevenindo memory leaks a longo prazo.",
        "Para aumentar o número de cores da CPU.",
        "Para definir o tempo máximo de execução de uma query SQL."
      ],
      correctAnswer: 1
    }
  ]
};

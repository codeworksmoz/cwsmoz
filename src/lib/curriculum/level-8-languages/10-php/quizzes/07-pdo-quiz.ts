import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq7",
  title: "Quiz Master: PDO, Segurança e Integridade ACID",
  passingScore: 85,
  questions: [
    {
      id: "q7_1",
      question: "Por que deves desativar 'ATTR_EMULATE_PREPARES' no driver do PDO?",
      options: [
        "Para o código PHP ficar mais legível.",
        "Para forçar o uso do protocolo binário nativo do banco, garantindo que o SQL Injection seja evitado no nível do servidor de dados.",
        "Para permitir o uso de emojis no banco de dados.",
        "Porque o PHP 8 não suporta emulação de strings."
      ],
      correctAnswer: 1,
      explanation: "A emulação faz com que o PHP apenas escape a string localmente. O suporte nativo envia o comando e os dados em pacotes separados, o que é muito mais robusto."
    },
    {
      id: "q7_2",
      question: "O que caracteriza a propriedade de 'Atomicidade' num bloco transacional?",
      options: [
        "A velocidade com que os dados são lidos.",
        "A garantia de que a transação é tratada como uma unidade única: ou todos os passos têm sucesso, ou nenhum é aplicado (Rollback).",
        "A capacidade de ligar a múltiplos bancos ao mesmo tempo.",
        "O uso de variáveis do tipo atom."
      ],
      correctAnswer: 1
    },
    {
      id: "q7_3",
      question: "Qual o risco de segurança ao capturar uma 'PDOException' e exibir o seu conteúdo ($e->getMessage()) diretamente ao utilizador final?",
      options: [
        "Nenhum, ajuda o utilizador a saber o que falhou.",
        "Vazamento de Informação (Information Leakage), revelando estrutura de tabelas, nomes de colunas e versões do servidor.",
        "O browser bloqueia o site automaticamente.",
        "O erro consome toda a memória RAM."
      ],
      correctAnswer: 1
    },
    {
      id: "q7_4",
      question: "O que acontece se um script terminar a execução sem chamar 'commit()' após ter iniciado uma transação?",
      options: [
        "O banco faz o commit automático.",
        "O banco realiza um Rollback implícito para garantir a integridade dos dados.",
        "Os dados ficam num estado 'limbo' para sempre.",
        "Ocorre um erro de sintaxe no SQL."
      ],
      correctAnswer: 1,
      explanation: "Para evitar inconsistências, os motores de DB revertem transações pendentes se a conexão for encerrada sem um comando de finalização explícito."
    },
    {
      id: "q7_5",
      question: "No PDO, qual o benefício do modo 'FETCH_CLASS' em relação ao 'FETCH_ASSOC'?",
      options: [
        "É 2x mais rápido.",
        "Instancia automaticamente objetos de uma classe específica, mapeando as colunas para propriedades, facilitando o uso de Domain Models.",
        "Impede o acesso de outros utilizadores aos dados.",
        "Não usa a memória Heap."
      ],
      correctAnswer: 1
    },
    {
      id: "q7_6",
      question: "Qual o papel do 'DSN' (Data Source Name) na instanciação do objeto PDO?",
      options: [
        "Definir a senha do utilizador.",
        "Identificar o driver, o host e o nome da base de dados numa string única de configuração.",
        "Gerar a chave de encriptação SSL.",
        "Controlar o número de threads do servidor."
      ],
      correctAnswer: 1
    }
  ]
};

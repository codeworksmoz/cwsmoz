import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq21",
  title: "Quiz Final: Auditoria de Produção e Capstone",
  passingScore: 85,
  questions: [
    {
      id: "q21_1",
      question: "Qual a diferença entre Liveness e Readiness Probes num deploy de alta escala?",
      options: [
        "Liveness é para o banco, Readiness é para o código.",
        "Liveness verifica se o processo deve ser reiniciado; Readiness verifica se o processo pode receber tráfego público.",
        "Readiness é apenas para sites estáticos.",
        "Liveness só funciona se o JIT estiver ativo."
      ],
      correctAnswer: 1,
      explanation: "Probes garantem que o orquestrador não envie tráfego para um worker que ainda está a carregar o cache ou a ligar-se à rede."
    },
    {
      id: "q21_2",
      question: "Por que deves monitorizar a 'Fila de Eventos' para realizar o escalonamento horizontal?",
      options: [
        "Para gastar menos eletricidade.",
        "Porque o uso de CPU pode estar baixo mesmo com o sistema atrasado (Backlog crescente).",
        "Porque o PHP não permite escala por CPU.",
        "Para acelerar o OpCache."
      ],
      correctAnswer: 1
    },
    {
      id: "q21_3",
      question: "O comando 'composer audit' integrado no CI/CD serve para:",
      options: [
        "Formatar o código automaticamente.",
        "Detetar vulnerabilidades conhecidas em bibliotecas de terceiros antes do deploy.",
        "Contar o número de classes no projeto.",
        "Substituir o uso de testes unitários."
      ],
      correctAnswer: 1
    },
    {
      id: "q21_4",
      question: "Em ambientes residentes (Swoole/RoadRunner), qual o maior risco para a estabilidade de longo prazo?",
      options: [
        "O processador ficar frio demais.",
        "Memory Leaks acumulados em variáveis estáticas que não são limpas entre requests.",
        "O uso de aspas duplas no código.",
        "O fecho da conexão SSH."
      ],
      correctAnswer: 1
    },
    {
      id: "q21_5",
      question: "Qual configuração do JIT é mais recomendada para o processamento massivo de mensagens no Event Server?",
      options: [
        "opcache.jit=0 (Desativado)",
        "opcache.jit=tracing (ou 1255)",
        "opcache.jit=function",
        "opcache.jit=minimal"
      ],
      correctAnswer: 1,
      explanation: "O modo Tracing identifica os caminhos de execução mais comuns (loops de processamento) e otimiza-os no nível do hardware."
    },
    {
      id: "q21_6",
      question: "Numa arquitetura Hexagonal de elite, o que define se o sistema está pronto para produção?",
      options: [
        "O uso da última versão do Laravel.",
        "O isolamento total do domínio e a aprovação de todos os testes de contrato nas Portas.",
        "O tamanho do ficheiro .css.",
        "O número de comentários no código."
      ],
      correctAnswer: 1
    }
  ]
};

import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q9-master",
  title: "Quiz: Engenharia de CI/CD e Automação Industrial",
  passingScore: 80,
  questions: [
    {
      id: "q9_1",
      question: "Qual o principal objetivo técnico da Integração Contínua (CI)?",
      options: [
        "Eliminar a necessidade de documentação do sistema.",
        "Reduzir o tempo de feedback e detetar conflitos de integração várias vezes ao dia.",
        "Aumentar a velocidade da CPU do servidor de produção.",
        "Garantir que o site tenha cores consistentes em todos os browsers."
      ],
      correctAnswer: 1,
      explanation: "O CI foca no feedback rápido. Detetar um erro 10 minutos após o commit é infinitamente mais barato do que o encontrar após um mês de desenvolvimento acumulado."
    },
    {
      id: "q9_2",
      question: "O que distingue fundamentalmente Continuous Delivery de Continuous Deployment?",
      options: [
        "O Deployment é para mobile e o Delivery para desktop.",
        "No Deployment, a ida para produção é automática após os testes; no Delivery, exige uma aprovação manual.",
        "O Delivery utiliza Docker e o Deployment não.",
        "O Deployment é mais lento por ser mais seguro."
      ],
      correctAnswer: 1,
      explanation: "No Continuous Delivery, o software está sempre 'lançável', mas o negócio decide QUANDO lançar. No Deployment, a máquina decide baseando-se nos testes."
    },
    {
      id: "q9_3",
      question: "Por que deves gerar o artefacto (build) apenas UMA vez no início do pipeline?",
      options: [
        "Para poupar espaço em disco no servidor do GitHub.",
        "Para garantir que o código testado e validado em Staging é exatamente o mesmo que será executado em Produção.",
        "Porque o Docker proíbe múltiplos builds do mesmo código.",
        "Para acelerar o tempo de download do programador."
      ],
      correctAnswer: 1,
      explanation: "A imutabilidade do artefacto elimina a variabilidade. Se recompilares em cada fase, corres o risco de ter versões ligeiramente diferentes devido a mudanças em dependências ou ambiente."
    },
    {
      id: "q9_4",
      question: "O que caracteriza o estágio de 'Static Analysis' (ou Linting) num pipeline?",
      options: [
        "A execução do programa para ver se ele crasha.",
        "A análise do código-fonte sem o executar para encontrar erros de estilo, bugs potenciais e falhas de segurança.",
        "O teste de carga com 1 milhão de utilizadores simulados.",
        "A tradução automática do código para outra linguagem."
      ],
      correctAnswer: 1,
      explanation: "Linters e ferramentas de análise estática são os guardiões da qualidade e segurança inicial do pipeline."
    },
    {
      id: "q9_5",
      question: "Qual o papel do estágio de 'Security Scan' (DevSecOps) no fluxo automático?",
      options: [
        "Mudar as senhas de todos os administradores.",
        "Auditar automaticamente se as bibliotecas de terceiros (NPM/Pip) possuem vulnerabilidades conhecidas (CVEs).",
        "Impedir que utilizadores externos acedam ao repositório.",
        "Criptografar o código fonte para que o browser não o leia."
      ],
      correctAnswer: 1,
      explanation: "Integrar a segurança no pipeline permite o 'Shift Left', detetando vulnerabilidades antes que o software seja publicado."
    },
    {
      id: "q9_6",
      question: "Num pipeline de elite, o que deve acontecer se o estágio de 'Unit Tests' falhar?",
      options: [
        "O pipeline deve prosseguir para o deploy para não atrasar o cronograma.",
        "O pipeline deve ser interrompido imediatamente (Break the build) e a equipa notificada.",
        "O erro deve ser ignorado se for um erro pequeno.",
        "O servidor de produção deve ser reiniciado automaticamente."
      ],
      correctAnswer: 1,
      explanation: "A integridade do pipeline é sagrada. Se um teste falha, o build está 'sujo' e não pode avançar para as fases seguintes de validação ou deploy."
    }
  ]
};

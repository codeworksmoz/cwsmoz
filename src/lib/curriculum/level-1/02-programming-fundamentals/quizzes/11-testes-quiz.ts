import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t11-quiz",
  title: "Quiz: Engenharia de Testes e Debugging",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "O que é um 'Breakpoint' no contexto de debugging?",
      options: [
        "Um erro que faz o computador desligar",
        "Um ponto no código onde a execução é pausada para inspeção",
        "Um comando que apaga a memória RAM",
        "Uma técnica para acelerar o processamento"
      ],
      correctAnswer: 1,
      explanation: "Breakpoints permitem que o engenheiro pare o tempo e olhe para o estado interno das variáveis sem que o programa termine."
    },
    {
      id: "q2",
      question: "Qual o foco principal dos Testes Unitários (Unit Tests)?",
      options: [
        "Testar a conexão com a internet",
        "Testar a aplicação inteira do ponto de vista do utilizador",
        "Testar a menor unidade funcional do código (como uma função) de forma isolada",
        "Verificar se o design do site está bonito"
      ],
      correctAnswer: 2,
      explanation: "Testes unitários garantem que cada pequena peça da engrenagem funciona perfeitamente sozinha."
    },
    {
      id: "q3",
      question: "O que significa o termo 'Regressão' em desenvolvimento de software?",
      options: [
        "Voltar a usar uma linguagem de programação antiga",
        "Um bug que aparece numa funcionalidade que anteriormente estava correta",
        "Otimizar o código para computadores lentos",
        "Apagar o histórico do Git"
      ],
      correctAnswer: 1,
      explanation: "Regressão é o pesadelo da manutenção: quando o código novo estraga o que já estava pronto."
    },
    {
      id: "q4",
      question: "No ciclo TDD (Red-Green-Refactor), o que deve ser feito na fase 'Red'?",
      options: [
        "Corrigir os erros de sintaxe",
        "Escrever um teste que falha, pois a funcionalidade ainda não existe",
        "Formatar o computador",
        "Escrever o código de produção final"
      ],
      correctAnswer: 1,
      explanation: "Começamos com um teste falhando para garantir que o teste realmente está a validar a nova funcionalidade."
    },
    {
      id: "q5",
      question: "Qual a função de um 'Watcher' durante o debugging?",
      options: [
        "Impedir que outros programadores vejam o código",
        "Monitorizar e exibir o valor de uma variável específica durante a execução",
        "Gravar a tela do utilizador",
        "Detetar vírus no sistema"
      ],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "Por que não devemos basear a nossa estratégia apenas em Testes E2E (End-to-End)?",
      options: [
        "Porque são proibidos em empresas grandes",
        "Porque são lentos, caros para manter e difíceis de isolar a causa exata de um erro",
        "Porque não funcionam em telemóveis",
        "Porque o Google não gosta de testes E2E"
      ],
      correctAnswer: 1,
      explanation: "Embora valiosos, os testes E2E são o topo da pirâmide: devem ser poucos e focados em fluxos críticos devido ao seu alto custo de execução."
    }
  ]
};
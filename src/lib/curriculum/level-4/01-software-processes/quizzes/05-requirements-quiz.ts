import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q5-master",
  title: "Quiz: Engenharia de Requisitos de Elite",
  passingScore: 70,
  questions: [
    {
      id: "q5_1",
      question: "Qual a principal diferença entre um Requisito Funcional (RF) e um Não-Funcional (RNF)?",
      options: [
        "RF descreve o custo; RNF descreve o tempo.",
        "RF descreve o comportamento do sistema; RNF descreve atributos de qualidade e restrições.",
        "RF é para o cliente; RNF é apenas para o programador.",
        "RNF é opcional; RF é obrigatório."
      ],
      correctAnswer: 1,
      explanation: "Os RFs definem O QUE o sistema faz (ex: login). Os RNFs definem COMO ele faz (ex: login em menos de 1 segundo)."
    },
    {
      id: "q5_2",
      question: "Na técnica MoSCoW, o que acontece com um requisito classificado como 'Should Have'?",
      options: [
        "É a prioridade máxima do sistema.",
        "É importante, mas não vital para o lançamento do MVP no prazo atual.",
        "Deve ser implementado apenas se sobrar muito dinheiro.",
        "É um erro de especificação."
      ],
      correctAnswer: 1,
      explanation: "Should Have são requisitos importantes que agregam muito valor, mas o sistema ainda funciona (embora com dor) sem eles no primeiro momento."
    },
    {
      id: "q5_3",
      question: "O que define a fase de 'Validação' na Engenharia de Requisitos?",
      options: [
        "Verificar se o código não tem erros de sintaxe.",
        "Garantir que o documento de requisitos reflete as reais necessidades dos stakeholders.",
        "Validar a conexão com a base de dados.",
        "Mudar a cor dos botões após o deploy."
      ],
      correctAnswer: 1,
      explanation: "A validação garante que estamos a construir o sistema certo, evitando construir perfeitamente algo que ninguém quer."
    },
    {
      id: "q5_4",
      question: "Um requisito que diz: 'O sistema deve ser desenvolvido em Rust para garantir segurança de memória' é classificado como:",
      options: [
        "Requisito Funcional",
        "Restrição de Design ou Implementação",
        "User Story",
        "Bug de especificação"
      ],
      correctAnswer: 1,
      explanation: "Restrições limitam as escolhas técnicas do arquiteto, geralmente por necessidades de infraestrutura ou políticas da empresa."
    },
    {
      id: "q5_5",
      question: "Qual o maior perigo de um requisito 'Ambíguo'?",
      options: [
        "O sistema usar mais memória RAM.",
        "Ser interpretado de formas diferentes pelo cliente e pela equipa, gerando retrabalho caro.",
        "O site carregar mais devagar.",
        "Aumentar o número de cores no design."
      ],
      correctAnswer: 1,
      explanation: "A ambiguidade leva a falhas de comunicação onde o programador constrói o que entendeu, que pode não ser o que o cliente esperava."
    },
    {
      id: "q5_6",
      question: "A 'Rastreabilidade de Requisitos' permite ao Engenheiro Master:",
      options: [
        "Aumentar o salário do mês.",
        "Ligar cada parte do código a uma necessidade de negócio real, evitando o excesso de engenharia (Gold Plating).",
        "Monitorizar o tempo de login dos funcionários.",
        "Criptografar as pastas do servidor."
      ],
      correctAnswer: 1,
      explanation: "A rastreabilidade garante que todo o esforço de codificação está alinhado com o valor gerado para o cliente."
    }
  ]
};
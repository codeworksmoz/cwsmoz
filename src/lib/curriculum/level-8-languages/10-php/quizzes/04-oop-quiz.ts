import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq4",
  title: "Quiz Master: Enums e Algebraic Data Types",
  passingScore: 85,
  questions: [
    {
      id: "q4_1",
      question: "Qual a diferença fundamental entre um Unit Enum e um Backed Enum no PHP 8?",
      options: [
        "Unit Enums são privados e Backed Enums são públicos.",
        "Unit Enums são apenas casos; Backed Enums têm um valor escalar (string ou int) associado.",
        "Unit Enums não aceitam métodos internos.",
        "Backed Enums são obrigatórios para usar o operador match."
      ],
      correctAnswer: 1,
      explanation: "Backed Enums permitem associar cada caso a um valor primitivo para facilitar o armazenamento em BD ou JSON."
    },
    {
      id: "q4_2",
      question: "O que acontece ao tentar instanciar um Enum usando a palavra-chave 'new'?",
      options: [
        "O PHP cria uma nova instância normalmente.",
        "Ocorre um erro fatal, pois Enums não podem ser instanciados manualmente.",
        "O motor retorna null.",
        "O Enum é convertido em uma classe padrão (stdClass)."
      ],
      correctAnswer: 1,
      explanation: "Enums são objetos singleton geridos pelo motor; a sua criação é restrita à definição dos casos."
    },
    {
      id: "q4_3",
      question: "Qual o comportamento do método estático cases() em um Enum?",
      options: [
        "Apaga todos os casos da memória.",
        "Retorna um array contendo todas as instâncias (casos) definidas no Enum.",
        "Converte o Enum em um array de strings.",
        "Verifica se um caso específico existe."
      ],
      correctAnswer: 1
    },
    {
      id: "q4_4",
      question: "Qual a diferença de comportamento entre from() e tryFrom() num Backed Enum?",
      options: [
        "from() é mais rápido.",
        "from() lança um ValueError se o valor for inválido; tryFrom() retorna null.",
        "tryFrom() é apenas para Enums do tipo int.",
        "from() permite criar novos casos dinamicamente."
      ],
      correctAnswer: 1,
      explanation: "tryFrom é a abordagem defensiva (fail-safe), ideal para processar inputs de utilizadores ou APIs externas."
    },
    {
      id: "q4_5",
      question: "Um Enum pode herdar de uma Classe normal ou de outro Enum?",
      options: [
        "Sim, herança múltipla é permitida.",
        "Não, Enums não suportam herança de classes ou de outros Enums.",
        "Sim, mas apenas de classes abstratas.",
        "Apenas se a classe pai for marcada como 'enum-base'."
      ],
      correctAnswer: 1,
      explanation: "Enums são estruturas finais e herdam internamente de uma classe de sistema oculta."
    },
    {
      id: "q4_6",
      question: "Qual a principal vantagem de usar Enums com a expressão 'match'?",
      options: [
        "O código corre 10x mais rápido.",
        "Garante a exaustividade: o compilador exige que todos os casos sejam tratados.",
        "Permite usar o Enum como uma chave de array.",
        "Muda automaticamente o tipo da variável."
      ],
      correctAnswer: 1,
      explanation: "O match exige que todos os casos do Enum sejam cobertos, prevenindo erros de lógica ao esquecer um estado novo."
    }
  ]
};

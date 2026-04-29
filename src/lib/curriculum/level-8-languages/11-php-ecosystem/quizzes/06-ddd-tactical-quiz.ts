import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-eco-mq6",
  title: "Quiz Master: DDD Tático e Blocos de Construção",
  passingScore: 85,
  questions: [
    {
      id: "q6_1",
      question: "Qual a diferença fundamental entre uma Entity e um Value Object?",
      options: [
        "Entities são mais rápidas.",
        "Entities possuem identidade única persistente; Value Objects são definidos apenas pelos seus atributos.",
        "Value Objects podem ser alterados após a criação.",
        "Entities não podem conter métodos."
      ],
      correctAnswer: 1,
      explanation: "A identidade de uma entidade permanece a mesma ao longo do tempo, enquanto um objeto de valor é substituível por outro com os mesmos atributos."
    },
    {
      id: "q6_2",
      question: "Por que os Value Objects devem ser imutáveis?",
      options: [
        "Para poupar espaço no disco rígido.",
        "Para evitar efeitos colaterais (side effects) e garantir a previsibilidade do estado do domínio.",
        "Porque o PHP 8 proibiu a mutabilidade.",
        "Para facilitar o uso de loops for."
      ],
      correctAnswer: 1,
      explanation: "Imutabilidade garante que mudar o valor de um objeto não afete inadvertidamente outras partes do sistema que referenciam o mesmo objeto."
    },
    {
      id: "q6_3",
      question: "Qual o papel da 'Aggregate Root'?",
      options: [
        "Ligar o sistema à base de dados.",
        "Ser o único ponto de entrada para acesso e modificação dos elementos dentro de um Agregado.",
        "Gerar o HTML da página.",
        "Validar o login do utilizador."
      ],
      correctAnswer: 1,
      explanation: "A raiz garante a integridade e as invariantes de todo o grupo de objetos sob o seu controle."
    },
    {
      id: "q6_4",
      question: "O que é uma 'Invariante' no contexto de DDD Tático?",
      options: [
        "Uma variável que nunca muda de valor.",
        "Uma regra de negócio que deve ser sempre verdadeira dentro de um Agregado.",
        "Um erro de sintaxe.",
        "O nome do servidor de produção."
      ],
      correctAnswer: 1
    },
    {
      id: "q6_5",
      question: "Qual o benefício de validar dados no construtor de um Value Object (ex: Email)?",
      options: [
        "O código fica mais longo e impressiona o cliente.",
        "Garante que é impossível criar um objeto num estado inválido (Always-Valid Domain Model).",
        "Acelera a conexão com a internet.",
        "O banco de dados deixa de precisar de chaves primárias."
      ],
      correctAnswer: 1
    },
    {
      id: "q6_6",
      question: "Ao comparar dois Value Objects idênticos, qual o resultado esperado?",
      options: [
        "Falso, pois são instâncias diferentes na memória.",
        "Verdadeiro, pois o que define a igualdade são os seus valores internos.",
        "Erro de compilação.",
        "Depende do tamanho do objeto."
      ],
      correctAnswer: 1
    }
  ]
};

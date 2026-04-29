import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq1",
  title: "Quiz Master: PHP 8 Attributes e Metadados",
  passingScore: 85,
  questions: [
    {
      id: "q1_1",
      question: "Qual a vantagem técnica de performance dos Atributos em relação aos Docblocks?",
      options: [
        "Atributos são guardados em ficheiros .txt externos.",
        "Atributos são processados nativamente pelo parser da Zend Engine como parte da AST, eliminando o parsing de strings.",
        "Atributos são mais curtos, por isso ocupam menos espaço em disco.",
        "Atributos não usam memória RAM durante a execução."
      ],
      correctAnswer: 1,
      explanation: "A integração na AST permite que o motor do PHP reconheça os metadados durante a compilação, tornando a sua leitura via Reflection muito mais rápida que o parsing de comentários."
    },
    {
      id: "q1_2",
      question: "Como se define que um atributo customizado só pode ser aplicado a Propriedades de classe?",
      options: [
        "#[Attribute(TARGET_PROPERTY)]",
        "#[Attribute(Attribute::TARGET_PROPERTY)]",
        "#[PropertyAttribute]",
        "Não é possível restringir o alvo de um atributo."
      ],
      correctAnswer: 1,
      explanation: "Utilizamos a flag binária Attribute::TARGET_PROPERTY no construtor da definição do atributo para restringir o seu uso."
    },
    {
      id: "q1_3",
      question: "Qual método da Reflection API é utilizado para extrair a lista de atributos de uma classe?",
      options: [
        "readAttributes()",
        "getMetadata()",
        "getAttributes()",
        "fetchProperties()"
      ],
      correctAnswer: 2
    },
    {
      id: "q1_4",
      question: "O que o método 'newInstance()' de um objeto ReflectionAttribute faz?",
      options: [
        "Cria uma nova classe no ficheiro.",
        "Instancia a classe do atributo, passando os argumentos definidos no código para o seu construtor.",
        "Apaga o atributo da memória.",
        "Reinicia o servidor PHP."
      ],
      correctAnswer: 1,
      explanation: "Este método transforma o metadado numa instância real de objeto, permitindo que acedas aos seus atributos de forma tipada."
    },
    {
      id: "q1_5",
      question: "Pode um elemento (ex: uma classe) possuir múltiplos atributos do mesmo tipo no PHP 8?",
      options: [
        "Não, o PHP lança um erro de duplicado.",
        "Sim, mas apenas se o atributo for definido com a flag Attribute::IS_REPEATABLE.",
        "Sim, por padrão todos os atributos são repetíveis.",
        "Apenas se o nome da classe for diferente."
      ],
      correctAnswer: 1,
      explanation: "Por segurança, a repetição é bloqueada a menos que o desenvolvedor autorize explicitamente via flag IS_REPEATABLE."
    },
    {
      id: "q1_6",
      question: "Atributos são válidos em versões do PHP anteriores à 8.0?",
      options: [
        "Sim, funcionam desde o PHP 7.4.",
        "Não, a sintaxe #[...] causará um erro de sintaxe em versões anteriores.",
        "Sim, mas são tratados como comentários simples.",
        "Funcionam apenas se o OpCache estiver desligado."
      ],
      correctAnswer: 1,
      explanation: "Atributos são uma mudança de sintaxe core. Versões anteriores não reconhecem o token #[ e interrompem a execução com Parse Error."
    }
  ]
};

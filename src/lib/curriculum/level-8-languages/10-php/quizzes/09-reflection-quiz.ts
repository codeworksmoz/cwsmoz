import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq9",
  title: "Quiz Master: Reflection API e Introspecção Profunda",
  passingScore: 85,
  questions: [
    {
      id: "q9_1",
      question: "Qual classe da Reflection API permite inspecionar e instanciar atributos do PHP 8?",
      options: [
        "ReflectionMethod",
        "ReflectionAttribute",
        "ReflectionProperty",
        "ReflectionClass"
      ],
      correctAnswer: 1,
      explanation: "A classe ReflectionAttribute é a interface específica para lidar com os metadados decorados via sintaxe #[...]."
    },
    {
      id: "q9_2",
      question: "O que o método 'newInstance()' de um ReflectionAttribute faz tecnicamente?",
      options: [
        "Cria uma nova classe no ficheiro.",
        "Instancia a classe do atributo passando os argumentos definidos no código para o seu construtor.",
        "Apaga o atributo da memória.",
        "Reinicia o servidor PHP."
      ],
      correctAnswer: 1,
      explanation: "Este método transforma o metadado estático num objeto real que podes manipular no teu código."
    },
    {
      id: "q9_3",
      question: "Pode a Reflection API aceder ao valor de uma propriedade privada? Como?",
      options: [
        "Não, o PHP proíbe por segurança.",
        "Sim, utilizando o método setAccessible(true) no objeto ReflectionProperty.",
        "Apenas se o ficheiro estiver com strict_types=0.",
        "Apenas em métodos estáticos."
      ],
      correctAnswer: 1
    },
    {
      id: "q9_4",
      question: "Qual o impacto de usar Reflection intensivamente dentro de um loop de 1 milhão de iterações?",
      options: [
        "Nenhum, o PHP 8 é otimizado.",
        "Alto overhead de CPU, pois a introspecção exige pesquisas pesadas nas tabelas de símbolos do motor.",
        "O código corre 2x mais rápido.",
        "A memória RAM é limpa automaticamente."
      ],
      correctAnswer: 1
    },
    {
      id: "q9_5",
      question: "Para que serve o método 'getDocComment()'?",
      options: [
        "Para ler Atributos do PHP 8.",
        "Para extrair as strings de comentários (Docblocks) que precedem uma classe ou método.",
        "Para documentar o código no GitHub.",
        "Para validar a sintaxe do ficheiro."
      ],
      correctAnswer: 1,
      explanation: "Era a forma padrão de ler metadados antes do PHP 8. Hoje, deves preferir Attributes sempre que possível."
    },
    {
      id: "q9_6",
      question: "ReflectionClass::newInstanceArgs() permite:",
      options: [
        "Criar uma nova classe dinamicamente.",
        "Instanciar uma classe passando um array de argumentos para o construtor.",
        "Mudar o nome de uma classe em runtime.",
        "Remover o pai (parent) de uma classe."
      ],
      correctAnswer: 1
    }
  ]
};

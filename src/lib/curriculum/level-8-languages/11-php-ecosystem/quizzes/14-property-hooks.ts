import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-eco-mq14",
  title: "Quiz Master: PHP 8.4 Property Hooks",
  passingScore: 85,
  questions: [
    {
      id: "q1",
      question: "Qual o principal benefício arquitetural dos Property Hooks?",
      options: [
        "Aumentar a velocidade do banco de dados.",
        "Eliminar a necessidade de métodos getter/setter manuais, encapsulando a lógica na declaração da propriedade.",
        "Mudar o tema do site automaticamente.",
        "Reduzir o uso de memória RAM em 50%."
      ],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "O que é uma 'Propriedade Virtual' no PHP 8.4?",
      options: [
        "Uma propriedade que existe apenas em Realidade Aumentada.",
        "Uma propriedade que não tem armazenamento físico e é calculada apenas no hook 'get'.",
        "Uma variável global acessível por todos.",
        "Um erro de sintaxe do compilador."
      ],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Como se chama o valor de entrada automático no hook 'set'?",
      options: ["$input", "$data", "$value", "$payload"],
      correctAnswer: 2
    },
    {
      id: "q4",
      question: "O que a sintaxe 'public private(set) string $name' permite?",
      options: [
        "Esconder o nome da classe.",
        "Permitir leitura pública mas restringir a escrita apenas para dentro da classe (Visibilidade Assimétrica).",
        "Tornar a propriedade invisível para o debugger.",
        "Lançar um erro se a string for privada."
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Property Hooks podem ser usados em Interfaces?",
      options: [
        "Não, interfaces não podem ter propriedades.",
        "Sim, para definir requisitos de comportamento (lógica) para propriedades em classes que as implementem.",
        "Apenas se as propriedades forem estáticas.",
        "Sim, mas apenas no PHP 8.3."
      ],
      correctAnswer: 1,
      explanation: "Isto permite que as interfaces definam não apenas métodos, mas também como as propriedades devem ser acessíveis e validadas."
    },
    {
      id: "q6",
      question: "Podes usar o modificador 'readonly' em propriedades que possuem hooks de escrita (set)?",
      options: [
        "Sim, é o padrão.",
        "Não, pois readonly já implica um tipo de restrição de escrita, tornando os hooks set redundantes ou conflitantes.",
        "Apenas se o hook for vazio.",
        "Sim, mas apenas em classes finais."
      ],
      correctAnswer: 1
    }
  ]
};

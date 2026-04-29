import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "des-q3-master",
  title: "Quiz: Padrões de Criação",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Qual padrão é usado para garantir que uma classe tenha apenas uma instância?",
      options: ["Factory", "Builder", "Singleton", "Prototype"],
      correctAnswer: 2
    },
    {
      id: "q2",
      question: "O padrão Builder é mais indicado quando:",
      options: [
        "O objeto tem poucos atributos",
        "A construção do objeto envolve muitos passos e configurações opcionais",
        "Queremos clonar um objeto existente",
        "Não queremos usar classes"
      ],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Qual a diferença entre Factory Method e Abstract Factory?",
      options: [
        "Factory Method usa classes e Abstract Factory usa funções",
        "Factory Method foca em um produto; Abstract Factory foca em famílias de produtos relacionados",
        "Nenhuma, são o mesmo padrão",
        "Abstract Factory é apenas para Java"
      ],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "O padrão Prototype baseia-se em:",
      options: [
        "Chamar o construtor repetidamente",
        "Copiar (clonar) um objeto existente para criar um novo",
        "Usar uma base de dados",
        "Remover o estado do objeto"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Padrões de criação ajudam a cumprir qual princípio SOLID?",
      options: ["LSP", "DIP (Inversão de Dependência)", "ISP", "Symmetry"],
      correctAnswer: 1,
      explanation: "Ao usar fábricas, o código de alto nível deixa de depender de instâncias concretas (new X), dependendo apenas de abstrações."
    },
    {
      id: "q6",
      question: "O uso excessivo de Singletons é considerado um anti-padrão porque:",
      options: [
        "Ocupa toda a memória RAM",
        "Cria um estado global oculto e dificulta o isolamento em testes unitários",
        "O código corre mais devagar",
        "Não funciona em Cloud"
      ],
      correctAnswer: 1
    }
  ]
};
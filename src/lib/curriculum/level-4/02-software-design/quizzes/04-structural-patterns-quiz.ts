import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "des-q4-master",
  title: "Quiz: Padrões Estruturais",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Qual padrão permite que uma interface antiga seja usada por um sistema novo sem alterar o código original?",
      options: ["Bridge", "Adapter", "Decorator", "Facade"],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "O padrão Facade (Fachada) tem como objetivo primordial:",
      options: [
        "Adicionar segurança ao sistema",
        "Simplificar o uso de um subsistema complexo através de uma interface unificada",
        "Dividir uma classe em duas",
        "Mudar a interface visual do app"
      ],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Qual a diferença entre Decorator e Proxy?",
      options: [
        "Decorator adiciona comportamento; Proxy controla o acesso ao objeto",
        "Proxy é mais rápido",
        "Decorator é apenas para UI",
        "Não há diferença técnica"
      ],
      correctAnswer: 0
    },
    {
      id: "q4",
      question: "O padrão Composite é ideal para representar quais estruturas?",
      options: ["Listas lineares", "Hierarquias em árvore (todo-parte)", "Bases de dados", "Redes circulares"],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "O padrão Flyweight foca em qual otimização?",
      options: [
        "Reduzir o tempo de CPU",
        "Poupar memória RAM partilhando o estado comum entre muitos objetos similares",
        "Acelerar a internet",
        "Criptografar dados"
      ],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "Qual padrão estrutural separa a abstração da sua implementação para que ambas possam variar independentemente?",
      options: ["Bridge", "Proxy", "Adapter", "Composite"],
      correctAnswer: 0
    }
  ]
};
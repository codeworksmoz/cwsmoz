import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "des-q5-master",
  title: "Quiz: Padrões Comportamentais",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Qual padrão permite trocar o algoritmo de uma função em tempo de execução sem mudar a classe que o usa?",
      options: ["State", "Strategy", "Template Method", "Command"],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "O padrão Observer é a base tecnológica de qual conceito moderno?",
      options: ["Criptografia", "Programação Reativa e Event-Driven", "Compilação JIT", "Garbage Collection"],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "O padrão Command é útil para implementar qual funcionalidade de interface?",
      options: ["Mudar a cor de fundo", "Undo/Redo (Desfazer/Refazer)", "Login de utilizador", "Download de ficheiros"],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "Qual a diferença entre o padrão State e o Strategy?",
      options: [
        "Nenhuma",
        "No State, os estados conhecem uns aos outros e trocam sozinhos; no Strategy, o cliente escolhe a estratégia",
        "Strategy é apenas para números",
        "State é mais lento"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "O padrão Chain of Responsibility (Cadeia de Responsabilidade) é muito usado em:",
      options: ["Middlewares de servidores web e tratamento de eventos", "Somas matemáticas", "Desenho de ícones", "Gestão de memória"],
      correctAnswer: 0
    },
    {
      id: "q6",
      question: "O padrão Memento serve para:",
      options: [
        "Acelerar o processador",
        "Capturar e restaurar o estado interno de um objeto sem violar o encapsulamento",
        "Mudar o nome das variáveis",
        "Ligar à internet"
      ],
      correctAnswer: 1
    }
  ]
};
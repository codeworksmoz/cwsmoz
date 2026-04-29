import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "des-q1-master",
  title: "Quiz: Domínio dos Princípios SOLID",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Uma classe 'Order' que calcula o imposto, gera um PDF e envia um SMS viola qual princípio?",
      options: ["OCP", "LSP", "SRP (Single Responsibility)", "DIP"],
      correctAnswer: 2
    },
    {
      id: "q2",
      question: "Se tens de mudar o código de uma classe 'PaymentProcessor' sempre que um novo banco é adicionado, qual princípio estás a violar?",
      options: ["SRP", "Open/Closed Principle (OCP)", "ISP", "LSP"],
      correctAnswer: 1,
      explanation: "O código deve ser aberto para extensão (novos bancos) mas fechado para modificação da classe base."
    },
    {
      id: "q3",
      question: "O Liskov Substitution Principle (LSP) foca principalmente em garantir que:",
      options: [
        "Variáveis sejam privadas",
        "Subclasses não quebrem as expectativas de quem usa a classe pai",
        "Interfaces sejam pequenas",
        "A base de dados seja rápida"
      ],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "O Dependency Inversion Principle (DIP) sugere que os módulos de alto nível devem depender de:",
      options: ["Módulos de baixo nível", "Bases de dados SQL", "Abstrações (Interfaces)", "Classes concretas"],
      correctAnswer: 2
    },
    {
      id: "q5",
      question: "Violar o Interface Segregation Principle (ISP) causa qual problema técnico?",
      options: [
        "Lentidão no processador",
        "Clientes sendo forçados a depender e implementar métodos que não utilizam",
        "Erros de memória no Heap",
        "Duplicação de código"
      ],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "Injetar uma Interface no construtor de uma classe em vez de dar 'new' numa classe concreta é uma aplicação de:",
      options: ["DIP", "ISP", "LSP", "SRP"],
      correctAnswer: 0
    }
  ]
};
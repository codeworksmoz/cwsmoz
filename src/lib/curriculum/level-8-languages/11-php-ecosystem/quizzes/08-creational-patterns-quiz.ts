import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-eco-mq8",
  title: "Quiz Master: Padrões de Criação em PHP",
  passingScore: 85,
  questions: [
    {
      id: "q8_1",
      question: "Qual a principal vulnerabilidade de um Singleton mal implementado no PHP?",
      options: [
        "Consome muita CPU.",
        "Permitir a clonagem (clone) ou a desserialização do objeto, criando múltiplas instâncias indesejadas.",
        "Não permite o uso de namespaces.",
        "O motor JIT não consegue otimizá-lo."
      ],
      correctAnswer: 1,
      explanation: "Para um Singleton real, deves tornar o __construct, __clone e __wakeup privados para impedir a duplicação do objeto."
    },
    {
      id: "q8_2",
      question: "O padrão Factory Method ajuda a cumprir qual princípio SOLID?",
      options: [
        "LSP",
        "OCP (Open/Closed Principle)",
        "ISP",
        "Apenas o SRP"
      ],
      correctAnswer: 1,
      explanation: "Permite estender o sistema com novas classes sem alterar o código que solicita a criação do objeto."
    },
    {
      id: "q8_3",
      question: "Qual a diferença entre Factory Method e Abstract Factory?",
      options: [
        "Factory Method usa funções estáticas e Abstract Factory usa objetos.",
        "Factory Method foca na criação de um único produto; Abstract Factory foca em famílias de produtos relacionados.",
        "Abstract Factory é apenas para bases de dados.",
        "Não existe diferença técnica real."
      ],
      correctAnswer: 1
    },
    {
      id: "q8_4",
      question: "O padrão Builder é mais indicado para qual cenário?",
      options: [
        "Quando um objeto tem apenas um atributo.",
        "Quando o processo de construção de um objeto é complexo e envolve múltiplos passos opcionais.",
        "Para acelerar o carregamento do Composer.",
        "Para substituir o uso de interfaces."
      ],
      correctAnswer: 1
    },
    {
      id: "q8_5",
      question: "Por que se considera que o uso excessivo de 'new' dentro de serviços é um 'Code Smell'?",
      options: [
        "Porque o PHP 8 desencoraja o uso de classes.",
        "Porque cria um acoplamento forte (Hard dependency) que dificulta o uso de Mocks em testes unitários.",
        "Porque ocupa o dobro da memória RAM.",
        "Porque impede o uso de anotações."
      ],
      correctAnswer: 1
    },
    {
      id: "q8_6",
      question: "O padrão Prototype utiliza qual funcionalidade nativa do PHP para criar novos objetos?",
      options: [
        "O método __construct.",
        "A palavra-chave 'clone'.",
        "O método estático from().",
        "A Reflection API obrigatoriamente."
      ],
      correctAnswer: 1,
      explanation: "O Prototype cria novos objetos copiando uma instância existente (protótipo), evitando o custo de uma nova inicialização pesada."
    }
  ]
};
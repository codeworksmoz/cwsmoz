import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-eco-mq4",
  title: "Quiz Master: Mutation Testing e Infection PHP",
  passingScore: 85,
  questions: [
    {
      id: "q4_1",
      question: "Qual o principal problema que o Mutation Testing resolve em relação ao Code Coverage?",
      options: [
        "Aumentar a velocidade do processador.",
        "Detetar testes que executam as linhas de código mas não possuem asserções (asserts) que validam a lógica real.",
        "Reduzir o tamanho do ficheiro .php.",
        "Automatizar o deploy para o servidor."
      ],
      correctAnswer: 1,
      explanation: "Code Coverage diz-te se a linha correu; Mutation Testing diz-te se o teste é realmente capaz de detetar se a lógica daquela linha mudar."
    },
    {
      id: "q4_2",
      question: "O que indica um 'Escaped Mutant' (Mutante Sobrevivente)?",
      options: [
        "Que o código está 100% seguro.",
        "Que a ferramenta alterou a lógica do código, mas os teus testes continuaram a passar, indicando falta de rigor.",
        "Que o servidor de testes caiu.",
        "Que o PHP 8 detetou um erro de sintaxe."
      ],
      correctAnswer: 1
    },
    {
      id: "q4_3",
      question: "No relatório do Infection, o MSI (Mutation Score Indicator) de 100% significa:",
      options: [
        "Que o sistema não tem bugs.",
        "Que todos os mutantes gerados foram 'mortos' (detetados) pelos teus testes.",
        "Que o código foi escrito por uma IA.",
        "Que o banco de dados está vazio."
      ],
      correctAnswer: 1
    },
    {
      id: "q4_4",
      question: "Por que o Mutation Testing utiliza a AST (Abstract Syntax Tree) do PHP?",
      options: [
        "Para mudar as cores do terminal.",
        "Para realizar alterações lógicas inteligentes (ex: trocar + por -) sem quebrar a sintaxe do ficheiro.",
        "Para acelerar o download de pacotes do Composer.",
        "Para encriptar o código fonte."
      ],
      correctAnswer: 1
    },
    {
      id: "q4_5",
      question: "O que o parâmetro '--git-diff-filter' faz ao rodar o Infection?",
      options: [
        "Apaga o repositório Git.",
        "Foca a auditoria apenas nos ficheiros que foram alterados recentemente, otimizando o tempo de execução.",
        "Muda o branch do projeto.",
        "Cria um novo commit automaticamente."
      ],
      correctAnswer: 1
    },
    {
      id: "q4_6",
      question: "Qual destas é uma mutação comum realizada pela ferramenta?",
      options: [
        "Inversão de operadores de comparação (ex: >= para <).",
        "Troca de aspas simples por duplas.",
        "Mudança de nomes de variáveis locais.",
        "Adição de comentários no código."
      ],
      correctAnswer: 0,
      explanation: "Inverter lógicas booleanas e comparativas é a forma mais eficaz de testar se os teus testes validam limites e condições."
    }
  ]
};

import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "jv-mq15",
  title: "Quiz: JVM ClassLoaders e Segurança",
  passingScore: 80,
  questions: [
    {
      id: "q15_1",
      question: "Qual o princípio fundamental da delegação de ClassLoaders?",
      options: [
        "Carregar a classe o mais rápido possível",
        "Pedir ao pai para carregar antes de tentar carregar a si próprio",
        "Ignorar as classes do sistema",
        "Mudar o bytecode em runtime"
      ],
      correctAnswer: 1
    },
    {
      id: "q15_2",
      question: "O que é o 'Metaspace'?",
      options: [
        "Onde vivem os objetos",
        "A área de memória (Non-Heap) que guarda metadados das classes",
        "Uma base de dados em memória",
        "O cache do JIT"
      ],
      correctAnswer: 1
    },
    {
      id: "q15_3",
      question: "Qual ClassLoader carrega as bibliotecas internas do JRE (ex: java.lang.*)?",
      options: ["System", "Platform", "Bootstrap", "Application"],
      correctAnswer: 2
    },
    {
      id: "q15_4",
      question: "Um erro 'ClassNotFoundException' ocorre em qual fase?",
      options: ["Runtime", "Compilação", "Linkagem", "Instalação"],
      correctAnswer: 0
    },
    {
      id: "q15_5",
      question: "Como o 'Hot Swap' (recarregamento de código) é possível em servidores Java?",
      options: [
        "Reiniciando a CPU",
        "Criando um novo ClassLoader para a nova versão das classes",
        "Editando o ficheiro .class no disco",
        "Não é possível em Java"
      ],
      correctAnswer: 1
    },
    {
      id: "q15_6",
      question: "O que o 'Verifier' da JVM faz?",
      options: [
        "Muda o tema do VS Code",
        "Garante que o bytecode carregado é válido e não viola as regras de segurança da JVM",
        "Apaga variáveis nulas",
        "Envia o código para a nuvem"
      ],
      correctAnswer: 1
    }
  ]
};
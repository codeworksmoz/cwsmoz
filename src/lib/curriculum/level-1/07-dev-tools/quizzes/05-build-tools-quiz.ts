import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "dt-q5",
  title: "Quiz: Build Tools e Bundlers",
  passingScore: 70,
  questions: [
    {
      id: "q5_1",
      question: "O que é 'Tree Shaking'?",
      options: ["Mudar o nome das pastas", "Remover código não utilizado do bundle final", "Um erro de compilação", "Acelerar o download de fontes"],
      correctAnswer: 1
    },
    {
      id: "q5_2",
      question: "Por que o Vite é mais rápido que o Webpack no desenvolvimento?",
      options: ["Porque usa menos RAM", "Porque utiliza ES Modules nativos no browser durante o dev", "Porque foi escrito em Rust", "Porque não aceita imagens"],
      correctAnswer: 1
    },
    {
      id: "q5_3",
      question: "Qual o objetivo do processo de 'Minificação'?",
      options: ["Tornar o código mais seguro", "Reduzir o tamanho dos ficheiros removendo espaços e comentários", "Aumentar a legibilidade", "Criar cópias de segurança"],
      correctAnswer: 1
    },
    {
      id: "q5_4",
      question: "O que são 'Source Maps'?",
      options: ["Mapas de calor do site", "Ficheiros que ligam o código final ao código original para facilitar o debugging", "A lista de rotas do servidor", "Ficheiros de tradução"],
      correctAnswer: 1
    },
    {
      id: "q5_5",
      question: "O que o Webpack utiliza para processar ficheiros que não são JS (como imagens ou CSS)?",
      options: ["Drivers", "Plugins", "Loaders", "Scripts"],
      correctAnswer: 2
    },
    {
      id: "q5_6",
      question: "Em qual ambiente o 'Bundling' total é estritamente necessário?",
      options: ["Desenvolvimento local", "Produção (para o utilizador final)", "Apenas em servidores Windows", "Nunca é necessário"],
      correctAnswer: 1
    }
  ]
};
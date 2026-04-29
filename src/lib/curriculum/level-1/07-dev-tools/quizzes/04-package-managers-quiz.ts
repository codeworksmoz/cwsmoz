import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "dt-q4",
  title: "Quiz: Gestores de Pacotes (NPM/PNPM)",
  passingScore: 70,
  questions: [
    {
      id: "q4_1",
      question: "Qual o principal benefício do PNPM em relação ao NPM tradicional?",
      options: ["Ele é escrito em Python", "Usa Hard Links para não duplicar pacotes no disco", "Não precisa de internet", "Muda a cor do terminal"],
      correctAnswer: 1
    },
    {
      id: "q4_2",
      question: "Para que serve o ficheiro 'package-lock.json'?",
      options: ["Para encriptar o código", "Para garantir que toda a equipa instala as mesmas versões exatas", "É um ficheiro de backup temporário", "Guarda as senhas do utilizador"],
      correctAnswer: 1
    },
    {
      id: "q4_3",
      question: "Qual comando do NPM verifica vulnerabilidades de segurança?",
      options: ["npm check", "npm secure", "npm audit", "npm verify"],
      correctAnswer: 2
    },
    {
      id: "q4_4",
      question: "O que o comando 'npm install --save-dev' faz?",
      options: ["Instala um pacote globalmente", "Instala um pacote apenas para o ambiente de desenvolvimento", "Instala e publica o código", "Apaga a pasta node_modules"],
      correctAnswer: 1
    },
    {
      id: "q4_5",
      question: "Onde ficam guardados os binários de ferramentas instaladas via NPM no projeto?",
      options: ["Na raiz do disco C:", "Dentro de node_modules/.bin", "Na pasta public", "No registro do Windows"],
      correctAnswer: 1
    },
    {
      id: "q4_6",
      question: "Qual a diferença entre 'npm install' e 'npm ci'?",
      options: ["Nenhuma", "npm ci é para ambientes de CI/CD e é mais rigoroso com o lock file", "npm install é mais rápido", "npm ci apaga o sistema operativo"],
      correctAnswer: 1
    }
  ]
};
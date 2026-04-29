import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "dt-q6",
  title: "Quiz: Linters e Formatters",
  passingScore: 70,
  questions: [
    {
      id: "q6_1",
      question: "Qual o papel principal do ESLint?",
      options: ["Mudar a cor do código", "Análise estática para encontrar erros de lógica e bugs potenciais", "Comprimir imagens", "Hospedar o site"],
      correctAnswer: 1
    },
    {
      id: "q6_2",
      question: "O Prettier é focado em quê?",
      options: ["Performance", "Segurança", "Estilo e formatação visual consistente do código", "Testes unitários"],
      correctAnswer: 2
    },
    {
      id: "q6_3",
      question: "O que acontece se o teu código não seguir uma regra 'error' do ESLint num pipeline de CI?",
      options: ["Nada, o pipeline segue", "O build deve falhar, impedindo o deploy", "O GitHub corrige o erro sozinho", "O programador é banido"],
      correctAnswer: 1
    },
    {
      id: "q6_4",
      question: "Onde se guardam as configurações personalizadas do ESLint?",
      options: ["No disco rígido central", "No ficheiro .eslintrc ou package.json", "No código fonte de cada função", "Numa base de dados externa"],
      correctAnswer: 1
    },
    {
      id: "q6_5",
      question: "O que o comando 'prettier --write .' faz?",
      options: ["Apaga o projeto", "Lê o código e reescreve todos os ficheiros seguindo o padrão de estilo", "Cria um novo ficheiro README", "Envia o código para o GitHub"],
      correctAnswer: 1
    },
    {
      id: "q6_6",
      question: "Por que não deves usar o ESLint para formatação de espaços e vírgulas?",
      options: ["Porque ele não sabe fazer", "Para evitar conflitos com o Prettier e focar o Linter apenas em erros de código", "Porque é mais lento", "Porque o Prettier é pago"],
      correctAnswer: 1
    }
  ]
};
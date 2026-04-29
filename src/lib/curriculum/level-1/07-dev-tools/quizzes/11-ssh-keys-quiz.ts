import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "dt-q11",
  title: "Quiz: Segurança e SSH",
  passingScore: 70,
  questions: [
    {
      id: "q11_1",
      question: "Qual o componente que NUNCA deve sair do teu computador?",
      options: ["Chave Pública", "Chave Privada", "Endereço IP", "Nome do utilizador"],
      correctAnswer: 1
    },
    {
      id: "q11_2",
      question: "Onde se guarda a Chave Pública no GitHub?",
      options: ["No repositório .git", "Nas definições de perfil (SSH Keys)", "Num comentário do código", "Não é necessário guardar"],
      correctAnswer: 1
    }
  ]
};
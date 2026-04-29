import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "git-q21",
  title: "Quiz: Segurança e Assinaturas",
  passingScore: 70,
  questions: [
    {
      id: "q21_1",
      question: "Qual o benefício de assinar commits com GPG?",
      options: [
        "Acelerar o push",
        "Garantir a autenticidade do autor (Selo Verified no GitHub)",
        "Esconder o código de terceiros",
        "Remover a necessidade de chaves SSH"
      ],
      correctAnswer: 1
    },
    {
      id: "q21_2",
      question: "Onde deves guardar a tua Chave Privada SSH?",
      options: [
        "Num repositório público",
        "Apenas no teu computador, num local seguro e nunca partilhado",
        "Enviada por email para a equipa",
        "No ficheiro .gitignore"
      ],
      correctAnswer: 1
    }
  ]
};
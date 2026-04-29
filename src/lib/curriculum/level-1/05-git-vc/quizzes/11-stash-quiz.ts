import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "git-q11",
  title: "Quiz: Git Stash",
  passingScore: 70,
  questions: [
    {
      id: "q11_1",
      question: "Qual comando limpa o diretório de trabalho e guarda as alterações num 'bolso' temporário?",
      options: ["git clean", "git stash", "git save", "git pocket"],
      correctAnswer: 1
    },
    {
      id: "q11_2",
      question: "Qual a diferença entre 'git stash pop' e 'git stash apply'?",
      options: [
        "Nenhuma",
        "Pop recupera e remove da lista; Apply apenas recupera e mantém na lista",
        "Apply é mais rápido",
        "Pop é apenas para commits"
      ],
      correctAnswer: 1
    }
  ]
};
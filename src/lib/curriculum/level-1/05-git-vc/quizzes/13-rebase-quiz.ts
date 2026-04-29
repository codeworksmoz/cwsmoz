import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "git-q13",
  title: "Quiz: Rebase e Histórico",
  passingScore: 70,
  questions: [
    {
      id: "q13_1",
      question: "Qual a principal vantagem do Rebase sobre o Merge?",
      options: [
        "É mais seguro para ramos públicos",
        "Gera um histórico linear e mais limpo",
        "Apaga os erros automaticamente",
        "Não necessita de acesso à internet"
      ],
      correctAnswer: 1
    },
    {
      id: "q13_2",
      question: "Por que deves evitar Rebase em ramos que já foram partilhados com outros desenvolvedores?",
      options: [
        "Porque o Git proíbe",
        "Porque reescreve o histórico, o que causará inconsistências graves para a equipa",
        "Porque gasta muita memória",
        "Não existe contra-indicação"
      ],
      correctAnswer: 1
    }
  ]
};
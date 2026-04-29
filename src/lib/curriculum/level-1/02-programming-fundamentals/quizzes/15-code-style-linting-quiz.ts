import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t15-quiz",
  title: "Quiz: Estilo e Qualidade de Código",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual o significado da sigla DRY na engenharia de software?",
      options: ["Do Real Yield", "Don't Repeat Yourself", "Data Real Yield", "Digital Runtime Yearly"],
      correctAnswer: 1,
      explanation: "DRY foca em não duplicar lógica. Se tens código repetido, tens dois lugares para corrigir bugs e dois lugares para atualizar funcionalidades."
    },
    {
      id: "q2",
      question: "O princípio KISS (Keep It Simple, Stupid) sugere que:",
      options: [
        "Devemos usar as tecnologias mais complexas sempre",
        "A solução mais simples é geralmente a mais fácil de manter e menos propensa a erros",
        "O código deve ser escrito apenas em maiúsculas",
        "Não devemos usar comentários"
      ],
      correctAnswer: 1,
      explanation: "Simplicidade é uma característica de software de alta qualidade. Sistemas complexos são mais difíceis de testar e compreender."
    },
    {
      id: "q3",
      question: "Para que serve um 'Linter'?",
      options: [
        "Para aumentar a velocidade da internet",
        "Para analisar o código estaticamente e encontrar erros de estilo e bugs potenciais",
        "Para traduzir código para outra língua",
        "Para fazer o deploy automático"
      ],
      correctAnswer: 1,
      explanation: "Linters são guardiões da qualidade. Eles avisam-te se esqueceres uma variável ou se escreveres código que não segue o padrão da equipa."
    },
    {
      id: "q4",
      question: "Qual destas nomenclaturas segue o padrão camelCase?",
      options: ["user_name", "UserName", "userName", "user-name"],
      correctAnswer: 2,
      explanation: "camelCase: a primeira letra é minúscula e as iniciais das palavras seguintes são maiúsculas."
    },
    {
      id: "q5",
      question: "Por que se diz que 'Código é escrito para humanos lerem'?",
      options: [
        "Porque o computador não sabe ler",
        "Porque o tempo gasto a ler e manter código é muito maior do que o tempo gasto a escrevê-lo",
        "Porque é uma lei internacional",
        "Para que o Google consiga indexar o código"
      ],
      correctAnswer: 1,
      explanation: "O custo de um software está na sua manutenção. Código confuso é código caro e perigoso."
    },
    {
      id: "q6",
      question: "Qual a recomendação master sobre comentários no código?",
      options: [
        "Comentar cada linha do programa",
        "Nunca usar comentários",
        "Comentar o 'porquê' de uma decisão complexa, e não 'o que' a linha faz",
        "Escrever comentários apenas em Inglês"
      ],
      correctAnswer: 2,
      explanation: "O código deve explicar o que faz através de bons nomes. Comentários servem para explicar o contexto ou razões não óbvias."
    }
  ]
};

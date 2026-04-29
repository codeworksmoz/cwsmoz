import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t3-quiz",
  title: "Quiz: Strings e Comunicação de Dados",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual o índice da letra 'D' na string 'CODEWORKS'?",
      options: ["1", "2", "3", "0"],
      correctAnswer: 1,
      explanation: "A indexação é base-zero: C(0), O(1), D(2). Portanto, a letra D está no índice 2, que é a terceira posição."
    },
    {
      id: "q2",
      question: "O que faz a função trim() na maioria das linguagens modernas?",
      options: [
        "Corta a string ao meio",
        "Remove espaços em branco apenas no início",
        "Remove espaços em branco no início e no fim do texto",
        "Converte o texto para minúsculas"
      ],
      correctAnswer: 2,
      explanation: "O método trim() é essencial para limpar inputs de utilizadores, removendo espaços acidentais antes e depois do conteúdo real."
    },
    {
      id: "q3",
      question: "Qual o caractere de escape usado para criar uma nova linha no terminal?",
      options: ["\\t", "\\r", "\\n", "\\l"],
      correctAnswer: 2,
      explanation: "\\n significa 'New Line' e é o padrão universal para quebras de linha em strings."
    },
    {
      id: "q4",
      question: "O que acontece ao tentar somar um número e uma string no JavaScript (ex: 5 + '10')?",
      options: [
        "Resultado é 15 (número)",
        "Resultado é '510' (string)",
        "Ocorre um erro fatal",
        "O resultado é NaN"
      ],
      correctAnswer: 1,
      explanation: "O JavaScript realiza uma 'Coerção de Tipo', convertendo o número para string e concatenando os dois valores."
    },
    {
      id: "q5",
      question: "Por que se prefere a Interpolação (Template Literals) sobre a Concatenação (+)?",
      options: [
        "Porque gasta menos bateria",
        "Porque permite escrever o texto de forma natural e injetar variáveis com clareza",
        "Porque a concatenação foi desativada nos browsers novos",
        "Não existe preferência, são idênticos"
      ],
      correctAnswer: 1,
      explanation: "A interpolação torna o código muito mais legível e fácil de manter, especialmente em frases longas com muitas variáveis."
    },
    {
      id: "q6",
      question: "Em linguagens como Python e Java, o que significa dizer que Strings são IMUTÁVEIS?",
      options: [
        "Que não podem ser apagadas",
        "Que uma vez criada, a string original não muda; qualquer alteração gera uma nova string na memória",
        "Que o texto deve ser escrito apenas em inglês",
        "Que as strings são guardadas no disco rígido permanentemente"
      ],
      correctAnswer: 1,
      explanation: "Imutabilidade é um conceito de segurança e performance: para 'mudar' uma string, o motor cria uma cópia nova com a alteração solicitada."
    }
  ]
};

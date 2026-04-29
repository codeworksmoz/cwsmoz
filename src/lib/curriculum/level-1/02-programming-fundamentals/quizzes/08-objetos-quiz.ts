import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t8-quiz",
  title: "Quiz: Objetos e Dicionários Master",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual a diferença fundamental entre um Array e um Objeto?",
      options: [
        "Arrays são mais rápidos que objetos",
        "Arrays usam índices numéricos; Objetos usam chaves nomeadas",
        "Objetos não podem guardar números",
        "Arrays são usados apenas em JavaScript"
      ],
      correctAnswer: 1,
      explanation: "Arrays são estruturas ordenadas por posição. Objetos são coleções de pares chave-valor, ideais para dados com nomes específicos."
    },
    {
      id: "q2",
      question: "Na Notação de Ponto (Dot Notation), como acederias à idade de um objeto 'usuario'?",
      options: ["usuario->idade", "usuario[idade]", "usuario.idade", "usuario.get('idade')"],
      correctAnswer: 2,
      explanation: "A notação de ponto é a forma mais limpa e direta de aceder a propriedades quando conhecemos o nome da chave."
    },
    {
      id: "q3",
      question: "Quando deves preferir a Notação de Colchetes (Bracket Notation)?",
      options: [
        "Sempre, porque é mais segura",
        "Apenas quando o objeto é muito grande",
        "Quando o nome da chave está guardado numa variável ou contém caracteres especiais",
        "Quando queremos apagar o objeto"
      ],
      correctAnswer: 2,
      explanation: "Se o nome da propriedade for dinâmico (ex: vem de um input), apenas os colchetes permitem o acesso: objeto[variavelChave]."
    },
    {
      id: "q4",
      question: "O que acontece se tentares aceder a uma chave que não existe num objeto em JavaScript?",
      options: [
        "O programa crasha imediatamente",
        "O browser reinicia",
        "Retorna o valor 'undefined'",
        "Cria a chave com o valor zero"
      ],
      correctAnswer: 2,
      explanation: "Diferente de algumas linguagens que lançam erro, o JS retorna 'undefined', permitindo verificações de existência."
    },
    {
      id: "q5",
      question: "O que é uma 'Nested Object' (Objeto Aninhado)?",
      options: [
        "Um objeto que foi apagado",
        "Um objeto que contém outro objeto como valor de uma das suas chaves",
        "Um objeto que só tem uma propriedade",
        "Um erro de sintaxe"
      ],
      correctAnswer: 1,
      explanation: "Aninhamento permite criar hierarquias complexas, como um utilizador que tem uma propriedade 'endereco' que é ela própria um objeto."
    },
    {
      id: "q6",
      question: "Qual a complexidade de tempo para encontrar um valor num objeto pela sua chave?",
      options: ["O(n) - Linear", "O(n²) - Quadrática", "O(1) - Constante", "O(log n) - Logarítmica"],
      correctAnswer: 2,
      explanation: "Graças às Tabelas Hash, o acesso via chave é quase instantâneo, independentemente do tamanho do objeto."
    }
  ]
};
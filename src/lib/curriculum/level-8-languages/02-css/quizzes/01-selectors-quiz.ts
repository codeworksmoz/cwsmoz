import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "css-mq1",
  title: "Quiz: Seletores de Elite e Especificidade",
  passingScore: 80,
  questions: [
    {
      id: "q1_1",
      question: "Qual o peso de especificidade do seletor 'div.card#main:hover'?",
      options: ["111 pontos", "121 pontos", "21 pontos", "102 pontos"],
      correctAnswer: 1,
      explanation: "Cálculo: ID (#main) = 100 + Classe (.card) = 10 + Pseudo-classe (:hover) = 10 + Elemento (div) = 1. Total: 121."
    },
    {
      id: "q1_2",
      question: "Qual a diferença fundamental entre :is() e :where()?",
      options: [
        ":is() é para IDs e :where() para classes.",
        ":is() herda a maior especificidade dos seus argumentos, enquanto :where() tem sempre especificidade ZERO.",
        ":where() é processado antes da renderização do DOM.",
        "Nenhuma, são apenas apelidos para a mesma função."
      ],
      correctAnswer: 1,
      explanation: ":where() foi criado especificamente para permitir agrupamentos que não dificultam a sobreposição de estilos posterior."
    },
    {
      id: "q1_3",
      question: "O seletor relacional :has() permite selecionar o quê?",
      options: [
        "Apenas elementos filhos.",
        "Um elemento baseado nos seus descendentes, irmãos ou estado (Parent Selector).",
        "Apenas elementos que possuem o atributo 'data-has'.",
        "Somente elementos ocultos."
      ],
      correctAnswer: 1,
      explanation: ":has() permite olhar 'para dentro' ou 'para a frente' para decidir se o elemento atual deve ser selecionado."
    },
    {
      id: "q1_4",
      question: "O que acontece se um dos seletores dentro de :is() for inválido?",
      options: [
        "O browser ignora a regra inteira.",
        "O browser ignora apenas o seletor inválido e processa os restantes (forgiving selector).",
        "O site para de carregar o CSS.",
        "Ocorre um erro no console do desenvolvedor."
      ],
      correctAnswer: 1,
      explanation: "Tanto :is() como :where() utilizam listas de seletores tolerantes, impedindo que um erro de sintaxe num item quebre o grupo todo."
    },
    {
      id: "q1_5",
      question: "Qual seletor tem maior prioridade: 'body .btn' ou ':where(body) .btn'?",
      options: [
        "body .btn (Peso 11)",
        ":where(body) .btn (Peso 10)",
        "Ambos têm o mesmo peso.",
        "Depende da ordem no ficheiro."
      ],
      correctAnswer: 0,
      explanation: "No segundo caso, o 'body' dentro do :where() conta como 0, sobrando apenas o peso 10 da classe .btn."
    },
    {
      id: "q1_6",
      question: "Como se seleciona um <section> que contém um <h2> IMEDIATAMENTE seguido por um <p>?",
      options: [
        "section:has(h2 + p)",
        "section h2 + p",
        "section > h2 > p",
        "section:is(h2, p)"
      ],
      correctAnswer: 0,
      explanation: "A sintaxe :has(h2 + p) verifica a existência da relação entre os descendentes para aplicar o estilo na section."
    }
  ]
};
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "cs-q12",
  title: "Quiz: Síntese e Portas Universais",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Por que as portas NAND e NOR são chamadas de 'Universais'?",
      options: [
        "Porque funcionam em qualquer computador do mundo",
        "Porque podem ser usadas para construir qualquer outra porta lógica",
        "Porque consomem menos energia que as outras",
        "Porque foram as primeiras a ser inventadas"
      ],
      correctAnswer: 1,
      explanation: "A universalidade significa que, através de combinações criativas, uma porta NAND pode atuar como um inversor (NOT), uma porta AND, uma OR, etc."
    },
    {
      id: "q2",
      question: "O que é o processo de 'Minimização Lógica'?",
      options: [
        "Reduzir o tamanho físico do chip",
        "Simplificar uma expressão booleana para usar o menor número de portas possível",
        "Apagar as variáveis que não estamos a usar",
        "Baixar a voltagem do processador"
      ],
      correctAnswer: 1,
      explanation: "Minimizar a lógica reduz a complexidade do hardware, o que resulta em circuitos mais rápidos, mais frescos e mais baratos de produzir."
    },
    {
      id: "q3",
      question: "O que representa o 'Propagation Delay' num circuito sintetizado?",
      options: [
        "O tempo que a luz demora a chegar ao monitor",
        "O tempo que o sinal elétrico demora a atravessar as portas lógicas",
        "O atraso no download de um ficheiro",
        "O tempo de boot do sistema operativo"
      ],
      correctAnswer: 1,
      explanation: "Cada porta lógica introduz um pequeno atraso. Em síntese lógica, tentamos reduzir o caminho crítico para que a CPU possa rodar a frequências (GHz) mais altas."
    },
    {
      id: "q4",
      question: "Na técnica de Soma de Produtos (SOP), quais linhas da tabela da verdade são utilizadas?",
      options: [
        "Apenas as linhas onde o resultado é 0",
        "Apenas as linhas onde o resultado é 1",
        "Todas as linhas da tabela",
        "Apenas a primeira e a última linha"
      ],
      correctAnswer: 1,
      explanation: "A SOP foca-se nos casos de sucesso (1). Cada linha vencedora é um 'produto' (AND) e somamos (OR) todas para obter a função final."
    }
  ]
};

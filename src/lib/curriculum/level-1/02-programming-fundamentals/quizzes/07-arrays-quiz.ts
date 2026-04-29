import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t7-quiz",
  title: "Quiz: Domínio de Arrays e Coleções",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual o índice do primeiro elemento de um array em quase todas as linguagens modernas?",
      options: ["1", "0", "-1", "Depende da memória disponível"],
      correctAnswer: 1,
      explanation: "A indexação base-zero é o padrão. O índice representa o deslocamento do início do array."
    },
    {
      id: "q2",
      question: "Se um array tem 10 elementos, qual é o índice do último elemento?",
      options: ["10", "11", "9", "0"],
      correctAnswer: 2,
      explanation: "Como começamos no 0, o décimo elemento estará na posição 9. A fórmula é sempre: tamanho - 1."
    },
    {
      id: "q3",
      question: "O que acontece ao usar o método '.pop()' (JS) ou '.pop()' (Python) num array?",
      options: [
        "Adiciona um item no início",
        "Remove e retorna o último elemento da lista",
        "Apaga a lista inteira",
        "Inverte a ordem dos itens"
      ],
      correctAnswer: 1,
      explanation: "O 'pop' é a operação clássica de pilha para remover o item que está no final da coleção."
    },
    {
      id: "q4",
      question: "Por que aceder a um elemento via índice (ex: lista[500]) é extremamente rápido?",
      options: [
        "Porque o computador adivinha onde está o dado",
        "Porque os arrays ocupam blocos contíguos de memória, permitindo calcular o endereço exato instantaneamente",
        "Porque o JavaScript é uma linguagem mágica",
        "Porque os arrays são sempre pequenos"
      ],
      correctAnswer: 1,
      explanation: "A estrutura contígua permite que a CPU chegue a qualquer posição com um simples cálculo matemático (Endereço Inicial + Índice * Tamanho do Tipo)."
    },
    {
      id: "q5",
      question: "Qual a diferença entre '.push()' e '.unshift()' em JavaScript?",
      options: [
        "Push adiciona no fim, Unshift adiciona no início",
        "Unshift é mais rápido que o Push",
        "Push é para números e Unshift para strings",
        "São sinónimos"
      ],
      correctAnswer: 0,
      explanation: "Push empurra para o final. Unshift insere no topo da lista, o que exige que o browser 'empurre' todos os outros itens para a frente."
    },
    {
      id: "q6",
      question: "O que acontece se tentares aceder a um índice negativo (ex: lista[-1]) no JavaScript?",
      options: [
        "Acede ao último elemento",
        "Retorna 'undefined'",
        "O programa crasha imediatamente",
        "O computador reinicia"
      ],
      correctAnswer: 1,
      explanation: "Diferente de Python (onde -1 é o último), no JS índices são propriedades. Se não existe a propriedade '-1', o resultado é undefined."
    }
  ]
};

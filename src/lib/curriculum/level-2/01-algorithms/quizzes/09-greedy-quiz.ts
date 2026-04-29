
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "alg-q9",
  title: "Quiz: Algoritmos Gulosos",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual a filosofia central de um algoritmo Guloso (Greedy)?",
      options: [
        "Analisar todas as possibilidades antes de decidir",
        "Fazer a melhor escolha local imediata em cada passo",
        "Escolher o caminho mais longo",
        "Usar o máximo de memória possível"
      ],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "Um algoritmo guloso garante sempre a solução ótima global?",
      options: [
        "Sim, é a forma mais eficiente de encontrar a melhor solução",
        "Não, pode ficar preso em ótimos locais e ignorar o melhor caminho global",
        "Apenas em problemas matemáticos",
        "Sim, se o hardware for potente"
      ],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Qual destes algoritmos utiliza a estratégia gulosa?",
      options: ["Merge Sort", "Dijkstra (Caminho Curto)", "Busca Binária", "Bubble Sort"],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "A compressão de Huffman, usada em ZIPs, é gulosa? Porquê?",
      options: [
        "Não, é aleatória",
        "Sim, associa sempre o código mais curto ao caractere mais frequente no momento",
        "Sim, porque apaga dados para poupar espaço",
        "Não, é baseada em Programação Dinâmica"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Para o problema do 'Troco de Moedas' moçambicano (1, 2, 5, 10, 20, 50 Meticais), o algoritmo guloso funciona?",
      options: [
        "Sim, pois os valores das moedas são múltiplos canónicos",
        "Não, moedas moçambicanas exigem recursão",
        "Apenas para notas de 100",
        "Apenas se o troco for ímpar"
      ],
      correctAnswer: 0
    },
    {
      id: "q6",
      question: "Qual a vantagem competitiva da estratégia gulosa?",
      options: [
        "Sempre encontra a melhor solução",
        "Simplicidade de implementação e alta velocidade de execução",
        "Usa pouca bateria no telemóvel",
        "É imune a erros de rede"
      ],
      correctAnswer: 1
    }
  ]
};


import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "os-q17",
  title: "Quiz: Binary Memory Layout",
  passingScore: 70,
  questions: [
    {
      id: "q17_1",
      question: "Onde ficam guardadas as constantes e instruções do programa?",
      options: ["Heap", "Stack", "Text Segment", "BSS"],
      correctAnswer: 2
    },
    {
      id: "q17_2",
      question: "Qual a diferença entre .data e .bss?",
      options: [".data é para inicializados; .bss para não inicializados", "Nenhuma", ".bss é para código", ".data é para a pilha"],
      correctAnswer: 0
    },
    {
      id: "q17_3",
      question: "A Stack cresce tipicamente para qual direção?",
      options: ["Cima", "Baixo (Endereços menores)", "Esquerda", "Não cresce"],
      correctAnswer: 1
    },
    {
      id: "q17_4",
      question: "O que acontece ao Heap e à Stack conforme o programa corre?",
      options: ["Mantêm-se fixos", "Crescem um em direção ao outro", "Apagam-se", "São movidos para o disco"],
      correctAnswer: 1
    },
    {
      id: "q17_5",
      question: "O Program Counter (PC) aponta para qual segmento?",
      options: ["Data", "Stack", "Text", "Heap"],
      correctAnswer: 2
    },
    {
      id: "q17_6",
      question: "Variáveis globais 'static' em C ficam em qual segmento?",
      options: ["Stack", "Data/BSS", "Heap", "Registers"],
      correctAnswer: 1
    }
  ]
};

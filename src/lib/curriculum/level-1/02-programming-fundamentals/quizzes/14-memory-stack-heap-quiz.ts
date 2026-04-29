import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t14-quiz",
  title: "Quiz: Domínio de Memória (Stack vs Heap)",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Onde são guardadas as variáveis locais e primitivas (como int ou bool) num sistema de alta performance?",
      options: ["No Disco Rígido", "Na Stack (Pilha)", "No Heap (Monte)", "Na Placa de Vídeo"],
      correctAnswer: 1,
      explanation: "A Stack é desenhada para dados pequenos e de vida curta, sendo limpa automaticamente assim que a função termina."
    },
    {
      id: "q2",
      question: "Qual área de memória é maior e permite alocação dinâmica de objetos e arrays?",
      options: ["Stack", "CPU Cache", "Heap", "Registers"],
      correctAnswer: 2,
      explanation: "O Heap é um grande reservatório de memória usado para dados complexos que precisam de um tamanho flexível."
    },
    {
      id: "q3",
      question: "O que caracteriza o modelo LIFO na Stack?",
      options: [
        "O primeiro dado a entrar é o primeiro a sair",
        "O último dado a entrar é o primeiro a ser removido",
        "Os dados são escolhidos aleatoriamente",
        "Os dados nunca são removidos"
      ],
      correctAnswer: 1,
      explanation: "LIFO (Last In, First Out). Pensa numa pilha de pratos: só removes o prato que puseste por cima por último."
    },
    {
      id: "q4",
      question: "O que é o 'Garbage Collector'?",
      options: [
        "Um vírus que apaga ficheiros",
        "Um sistema que limpa a RAM limpando dados da Stack",
        "Um processo automático que identifica e remove objetos não utilizados no Heap",
        "Uma ferramenta para organizar pastas"
      ],
      correctAnswer: 2,
      explanation: "O GC é o 'faxineiro' de linguagens como JS, Python e Java. Ele liberta espaço no Heap que o teu código já não está a usar."
    },
    {
      id: "q5",
      question: "O que acontece tecnicamente num 'Stack Overflow'?",
      options: [
        "O disco rígido fica sem espaço",
        "A memória Stack esgota-se, geralmente por recursão infinita",
        "A internet fica demasiado lenta",
        "O computador desliga para arrefecer"
      ],
      correctAnswer: 1,
      explanation: "A Stack tem um tamanho fixo e pequeno. Se chamares uma função dentro de outra infinitamente, a 'pilha' transborda e o programa crash."
    },
    {
      id: "q6",
      question: "Por que aceder a dados na Stack é mais rápido do que no Heap?",
      options: [
        "Porque a Stack é feita de ouro",
        "Porque o CPU tem um ponteiro direto para o topo da Stack, sem necessidade de procurar endereços complexos",
        "Porque o Heap é guardado na internet",
        "Não existe diferença de velocidade"
      ],
      correctAnswer: 1,
      explanation: "O acesso à Stack é uma operação de CPU direta e simples. No Heap, o sistema tem de seguir ponteiros e gerir fragmentação, o que introduz latência."
    }
  ]
};

import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "js-mq8",
  title: "Quiz Master: Observers APIs Internals",
  passingScore: 80,
  questions: [
    {
      id: "q8_1",
      question: "Qual observador é o mais indicado para implementar 'Lazy Loading' de imagens de forma performática?",
      options: [
        "MutationObserver",
        "ResizeObserver",
        "IntersectionObserver",
        "PerformanceObserver"
      ],
      correctAnswer: 2,
      explanation: "O IntersectionObserver foi desenhado para detectar a visibilidade de elementos, sendo a ferramenta padrão para carregamento sob demanda."
    },
    {
      id: "q8_2",
      question: "O que acontece se um MutationObserver monitorizar o 'body' com 'subtree: true' e fizermos uma alteração profunda no DOM?",
      options: [
        "O browser trava imediatamente.",
        "O observador recebe uma lista de todas as mutações que ocorreram naquela árvore.",
        "Apenas a mutação no nó raiz é reportada.",
        "As mutações são ignoradas para evitar loops."
      ],
      correctAnswer: 1
    },
    {
      id: "q8_3",
      question: "Para que serve a opção 'threshold' no IntersectionObserver?",
      options: [
        "Definir a cor de fundo do elemento.",
        "Definir a percentagem de visibilidade necessária para disparar o callback.",
        "Limitar a velocidade do processador.",
        "Contar o número de elementos no DOM."
      ],
      correctAnswer: 1
    },
    {
      id: "q8_4",
      question: "Diferente do evento 'resize' da janela, o ResizeObserver monitoriza:",
      options: [
        "Apenas a bateria do dispositivo.",
        "As mudanças de dimensão de elementos específicos do DOM.",
        "A resolução total do monitor.",
        "A velocidade da conexão de rede."
      ],
      correctAnswer: 1,
      explanation: "Isto permite que componentes reajam individualmente ao espaço disponível, independentemente do tamanho da janela do browser."
    },
    {
      id: "q8_5",
      question: "É uma boa prática chamar 'unobserve()' após um elemento cumprir o seu papel (ex: animação de entrada)? Porquê?",
      options: [
        "Não, deve-se deixar observando para sempre.",
        "Sim, para libertar recursos do sistema e evitar processamento inútil de eventos que já não interessam.",
        "Apenas se o site for mobile.",
        "Não, o Garbage Collector faz isso sozinho."
      ],
      correctAnswer: 1
    },
    {
      id: "q8_6",
      question: "Os callbacks das Observers APIs são síncronos ou assíncronos?",
      options: [
        "Síncronos, bloqueiam o próximo frame de renderização.",
        "Assíncronos, são processados pelo Event Loop após a execução do script atual.",
        "Sempre síncronos por segurança.",
        "Depende da versão do JavaScript."
      ],
      correctAnswer: 1,
      explanation: "O processamento assíncrono garante que as observações não prejudiquem a fluidez das interações do utilizador (Input Response)."
    }
  ]
};

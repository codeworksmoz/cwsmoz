import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "css-mq16",
  title: "Quiz: Performance e Auditoria de Estilos",
  passingScore: 80,
  questions: [
    {
      id: "q16_1",
      question: "O que é 'Critical CSS'?",
      options: [
        "CSS que contém erros graves de sintaxe",
        "O conjunto mínimo de estilos necessários para renderizar o topo da página (above the fold) instantaneamente",
        "CSS usado apenas em dispositivos móveis",
        "A versão final minificada do ficheiro"
      ],
      correctAnswer: 1,
      explanation: "Extrair o Critical CSS e colocá-lo inline no <head> elimina o bloqueio de renderização do ficheiro externo."
    },
    {
      id: "q16_2",
      question: "A propriedade content-visibility: auto melhora a performance porquê?",
      options: [
        "Comprime o texto do site",
        "Ignora a renderização de elementos que estão fora da área visível (off-screen)",
        "Aumenta a velocidade do JavaScript",
        "Remove imagens pesadas automaticamente"
      ],
      correctAnswer: 1
    },
    {
      id: "q16_3",
      question: "Qual o impacto de seletores muito profundos (ex: div > ul > li > a)?",
      options: [
        "Nenhum, o browser é rápido",
        "Aumenta o tempo de 'Recalculate Style' em cada mudança do DOM",
        "Melhora a especificidade",
        "Torna o código mais legível"
      ],
      correctAnswer: 1
    },
    {
      id: "q16_4",
      question: "O que o 'Layout Thrashing' causa no browser?",
      options: [
        "Aceleração de rede",
        "Reflows forçados e repetitivos que bloqueiam a thread principal",
        "Limpeza de cache",
        "Aumento do brilho do ecrã"
      ],
      correctAnswer: 1
    },
    {
      id: "q16_5",
      question: "Para que serve a ferramenta Lighthouse no contexto de CSS?",
      options: [
        "Para mudar as cores do site",
        "Para identificar CSS não utilizado e medir métricas de estabilidade visual (CLS)",
        "Para escrever código automaticamente",
        "Para hospedar o ficheiro .css"
      ],
      correctAnswer: 1
    },
    {
      id: "q16_6",
      question: "O uso de @import dentro de ficheiros CSS externos é recomendado?",
      options: [
        "Sim, organiza o código",
        "Não, pois cria cascata de downloads em série, aumentando a latência",
        "Sim, é mais rápido que o <link>",
        "Apenas em servidores HTTP/2"
      ],
      correctAnswer: 1,
      explanation: "Cada @import força o browser a esperar o download do ficheiro atual para descobrir o próximo, criando uma fila lenta."
    }
  ]
};
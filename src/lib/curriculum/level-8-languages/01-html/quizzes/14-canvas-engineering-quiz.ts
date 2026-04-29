import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "html-mq14",
  title: "Quiz: Engenharia de Canvas 2D",
  passingScore: 80,
  questions: [
    {
      id: "q14_1",
      question: "Qual a principal diferença entre o modo de renderização do Canvas e do SVG?",
      options: [
        "Canvas é baseado em objetos no DOM; SVG é baseado em pixels.",
        "Canvas é 'Immediate Mode' (não guarda objetos); SVG é 'Retained Mode' (baseado em XML/DOM).",
        "Canvas só funciona em modo escuro.",
        "Não existe diferença técnica."
      ],
      correctAnswer: 1,
      explanation: "No Canvas, uma vez que desenhas um retângulo, o browser esquece que ele existe e guarda apenas a cor do pixel. No SVG, o retângulo continua a ser um nó no DOM."
    },
    {
      id: "q14_2",
      question: "Por que deves usar requestAnimationFrame em vez de setTimeout para animações?",
      options: [
        "Porque o setTimeout é proibido pela W3C.",
        "Porque o rAF sincroniza o desenho com o V-Sync do monitor, evitando 'tearing' e poupando CPU.",
        "Porque o rAF permite desenhar em 3D automaticamente.",
        "Porque o rAF não consome RAM."
      ],
      correctAnswer: 1
    },
    {
      id: "q14_3",
      question: "Qual o método correto para limpar toda a superfície do canvas antes de desenhar o próximo frame?",
      options: [
        "canvas.delete()",
        "ctx.clearRect(0, 0, width, height)",
        "ctx.fillBackground('transparent')",
        "canvas.innerHTML = ''"
      ],
      correctAnswer: 1
    },
    {
      id: "q14_4",
      question: "O que permite a API OffscreenCanvas?",
      options: [
        "Desenhar fora da janela do browser.",
        "Renderizar gráficos numa thread separada (Web Worker) sem bloquear a UI principal.",
        "Mudar a resolução do monitor do utilizador.",
        "Imprimir o canvas em alta definição."
      ],
      correctAnswer: 1
    },
    {
      id: "q14_5",
      question: "Qual método do contexto 2D é usado para desenhar imagens externas?",
      options: ["ctx.appendImage()", "ctx.drawImage()", "ctx.paint()", "ctx.render()"],
      correctAnswer: 1
    },
    {
      id: "q14_6",
      question: "O que acontece ao redimensionar um canvas via CSS (style.width) sem mudar os atributos 'width' e 'height' da tag?",
      options: [
        "O desenho mantém a nitidez.",
        "A imagem é esticada (upscaled) e fica desfocada, pois o buffer de pixels não mudou.",
        "O canvas apaga todo o conteúdo.",
        "O browser lança um erro de rede."
      ],
      correctAnswer: 1,
      explanation: "O tamanho visual (CSS) e o tamanho do buffer de pixels (atributos width/height) devem ser geridos de forma independente ou sincronizada para manter a nitidez, especialmente em ecrãs Retina."
    }
  ]
};

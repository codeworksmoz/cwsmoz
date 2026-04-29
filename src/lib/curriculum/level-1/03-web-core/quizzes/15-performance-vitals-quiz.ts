import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "web-q15",
  title: "Quiz: Performance e Core Web Vitals",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual métrica mede a estabilidade visual da página?",
      options: ["LCP", "FID", "CLS", "TTFB"],
      correctAnswer: 2,
      explanation: "CLS (Cumulative Layout Shift) quantifica quanto os elementos se movem inesperadamente durante o carregamento."
    },
    {
      id: "q2",
      question: "O que o LCP (Largest Contentful Paint) representa?",
      options: [
        "O tempo total de download do site",
        "O tempo que leva para o maior elemento visual ser renderizado",
        "O número de imagens no site",
        "A velocidade da internet do utilizador"
      ],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Qual formato de imagem é mais performático para a web moderna?",
      options: ["BMP", "GIF", "WebP", "TIFF"],
      correctAnswer: 2,
      explanation: "WebP oferece compressão superior (lossy e lossless) mantendo alta qualidade com ficheiros muito menores."
    },
    {
      id: "q4",
      question: "O que é o 'Minification' (Minificação)?",
      options: [
        "Mudar o tamanho das fontes para mini",
        "O processo de remover espaços, quebras de linha e comentários do código para reduzir o tamanho do ficheiro",
        "Reduzir a resolução das fotos",
        "Escrever menos código manualmente"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Para que serve o 'Lazy Loading'?",
      options: [
        "Para deixar o programador preguiçoso",
        "Para carregar recursos (como imagens) apenas quando forem necessários ou entrarem na área visível",
        "Para atrasar a abertura do site",
        "Para reduzir o brilho do ecrã"
      ],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "Qual o valor ideal de LCP para uma boa experiência de utilizador?",
      options: ["> 5 segundos", "< 2.5 segundos", "< 100 milissegundos", "Exatamente 0"],
      correctAnswer: 1,
      explanation: "Segundo o Google, o LCP deve ocorrer nos primeiros 2.5 segundos de carregamento para ser considerado 'Bom'."
    }
  ]
};

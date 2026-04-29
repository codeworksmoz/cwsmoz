import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "web-t6-quiz",
  title: "Quiz: Engenharia de Responsividade",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual o objetivo da meta tag viewport?",
      options: [
        "Aumentar a velocidade do processador",
        "Impedir o browser de fingir que é um desktop, respeitando a escala do hardware",
        "Mudar as cores do site para mobile",
        "Ligar o site ao sinal GPS"
      ],
      correctAnswer: 1,
      explanation: "Sem a viewport, os browsers mobile 'esmagam' o site para caber na tela, tornando tudo ilegível. A tag define que a largura do site deve ser a largura do dispositivo."
    },
    {
      id: "q2",
      question: "O que caracteriza a estratégia 'Mobile-First'?",
      options: [
        "Fazer o site apenas para telemóveis",
        "Escrever o CSS base para ecrãs pequenos e usar Media Queries para adicionar complexidade em ecrãs maiores",
        "Utilizar apenas imagens em baixa resolução",
        "Esconder o menu no desktop"
      ],
      correctAnswer: 1,
      explanation: "Mobile-First foca na simplicidade inicial, expandindo o layout conforme o espaço (min-width) aumenta."
    },
    {
      id: "q3",
      question: "O que representa a unidade '10vw'?",
      options: [
        "10 pixels fixos",
        "10% da largura da janela de visualização (Viewport Width)",
        "10% da altura da página",
        "10 milímetros no ecrã"
      ],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "Qual Media Query é correta para aplicar um estilo apenas a partir de 1024px de largura?",
      options: [
        "@media (max-width: 1024px)",
        "@media (min-width: 1024px)",
        "@media (width == 1024px)",
        "@media screen and 1024px"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Qual o perigo de usar larguras fixas (ex: width: 1200px)?",
      options: [
        "O site fica demasiado pesado",
        "O conteúdo transborda e cria uma barra de rolagem horizontal horrível no mobile",
        "As cores desaparecem no sol",
        "O Google proíbe o uso de pixels"
      ],
      correctAnswer: 1,
      explanation: "Larguras fixas são o inimigo da responsividade. Use sempre unidades relativas (%) ou flexíveis (fr)."
    },
    {
      id: "q6",
      question: "A unidade 'rem' baseia-se em quê?",
      options: [
        "No tamanho da fonte do elemento pai direto",
        "No tamanho da fonte do elemento raiz (root/html)",
        "Na resolução total do monitor",
        "No número de caracteres da linha"
      ],
      correctAnswer: 1,
      explanation: "rem (Root EM) é vital para acessibilidade. Se o utilizador mudar o tamanho da fonte do browser, todo o site escala proporcionalmente."
    }
  ]
};

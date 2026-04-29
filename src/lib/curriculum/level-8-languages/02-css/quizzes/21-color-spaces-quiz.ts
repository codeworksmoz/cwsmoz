import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "css-mq21",
  title: "Quiz: Espaços de Cor e color-mix()",
  passingScore: 80,
  questions: [
    {
      id: "q21_1",
      question: "Qual a vantagem do OKLCH sobre o HSL tradicional?",
      options: [
        "É compatível com browsers de 2010",
        "É perceptualmente uniforme, mantendo a luminosidade constante entre diferentes matizes",
        "Usa menos caracteres",
        "Não precisa de percentagens"
      ],
      correctAnswer: 1,
      explanation: "No OKLCH, 50% de luminosidade parece o mesmo brilho para o olho humano, quer a cor seja azul ou amarelo."
    },
    {
      id: "q21_2",
      question: "Como funciona o color-mix(in srgb, blue, white 20%)?",
      options: [
        "Muda o azul para branco",
        "Cria uma cor que é 80% azul e 20% branca no espaço srgb",
        "Escolhe aleatoriamente entre azul e branco",
        "É uma sintaxe inválida"
      ],
      correctAnswer: 1
    },
    {
      id: "q21_3",
      question: "O que representa o 'C' no OKLCH?",
      options: ["Contrast", "Chroma (Pureza da cor)", "Color", "Cycle"],
      correctAnswer: 1
    },
    {
      id: "q21_4",
      question: "A gama de cores Display-P3 é maior que a sRGB?",
      options: [
        "Sim, permite cores muito mais vibrantes e profundas",
        "Não, são idênticas",
        "Sim, mas apenas para a cor preta",
        "Não, sRGB é a maior que existe"
      ],
      correctAnswer: 0
    },
    {
      id: "q21_5",
      question: "A função color-contrast() permite ao browser:",
      options: [
        "Aumentar o brilho do monitor",
        "Escolher automaticamente a cor de texto com melhor contraste contra um fundo",
        "Criptografar as cores do site",
        "Eliminar cores proibidas"
      ],
      correctAnswer: 1
    },
    {
      id: "q21_6",
      question: "Por que engenheiros de sistemas de design estão a migrar para OKLCH?",
      options: [
        "Porque o Google manda",
        "Pela facilidade de gerar paletas harmónicas e acessíveis programaticamente",
        "Porque o Hexadecimal vai ser descontinuado",
        "Para reduzir o uso de CPU"
      ],
      correctAnswer: 1
    }
  ]
};
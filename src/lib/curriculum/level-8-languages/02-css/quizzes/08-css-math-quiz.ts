import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "css-mq8",
  title: "Quiz: Funções Matemáticas e Tipografia Fluida",
  passingScore: 80,
  questions: [
    {
      id: "q8_1",
      question: "Qual a função do 'clamp(1rem, 5vw, 3rem)'?",
      options: [
        "Define um valor fixo de 5vw",
        "Garante que o valor flutue em 5vw, mas nunca seja menor que 1rem nem maior que 3rem",
        "Soma 1rem com 5vw e 3rem",
        "Escolhe aleatoriamente um dos três valores"
      ],
      correctAnswer: 1,
      explanation: "Clamp define um limite inferior, um valor ideal dinâmico e um limite superior de segurança."
    },
    {
      id: "q8_2",
      question: "A função min(20vw, 400px) retornará o quê num ecrã de 1000px de largura?",
      options: ["200px (20vw)", "400px", "600px", "1000px"],
      correctAnswer: 0,
      explanation: "min() escolhe o menor valor calculado. 20% de 1000 é 200, que é menor que 400."
    },
    {
      id: "q8_3",
      question: "Podemos misturar unidades diferentes (ex: px e %) dentro de um calc()?",
      options: ["Não, as unidades devem ser iguais", "Sim, o browser resolve o cálculo no runtime", "Apenas no SASS", "Apenas em browsers desktop"],
      correctAnswer: 1
    },
    {
      id: "q8_4",
      question: "Qual o limite de aninhamento de funções matematicas no CSS?",
      options: ["Apenas 1 nível", "Até 3 níveis", "Praticamente ilimitado", "Não é permitido aninhamento"],
      correctAnswer: 2
    },
    {
      id: "q8_5",
      question: "Para que serve a unidade 'lh'?",
      options: ["Tamanho da letra", "Altura da linha (Line-height) do elemento", "Largura do ecrã", "Resolução do monitor"],
      correctAnswer: 1
    },
    {
      id: "q8_6",
      question: "O uso de exp() e log() é permitido no CSS moderno?",
      options: [
        "Não, o CSS só suporta as 4 operações básicas",
        "Sim, fazem parte das novas funções de valor exponencial",
        "Apenas via JavaScript",
        "Sim, mas apenas em animações"
      ],
      correctAnswer: 1
    }
  ]
};
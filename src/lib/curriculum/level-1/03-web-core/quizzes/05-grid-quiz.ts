import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "web-t5-quiz",
  title: "Quiz: CSS Grid Layout Master",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual a principal diferença entre Flexbox e CSS Grid?",
      options: [
        "Flexbox é mais moderno",
        "Grid é bidimensional (linhas e colunas), Flexbox é unidimensional",
        "Flexbox só funciona em mobile",
        "Grid não aceita imagens"
      ],
      correctAnswer: 1,
      explanation: "Grid permite controlar o layout em dois eixos simultaneamente, enquanto Flexbox foca no fluxo de uma única direção."
    },
    {
      id: "q2",
      question: "O que representa a unidade '1fr'?",
      options: [
        "1 pixel fixo",
        "Uma fração do espaço livre disponível no container",
        "O tamanho da primeira letra",
        "1% da largura do ecrã"
      ],
      correctAnswer: 1,
      explanation: "fr (fractional unit) é a unidade flexível do Grid que se adapta ao espaço restante após o cálculo de itens fixos."
    },
    {
      id: "q3",
      question: "Qual propriedade define a estrutura das colunas?",
      options: ["grid-columns", "grid-template-columns", "columns-count", "display-grid"],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "Como se criam 4 colunas de 100px usando a função de repetição?",
      options: [
        "repeat(100px, 4)",
        "repeat(4, 100px)",
        "grid(4 * 100px)",
        "columns(4, 100px)"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Para que serve a função 'minmax(200px, 1fr)'?",
      options: [
        "Para mudar a cor mínima e máxima",
        "Garante que uma coluna tenha no mínimo 200px, mas possa crescer se houver espaço",
        "Limita o número de caracteres",
        "É um erro de sintaxe"
      ],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "O que permite a propriedade 'grid-template-areas'?",
      options: [
        "Mapear visualmente o layout usando nomes de áreas",
        "Criar animações 3D",
        "Ligar o site a um GPS",
        "Definir a cor de fundo de áreas específicas"
      ],
      correctAnswer: 0,
      explanation: "Permite desenhar a estrutura do site como uma matriz de strings, facilitando muito a leitura do layout."
    }
  ]
};

import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "js-mq6",
  title: "Quiz Master: ESM e Otimização de Bundles",
  passingScore: 80,
  questions: [
    {
      id: "q6_1",
      question: "Qual a diferença fundamental entre CommonJS e ES Modules?",
      options: [
        "CommonJS é mais rápido.",
        "ESM é estático e analisável em tempo de compilação; CommonJS é dinâmico e resolvido em runtime.",
        "ESM só funciona no browser.",
        "Nenhuma, são apenas formas de escrever import."
      ],
      correctAnswer: 1,
      explanation: "O fato do ESM ser estático é o que permite ferramentas de build realizarem otimizações como o Tree Shaking."
    },
    {
      id: "q6_2",
      question: "O que o processo de 'Tree Shaking' faz especificamente?",
      options: [
        "Comprime imagens do projeto.",
        "Remove código exportado mas não utilizado do bundle final de produção.",
        "Muda o nome das pastas para segurança.",
        "Executa o código mais rápido."
      ],
      correctAnswer: 1
    },
    {
      id: "q6_3",
      question: "Qual instrução permite carregar um módulo de forma assíncrona apenas quando necessário?",
      options: ["require()", "import * as x", "import() (chamada de função)", "const x = import"],
      correctAnswer: 2,
      explanation: "O import() dinâmico retorna uma Promise e é a base do Code Splitting moderno."
    },
    {
      id: "q6_4",
      question: "Por que 'Side Effects' impedem o Tree Shaking?",
      options: [
        "Porque o código fica mais pesado.",
        "Porque o compilador não pode garantir que remover o módulo não afetará o comportamento global do sistema.",
        "Porque o browser bloqueia módulos com efeitos.",
        "Porque exigem o uso de SASS."
      ],
      correctAnswer: 1
    },
    {
      id: "q6_5",
      question: "Em qual ficheiro deves indicar que o teu pacote não tem side effects para o Webpack/Vite?",
      options: ["index.html", "package.json (chave sideEffects: false)", "style.css", ".gitignore"],
      correctAnswer: 1
    },
    {
      id: "q6_6",
      question: "Um import padrão (default export) é mais difícil de sofrer tree-shaking que um import nomeado?",
      options: [
        "Não, são iguais.",
        "Sim, pois o motor muitas vezes importa o objeto inteiro antes de filtrar, enquanto imports nomeados são links diretos.",
        "Não, default exports são mais rápidos.",
        "Apenas em servidores Node.js."
      ],
      correctAnswer: 1,
      explanation: "A boa prática master é preferir Named Exports para facilitar a análise estática e a remoção de código morto."
    }
  ]
};

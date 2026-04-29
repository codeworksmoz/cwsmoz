
import { KnowledgeArea } from '../types';

export const programmingFundamentals: KnowledgeArea = {
  id: 'ka-prog-fund',
  title: '02. Programming Fundamentals',
  description: 'Aprende a dar ordens ao computador usando lógica universal.',
  supportedLanguages: ['javascript', 'python', 'java', 'cpp'],
  theoryLessons: [
    {
      id: 'pf-t1',
      title: 'Variáveis e Tipos de Dados',
      content: 'Uma variável é um contentor nomeado que guarda um valor na memória do computador.',
      beginnerExplanation: 'Pensa numa variável como uma caixa com uma etiqueta. A etiqueta é o "nome" e o que está dentro é o "valor". O "tipo" diz ao computador se o que está lá dentro é um texto, um número ou uma verdade/mentira.',
      quiz: [
        {
          id: 'q1',
          question: 'Para que serve uma variável?',
          options: ['Para apagar dados', 'Para guardar informação na memória', 'Para ligar o monitor'],
          correctAnswer: 1
        }
      ]
    }
  ],
  practiceExercises: [
    {
      id: 'pf-p1',
      title: 'Laboratório 1: Criando as tuas Primeiras Variáveis',
      description: 'Vamos colocar em prática o conceito de "caixas" de memória.',
      beginnerGuide: 'Neste exercício, vais criar 4 variáveis. Lembra-te: em JavaScript usamos "let" para declarar, em Python basta escrever o nome.',
      objectives: [
        {
          id: 'obj-1',
          title: 'Identidade Digital',
          description: 'Cria uma variável para o teu nome.',
          explanation: 'Precisamos de um local para guardar texto. Em programação, texto deve estar entre aspas.',
          hint: 'Exemplo: let nome = "Teu Nome";',
          validationRegex: 'nome\\s*=\\s*["\'].*["\']'
        },
        {
          id: 'obj-2',
          title: 'Contagem de Anos',
          description: 'Cria uma variável para a tua idade.',
          explanation: 'Números não precisam de aspas. Eles servem para fazer cálculos matemáticos depois.',
          hint: 'Exemplo: let idade = 25;',
          validationRegex: 'idade\\s*=\\s*\\d+'
        }
      ],
      starterCode: {
        javascript: '// Escreve o teu código abaixo\nlet nome = "";\nlet idade = 0;',
        python: '# Escreve o teu código abaixo\nnome = ""\nidade = 0'
      }
    }
  ]
};

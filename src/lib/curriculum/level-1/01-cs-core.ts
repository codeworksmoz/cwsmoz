
import { KnowledgeArea } from '../types';

export const csCore: KnowledgeArea = {
  id: 'ka-cs-core',
  title: '01. CS Core (Ciência da Computação)',
  description: 'A base técnica: como os computadores pensam e processam dados.',
  supportedLanguages: [], // Majoritariamente conceitual no Nível 1
  theoryLessons: [
    {
      id: 'cs-t1',
      title: 'Sistemas Numéricos: O Mundo Binário',
      content: 'Os computadores não entendem letras ou números como nós. Eles usam eletricidade: ligado (1) ou desligado (0).',
      beginnerExplanation: 'Imagina um conjunto de interruptores. Cada interruptor é um "bit". Se tiveres 8 interruptores, tens um "Byte". É assim que tudo o que vês no ecrã é guardado.',
      quiz: [
        {
          id: 'q1',
          question: 'O que representa o número 1 no sistema binário?',
          options: ['Desligado', 'Ligado', 'Talvez'],
          correctAnswer: 1
        }
      ]
    },
    {
      id: 'cs-t2',
      title: 'Lógica Booleana',
      content: 'A base da tomada de decisão. Verdadeiro (True) ou Falso (False).',
      beginnerExplanation: 'É como uma receita: "Se tiveres ovos E farinha, podes fazer um bolo". Se faltar um, a resposta é Falso.',
      quiz: [
        {
          id: 'q1',
          question: 'Qual operador exige que AMBAS as condições sejam verdadeiras?',
          options: ['OR (OU)', 'NOT (NÃO)', 'AND (E)'],
          correctAnswer: 2
        }
      ]
    }
  ],
  practiceExercises: []
};

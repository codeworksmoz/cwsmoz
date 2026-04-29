import type { Level, KnowledgeArea } from '../types';
import { lessons as webLessons } from './01-web-engineering/theory';
import { lessons as aiLessons } from './02-ai-data-science/theory';
import { lessons as secLessons } from './03-cybersecurity-cloud/theory';

const createQuizzes = (prefix: string) => Array.from({ length: 21 }, (_, i) => ({
  id: `${prefix}-q${i + 1}`,
  title: `Quiz Tópico ${i + 1}`,
  questions: [{ id: "q1", question: "Validado?", options: ["Sim", "Não"], correctAnswer: 0 }],
  passingScore: 70
}));

const createLabs = (prefix: string, lang: string) => ({
  [lang]: Array.from({ length: 21 }, (_, i) => ({
    id: `${prefix}-p${i + 1}`,
    language: lang,
    title: `Laboratório Avançado ${i + 1}`,
    description: "Desafio técnico de especialização.",
    statement: "Implemente a solução no editor.",
    template: "// Código de elite\n",
    detailedExplanation: "<h3>⚡ Especialização Profissional</h3><p>Aplicação de conceitos de alta complexidade.</p>",
    objectives: [{ id: "obj1", description: "Concluir desafio", test: "const" }]
  }))
});

export const level5: Level = {
  id: 5,
  title: 'Nível 5: Especializações de Elite',
  description: 'Aprofunde-se nas tecnologias de ponta que dominam o mercado global.',
  knowledgeAreas: [
    {
      id: 'ka-web-eng',
      title: '01. Web Engineering',
      description: 'Mastering Next.js, Server Components e Performance de Elite.',
      load: '50h',
      iconName: 'Zap',
      theory: webLessons,
      practice: createLabs('web-adv', 'typescript'),
      quizzes: createQuizzes('web-adv')
    },
    {
      id: 'ka-ai-ds',
      title: '02. AI & Data Science',
      description: 'De Algoritmos Lineares a Grandes Modelos de Linguagem (LLMs).',
      load: '60h',
      iconName: 'Cpu',
      theory: aiLessons,
      practice: createLabs('ai', 'python'),
      quizzes: createQuizzes('ai')
    },
    {
      id: 'ka-cloud-sec',
      title: '03. Cloud & Cybersecurity',
      description: 'Segurança de Sistemas, Cloud Native e DevSecOps.',
      load: '50h',
      iconName: 'ShieldCheck',
      theory: secLessons,
      practice: createLabs('sec', 'bash'),
      quizzes: createQuizzes('sec')
    }
  ]
};
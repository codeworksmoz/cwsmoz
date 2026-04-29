import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';

export const softwareQuality: KnowledgeArea = {
  id: 'ka-se-quality',
  title: '03. Software Quality & QA',
  description: 'Testes automatizados, CI/CD e manutenção de sistemas.',
  load: '35h',
  iconName: 'ShieldCheck',
  theory: lessons,
  practice: {
    javascript: []
  },
  quizzes: Array.from({ length: 21 }, (_, i) => ({
    id: `qual-q${i + 1}`,
    title: `Quality Quiz ${i + 1}`,
    questions: [],
    passingScore: 70
  }))
};

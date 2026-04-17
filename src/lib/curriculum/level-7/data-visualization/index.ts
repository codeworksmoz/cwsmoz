import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const fccDV: KnowledgeArea = {
    id: "fcc-data-viz",
    title: "Data Visualization",
    description: "5 projetos para visualizar dados com D3.js.",
    load: "40h",
    iconName: "AreaChart",
    theory,
    practice,
    quizzes,
};

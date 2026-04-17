import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const kaALG: KnowledgeArea = {
    id: "ka-algorithms",
    title: "Algorithms",
    description: "Análise, ordenação, busca, recursão.",
    load: "70h",
    iconName: "BrainCircuit",
    theory,
    practice,
    quizzes
};

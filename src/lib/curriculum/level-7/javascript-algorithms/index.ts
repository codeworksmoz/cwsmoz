import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const fccJS: KnowledgeArea = {
    id: "fcc-javascript-algorithms",
    title: "JavaScript Algorithms & Data Structures",
    description: "5 projetos para solidificar sua lógica.",
    load: "50h",
    iconName: "Code",
    theory,
    practice,
    quizzes,
};

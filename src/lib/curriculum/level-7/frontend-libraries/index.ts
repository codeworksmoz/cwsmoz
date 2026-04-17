import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const fccFEL: KnowledgeArea = {
    id: "fcc-frontend-libraries",
    title: "Front End Development Libraries",
    description: "5 projetos com React e Redux.",
    load: "50h",
    iconName: "Library",
    theory,
    practice,
    quizzes,
};

import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const fccBE: KnowledgeArea = {
    id: "fcc-backend-apis",
    title: "Back End Development and APIs",
    description: "5 projetos para construir APIs com Node.js e Express.",
    load: "50h",
    iconName: "Server",
    theory,
    practice,
    quizzes,
};

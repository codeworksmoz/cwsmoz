import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const kaREQ: KnowledgeArea = {
    id: "ka-requirements",
    title: "Requirements Engineering",
    description: "Histórias de usuário, casos de uso.",
    load: "20h",
    iconName: "ListChecks",
    theory,
    practice,
    quizzes
};

import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const kaCAREER: KnowledgeArea = {
    id: "ka-career",
    title: "Career Skills",
    description: "Currículo, portfólio, entrevistas.",
    load: "30h",
    iconName: "Briefcase",
    theory,
    practice,
    quizzes
};

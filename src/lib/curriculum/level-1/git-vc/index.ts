import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quiz';

export const kaGIT: KnowledgeArea = {
    id: "ka-git",
    title: "Git & Version Control",
    description: "Comandos básicos, GitHub, controle de versão.",
    load: "30h",
    iconName: "GitBranch",
    theory,
    practice,
    quizzes,
};

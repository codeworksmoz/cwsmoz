import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const kaADVGIT: KnowledgeArea = {
    id: "ka-advanced-git",
    title: "Advanced Git & Collaboration",
    description: "Code reviews, open source.",
    load: "20h",
    iconName: "GitMerge",
    theory,
    practice,
    quizzes
};

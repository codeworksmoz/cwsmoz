import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const kaSOFT: KnowledgeArea = {
    id: "ka-soft-skills",
    title: "Soft Skills",
    description: "Comunicação, trabalho em equipe.",
    load: "30h",
    iconName: "Users",
    theory,
    practice,
    quizzes
};

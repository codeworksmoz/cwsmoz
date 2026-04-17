import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const kaETH: KnowledgeArea = {
    id: "ka-ethics",
    title: "Ethics & Professionalism",
    description: "Ética, propriedade intelectual.",
    load: "20h",
    iconName: "Scale",
    theory,
    practice,
    quizzes
};

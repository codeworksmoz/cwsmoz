import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const kaAI: KnowledgeArea = {
    id: "ka-ai-ml",
    title: "Artificial Intelligence & ML",
    description: "Fundamentos de ML, redes neurais.",
    load: "60h",
    iconName: "Brain",
    theory,
    practice,
    quizzes
};

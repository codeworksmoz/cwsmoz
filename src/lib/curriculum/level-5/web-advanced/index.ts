import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const kaWEBADV: KnowledgeArea = {
    id: "ka-web-advanced",
    title: "Advanced Web Development",
    description: "React/Next.js, Node.js, APIs RESTful.",
    load: "80h",
    iconName: "Rocket",
    theory,
    practice,
    quizzes
};

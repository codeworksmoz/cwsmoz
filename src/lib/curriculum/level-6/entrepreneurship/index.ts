import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const kaENT: KnowledgeArea = {
    id: "ka-entrepreneurship",
    title: "Entrepreneurship",
    description: "Modelos de negócio, startups, pitch.",
    load: "20h",
    iconName: "Lightbulb",
    theory,
    practice,
    quizzes
};

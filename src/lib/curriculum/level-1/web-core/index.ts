import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quiz';

export const kaWEB: KnowledgeArea = {
    id: "ka-web",
    title: "Web Core",
    description: "HTML5 semântico, CSS3 (Flexbox/Grid), padrões web.",
    load: "60h",
    iconName: "Globe",
    theory,
    practice,
    quizzes,
};

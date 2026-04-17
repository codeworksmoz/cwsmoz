import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const kaSD: KnowledgeArea = {
    id: "ka-design",
    title: "Software Design",
    description: "Padrões de design, SOLID, arquitetura.",
    load: "60h",
    iconName: "Architecture",
    theory,
    practice,
    quizzes
};

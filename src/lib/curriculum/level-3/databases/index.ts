import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const kaDB: KnowledgeArea = {
    id: "ka-databases",
    title: "Database Systems",
    description: "Modelo relacional, SQL, normalização.",
    load: "60h",
    iconName: "Database",
    theory,
    practice,
    quizzes
};

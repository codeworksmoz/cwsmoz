import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const kaDS: KnowledgeArea = {
    id: "ka-data-structures",
    title: "Data Structures",
    description: "Listas, pilhas, filas, árvores, grafos.",
    load: "70h",
    iconName: "Database",
    theory,
    practice,
    quizzes
};

import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const kaSE: KnowledgeArea = {
    id: "ka-se",
    title: "Engenharia de Software",
    description: "Metodologias de desenvolvimento (Ágil, Scrum, Kanban), ciclo de vida do software e métricas.",
    load: "40h",
    iconName: "Construction",
    theory,
    practice,
    quizzes
};

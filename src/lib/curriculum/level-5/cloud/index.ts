import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const kaCLOUD: KnowledgeArea = {
    id: "ka-cloud",
    title: "Cloud Computing",
    description: "AWS/GCP, Docker, Kubernetes.",
    load: "50h",
    iconName: "Cloud",
    theory,
    practice,
    quizzes
};

import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const fccRWD: KnowledgeArea = {
    id: "fcc-responsive-web",
    title: "Responsive Web Design",
    description: "5 projetos para dominar HTML e CSS.",
    load: "50h",
    iconName: "MonitorSmartphone",
    theory,
    practice,
    quizzes,
};

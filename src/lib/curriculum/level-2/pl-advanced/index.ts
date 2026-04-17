import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const kaPLA: KnowledgeArea = {
    id: "ka-pl-advanced",
    title: "Programming Languages Advanced",
    description: "POO, funcional, genéricos.",
    load: "40h",
    iconName: "Code2",
    theory,
    practice,
    quizzes
};

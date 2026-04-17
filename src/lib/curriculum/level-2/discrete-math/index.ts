import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const kaDM: KnowledgeArea = {
    id: "ka-discrete-math",
    title: "Discrete Mathematics",
    description: "Conjuntos, relações, funções, lógica.",
    load: "40h",
    iconName: "Sigma",
    theory,
    practice,
    quizzes
};

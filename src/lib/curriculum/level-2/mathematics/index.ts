import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const kaMATH: KnowledgeArea = {
    id: "ka-mathematics",
    title: "Matemática para Computação",
    description: "Cálculo, álgebra linear e estatística.",
    load: "40h",
    iconName: "Calculator",
    theory,
    practice,
    quizzes
};

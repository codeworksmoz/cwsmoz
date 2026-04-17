import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const kaCHEMISTRY: KnowledgeArea = {
    id: "ka-chemistry",
    title: "Química para Computação",
    description: "Materiais para hardware e simulação molecular.",
    load: "10h",
    iconName: "FlaskConical",
    theory,
    practice,
    quizzes
};

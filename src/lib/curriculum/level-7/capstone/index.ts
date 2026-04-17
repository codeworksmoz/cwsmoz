import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const fccCAP: KnowledgeArea = {
    id: "fcc-capstone",
    title: "Full Stack Capstone Project",
    description: "Projeto final integrador.",
    load: "80h",
    iconName: "GraduationCap",
    theory,
    practice,
    quizzes,
};

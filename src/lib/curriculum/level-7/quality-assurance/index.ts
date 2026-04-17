import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const fccQA: KnowledgeArea = {
    id: "fcc-quality-assurance",
    title: "Quality Assurance",
    description: "5 projetos para garantir a qualidade com testes.",
    load: "40h",
    iconName: "TestTube",
    theory,
    practice,
    quizzes,
};

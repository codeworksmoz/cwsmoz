import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const kaQA: KnowledgeArea = {
    id: "ka-testing",
    title: "Quality Assurance & Testing",
    description: "Testes unitários, integração, TDD, CI/CD.",
    load: "40h",
    iconName: "ClipboardCheck",
    theory,
    practice,
    quizzes
};

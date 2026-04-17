import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const kaIAS: KnowledgeArea = {
    id: "ka-security",
    title: "Information Assurance & Security",
    description: "Criptografia, segurança web.",
    load: "30h",
    iconName: "ShieldCheck",
    theory,
    practice,
    quizzes
};

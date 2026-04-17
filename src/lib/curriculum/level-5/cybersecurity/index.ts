import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const kaCYBER: KnowledgeArea = {
    id: "ka-cybersecurity",
    title: "Cybersecurity",
    description: "Segurança de redes, ethical hacking.",
    load: "50h",
    iconName: "ShieldAlert",
    theory,
    practice,
    quizzes
};

import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const kaNET: KnowledgeArea = {
    id: "ka-networking",
    title: "Networking & Communications",
    description: "TCP/IP, HTTP, DNS, roteamento.",
    load: "50h",
    iconName: "Network",
    theory,
    practice,
    quizzes
};

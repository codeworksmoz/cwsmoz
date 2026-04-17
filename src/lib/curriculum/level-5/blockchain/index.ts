import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const kaBLOCK: KnowledgeArea = {
    id: "ka-blockchain",
    title: "Blockchain & Web3",
    description: "Smart contracts, DeFi, dApps.",
    load: "40h",
    iconName: "Link",
    theory,
    practice,
    quizzes
};

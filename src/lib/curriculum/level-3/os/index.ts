import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const kaOS: KnowledgeArea = {
    id: "ka-os",
    title: "Operating Systems",
    description: "Processos, threads, memória, arquivos.",
    load: "50h",
    iconName: "HardDrive",
    theory,
    practice,
    quizzes
};

import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quiz';

export const kaTENG: KnowledgeArea = {
    id: "ka-tech-english",
    title: "Technical English",
    description: "Vocabulário, leitura de documentação, mensagens de erro.",
    load: "30h",
    iconName: "Languages",
    theory,
    practice,
    quizzes
};

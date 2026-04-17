import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quiz';

export const kaDEVTOOLS: KnowledgeArea = {
    id: "ka-dev-tools",
    title: "Ferramentas de Desenvolvimento",
    description: "IDEs, editores de código, e o ambiente de desenvolvimento.",
    load: "10h",
    iconName: "TerminalSquare",
    theory,
    practice,
    quizzes,
};

import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const kaPHYSICS: KnowledgeArea = {
    id: "ka-physics",
    title: "Física para Computação",
    description: "Mecânica, ondas e eletromagnetismo aplicados a jogos e simulações.",
    load: "20h",
    iconName: "Atom",
    theory,
    practice,
    quizzes
};

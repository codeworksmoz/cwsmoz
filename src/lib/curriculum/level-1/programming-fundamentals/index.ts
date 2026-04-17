import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quiz';

export const kaPF: KnowledgeArea = {
    id: "ka-programming",
    title: "Programming Fundamentals",
    description: "Variáveis, tipos, estruturas de controle, funções, arrays.",
    load: "80h",
    iconName: "Terminal",
    theory,
    practice,
    quizzes
};

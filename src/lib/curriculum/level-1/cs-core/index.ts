// D:\Mozkod\src\lib\curriculum\areas\cs-core\index.ts
import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quiz';

export const kaCS: KnowledgeArea = {
    id: "ka-cs-core",
    title: "Computer Science Core",
    description: "Fundamentos da computação: sistemas binários, lógica booleana, representação de dados e arquitetura de computadores.",
    load: "40h",
    iconName: "Cpu",
    theory,
    practice,
    quizzes
};
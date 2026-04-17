import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const kaMOBILE: KnowledgeArea = {
    id: "ka-mobile",
    title: "Mobile Development",
    description: "React Native, Flutter, nativo.",
    load: "60h",
    iconName: "Smartphone",
    theory,
    practice,
    quizzes
};

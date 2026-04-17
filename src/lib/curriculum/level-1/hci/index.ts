import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quiz';

export const kaHCI: KnowledgeArea = {
    id: "ka-hci",
    title: "Human-Computer Interaction",
    description: "Usabilidade, acessibilidade, design centrado no usuário.",
    load: "20h",
    iconName: "MousePointerClick",
    theory,
    practice,
    quizzes
};

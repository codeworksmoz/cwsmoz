import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const kaIOT: KnowledgeArea = {
    id: "ka-iot",
    title: "Internet of Things",
    description: "Sensores, microcontroladores, IoT.",
    load: "30h",
    iconName: "Router",
    theory,
    practice,
    quizzes
};

import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const kaDATA: KnowledgeArea = {
    id: "ka-data-science",
    title: "Data Science & Analytics",
    description: "Análise de dados, visualização, Big Data.",
    load: "40h",
    iconName: "BarChart",
    theory,
    practice,
    quizzes
};

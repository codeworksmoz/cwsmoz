import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const kaGAME: KnowledgeArea = {
    id: "ka-game-dev",
    title: "Game Development",
    description: "Unity, Unreal, design de jogos.",
    load: "40h",
    iconName: "Gamepad2",
    theory,
    practice,
    quizzes
};

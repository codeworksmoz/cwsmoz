// This file is obsolete and will be replaced by more specific lessons.
// The new lessons are imported in 'src/lib/curriculum/level-4/se/theory.ts'.
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "se-t1",
    title: "Metodologias de Desenvolvimento",
    youtubeVideoId: "h-rYjI-kYk0",
    content: `
        <h2>Como Construir Software de Forma Organizada</h2>
        <p>Engenharia de Software é a aplicação de princípios de engenharia ao desenvolvimento de software. Metodologias de desenvolvimento são abordagens estruturadas para guiar esse processo.</p>
        <h3>Cascata (Waterfall) vs. Ágil (Agile)</h3>
        <ul>
            <li><strong>Cascata:</strong> Um modelo linear e sequencial. Cada fase (requisitos, design, implementação, teste) deve ser concluída antes que a próxima comece. Pouco flexível a mudanças.</li>
            <li><strong>Ágil:</strong> Uma abordagem iterativa e incremental. O trabalho é dividido em pequenos ciclos (sprints), entregando valor continuamente e adaptando-se a mudanças.</li>
        </ul>
        <h3>Metodologias Ágeis Populares:</h3>
        <ul>
            <li><strong>Scrum:</strong> Um framework que usa papéis (Product Owner, Scrum Master, Time), eventos (Daily Scrum, Sprint Planning) e artefatos (Product Backlog) para gerenciar o trabalho.</li>
            <li><strong>Kanban:</strong> Focado em visualizar o fluxo de trabalho em um quadro, limitar o trabalho em progresso e maximizar a eficiência.</li>
        </ul>
    `
};

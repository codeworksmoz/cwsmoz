import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "se-t7-kanban",
    title: "O Método Kanban",
    content: `
        <h2>Visualizando o Fluxo de Trabalho</h2>
        <p>Kanban é um método para gerenciar o trabalho do conhecimento, com ênfase na entrega just-in-time, sem sobrecarregar os membros da equipe. Ele ajuda a visualizar o trabalho, limitar o trabalho em andamento (WIP) e maximizar a eficiência.</p>
        <h3>Princípios do Kanban:</h3>
        <ol>
            <li><strong>Visualizar o Fluxo de Trabalho:</strong> Use um quadro (Kanban Board) com colunas que representam as etapas do seu processo (ex: A Fazer, Em Andamento, Em Revisão, Feito).</li>
            <li><strong>Limitar o Trabalho em Andamento (WIP Limits):</strong> Defina um número máximo de itens que podem estar em cada coluna. Isso evita gargalos e incentiva o time a focar em terminar o trabalho antes de começar algo novo.</li>
            <li><strong>Gerenciar o Fluxo:</strong> Monitore e otimize o fluxo de trabalho. Métricas como Lead Time (tempo total do início ao fim) e Cycle Time (tempo em uma etapa específica) são usadas para medir e melhorar o processo.</li>
        </ol>
    `
};

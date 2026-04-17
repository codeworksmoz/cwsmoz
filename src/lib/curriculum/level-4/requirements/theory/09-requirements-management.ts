import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "req-t9-management",
    title: "Gerenciamento de Requisitos",
    content: `
        <h2>Lidando com a Mudança</h2>
        <p><strong>Gerenciamento de Requisitos</strong> é o processo de gerenciar as mudanças nos requisitos ao longo do ciclo de vida do projeto. Os requisitos raramente são estáticos; eles mudam à medida que o entendimento do negócio melhora, as prioridades mudam e novas oportunidades surgem.</p>
        
        <h3>Atividades Principais do Gerenciamento de Requisitos:</h3>
        <ul>
            <li>
                <strong>Gerenciamento de Mudanças (Change Management):</strong>
                <p>Estabelecer um processo formal para lidar com solicitações de mudança. Isso geralmente envolve:</p>
                <ol>
                    <li>Registrar a solicitação de mudança.</li>
                    <li>Analisar o impacto da mudança (no custo, no cronograma, em outros requisitos).</li>
                    <li>Aprovar ou rejeitar a mudança (geralmente por um comitê de controle de mudanças ou pelo Product Owner).</li>
                    <li>Comunicar a decisão e, se aprovada, incorporar a mudança no backlog/plano do projeto.</li>
                </ol>
            </li>
            <li>
                <strong>Gerenciamento de Versões (Versioning):</strong>
                <p>Manter um histórico de mudanças em cada requisito. Cada requisito deve ter um número de versão para que todos saibam qual é a versão mais recente.</p>
            </li>
            <li>
                <strong>Rastreabilidade de Requisitos (Traceability):</strong>
                <p>A capacidade de seguir a vida de um requisito, tanto para frente quanto para trás. A rastreabilidade ajuda a garantir que todos os requisitos foram atendidos e a analisar o impacto das mudanças. Tipos de links de rastreabilidade:</p>
                <ul>
                    <li><strong>Para frente:</strong> De um requisito para os artefatos de design e casos de teste que o implementam e verificam.</li>
                    <li><strong>Para trás:</strong> De um requisito de volta à sua fonte (o objetivo de negócio ou o stakeholder que o solicitou).</li>
                </ul>
                <p>Matrizes de rastreabilidade são uma ferramenta comum para documentar essas conexões.</p>
            </li>
        </ul>
        <p>Um bom gerenciamento de requisitos garante que, mesmo em face da mudança, o projeto permaneça alinhado com os objetivos de negócio e o escopo seja controlado.</p>
    `
};

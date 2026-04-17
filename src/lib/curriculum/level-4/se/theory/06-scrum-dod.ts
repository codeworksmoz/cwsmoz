import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "se-t6-scrum-dod",
    title: "Framework Scrum: Definition of Done (DoD)",
    content: `
        <h2>O que significa "Pronto"?</h2>
        <p>A <strong>Definição de "Pronto" (Definition of Done - DoD)</strong> é um entendimento compartilhado pelo time sobre o que significa para um trabalho estar completo. É uma checklist de critérios de qualidade que um item do Product Backlog deve atender para ser considerado parte do Incremento.</p>
        <h3>Exemplo de uma DoD:</h3>
        <ul>
            <li>Código foi revisado por pares (code review).</li>
            <li>Testes unitários foram escritos e estão passando.</li>
            <li>Testes de integração foram escritos e estão passando.</li>
            <li>A documentação foi atualizada.</li>
            <li>O código foi mesclado ao branch principal.</li>
        </ul>
        <p>Ter uma DoD clara e compartilhada garante que o time entregue um incremento de alta qualidade e potencialmente liberável a cada Sprint.</p>
    `
};

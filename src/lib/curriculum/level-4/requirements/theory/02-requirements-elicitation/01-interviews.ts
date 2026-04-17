import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "req-t2-interviews",
    title: "Elicitação: Entrevistas",
    content: `
        <h2>Conversando com os Stakeholders</h2>
        <p><strong>Elicitação de Requisitos</strong> (ou levantamento de requisitos) é o processo de descobrir as necessidades e restrições de um sistema a partir de seus stakeholders (clientes, usuários, especialistas de domínio, etc.).</p>
        <p>A <strong>entrevista</strong> é uma das técnicas mais fundamentais e diretas para a elicitação de requisitos.</p>
        
        <h3>Tipos de Entrevistas:</h3>
        <ul>
            <li>
                <strong>Estruturada:</strong> O entrevistador tem um conjunto predefinido de perguntas e não se desvia delas. É útil para obter dados quantitativos ou comparar respostas de múltiplos stakeholders.
            </li>
            <li>
                <strong>Não Estruturada:</strong> A entrevista flui como uma conversa aberta, sem um script rígido. É excelente para explorar um problema em profundidade e descobrir requisitos que não eram óbvios.
            </li>
            <li>
                <strong>Semi-Estruturada:</strong> Uma combinação das duas. O entrevistador tem um guia de tópicos a serem cobertos, mas tem a flexibilidade de fazer perguntas de acompanhamento e explorar novas áreas que surgem durante a conversa. Esta é geralmente a abordagem mais eficaz.
            </li>
        </ul>

        <h3>Dicas para uma Entrevista Eficaz:</h3>
        <ul>
            <li><strong>Prepare-se:</strong> Pesquise sobre o domínio do negócio e o stakeholder antes da entrevista. Prepare um guia de perguntas.</li>
            <li><strong>Faça Perguntas Abertas:</strong> Evite perguntas de "sim" ou "não". Use perguntas que comecem com "Como...", "Por que...", "Descreva..." para encorajar respostas detalhadas.</li>
            <li><strong>Ouça Ativamente:</strong> Preste atenção, faça anotações e parafraseie o que você ouviu para confirmar seu entendimento ("Então, se eu entendi corretamente, você precisa...").</li>
            <li><strong>Evite Jargão Técnico:</strong> Fale a linguagem do stakeholder, não a linguagem de desenvolvimento de software.</li>
        </ul>
    `
};

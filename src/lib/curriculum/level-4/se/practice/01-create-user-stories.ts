import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'se-ex-1',
    title: 'Escrevendo Histórias de Usuário',
    statement: 'Com base em um requisito de alto nível, escreva três histórias de usuário seguindo o formato padrão e o critério INVEST.',
    template: `// Requisito: "O sistema deve permitir que os usuários gerenciem seus perfis."

// História 1 (Editar nome):
// Como um ..., eu quero ..., para que ...
// Critérios de Aceitação:
// - ...
// - ...

// História 2 (Mudar foto de perfil):
// ...

// História 3 (Adicionar biografia):
// ...
`,
    youtubeVideoId: 'a_TleOwnW4I',
    detailedExplanation: `
        <h2>Praticando a Criação de Histórias de Usuário</h2>
        <p>Histórias de usuário são a base do planejamento ágil. O objetivo é quebrar requisitos grandes em pequenas peças de valor para o usuário.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li><strong>Analise o Requisito:</strong> O requisito "gerenciar perfis" é um Épico. Precisamos quebrá-lo.</li>
            <li><strong>Identifique os Atores e Objetivos:</strong> O ator é o "usuário registrado". Os objetivos são editar o nome, mudar a foto, etc.</li>
            <li><strong>Escreva a História:</strong> Para cada objetivo, escreva uma história usando o formato "Como um [ator], eu quero [objetivo], para que [benefício]".</li>
            <li><strong>Defina os Critérios de Aceitação:</strong> Para cada história, liste as condições que devem ser atendidas para que ela seja considerada "Pronta". Pense nos cenários de sucesso e falha.</li>
        </ol>
        <p>Lembre-se de aplicar o critério <strong>INVEST</strong> para garantir que suas histórias sejam independentes, negociáveis, valiosas, estimáveis, pequenas e testáveis.</p>
    `
};

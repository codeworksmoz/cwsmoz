import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'req-ex-5',
    title: 'Prática: Priorização de Backlog',
    statement: 'Usando o método MoSCoW, classifique os seguintes requisitos para o MVP (Minimum Viable Product) de um aplicativo de blog.',
    template: `// Requisitos para um app de blog:
// - Cadastro de usuário
// - Login de usuário
// - Escrever e publicar um post
// - Comentar em um post
// - Mudar o tema do site (dark/light)
// - Integrar com redes sociais para compartilhamento
// - Painel de administração para gerenciar todos os posts

// Classificação MoSCoW:

// Must Have:
// - ...
// - ...

// Should Have:
// - ...

// Could Have:
// - ...

// Won't Have (para o MVP):
// - ...
`,
    youtubeVideoId: 'V0uW-2ELWjw',
    detailedExplanation: `
        <h2>O que é Essencial para o Lançamento?</h2>
        <p>O método MoSCoW ajuda a focar no que é absolutamente necessário para um produto ser viável.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li><strong>Must Have (Deve Ter):</strong> Quais são as funcionalidades essenciais sem as quais um "blog" não é um blog? Um usuário precisa ser capaz de se cadastrar, fazer login e, o mais importante, escrever e publicar um post.</li>
            <li><strong>Should Have (Deveria Ter):</strong> O que é muito importante, mas o blog ainda funcionaria sem? Comentários são um bom candidato aqui. Eles adicionam muito valor, mas o MVP poderia ser lançado sem eles.</li>
            <li><strong>Could Have (Poderia Ter):</strong> O que é um "nice to have"? Mudar o tema ou integrar com redes sociais são funcionalidades que melhoram a experiência, mas não são centrais para a funcionalidade principal.</li>
            <li><strong>Won't Have (Não Terá):</strong> O que é claramente complexo demais para uma primeira versão? O painel de administração é um bom exemplo. É uma funcionalidade grande que pode ser adicionada em uma fase posterior.</li>
        </ol>
    `
};

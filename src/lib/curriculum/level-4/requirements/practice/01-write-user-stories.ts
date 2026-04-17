import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'req-ex-1',
    title: 'Prática: Escrevendo Histórias de Usuário',
    statement: 'Para um sistema de blog, escreva 3 Histórias de Usuário para a funcionalidade de "gerenciar comentários", seguindo o formato padrão.',
    template: `// Requisito: "O sistema deve permitir o gerenciamento de comentários."

// História 1 (Autor do post deleta um comentário):
// Como um ..., eu quero ..., para que ...

// História 2 (Visitante comenta em um post):
// Como um ..., eu quero ..., para que ...

// História 3 (Administrador modera comentários):
// Como um ..., eu quero ..., para que ...
`,
    youtubeVideoId: 'a_TleOwnW4I',
    detailedExplanation: `
        <h2>Praticando a Criação de Histórias</h2>
        <p>O objetivo é traduzir um requisito amplo em peças de valor pequenas e focadas na perspectiva de diferentes usuários.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li><strong>Identifique os Atores:</strong> Quem interage com os comentários? Pelo menos três: o autor do post, um visitante anônimo e um administrador do site.</li>
            <li><strong>Identifique os Objetivos:</strong> O que cada ator quer fazer? O autor quer remover spam, o visitante quer compartilhar sua opinião, o administrador quer garantir que as regras da comunidade sejam seguidas.</li>
            <li><strong>Identifique o Benefício:</strong> Por que eles querem fazer isso? O autor quer manter a qualidade da discussão, o visitante quer interagir, o administrador quer manter o ambiente seguro.</li>
            <li><strong>Monte a História:</strong> Junte as três partes usando o template "Como um..., eu quero..., para que...".</li>
        </ol>
    `
};

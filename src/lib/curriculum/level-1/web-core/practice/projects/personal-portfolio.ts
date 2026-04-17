import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'proj-portfolio', 
    title: 'Projeto: Portfólio Pessoal', 
    statement: 'Construa uma página de portfólio pessoal usando HTML e CSS.', 
    template: '<!-- index.html -->\n\n<!-- styles.css -->',
    youtubeVideoId: 'Y-1qjfd1IuY',
    detailedExplanation: `
        <h2>Construindo Seu Portfólio</h2>
        <p>Seu portfólio é seu cartão de visita como desenvolvedor. É uma chance de mostrar suas habilidades.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li><strong>Estrutura HTML:</strong> Crie um arquivo <code>index.html</code>. Use tags semânticas como <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, e <code>&lt;footer&gt;</code>.</li>
            <li><strong>Seções:</strong> Adicione seções para "Sobre Mim", "Projetos" e "Contato".</li>
            <li><strong>Estilização CSS:</strong> Crie um arquivo <code>styles.css</code> e o vincule ao seu HTML. Use Flexbox ou Grid para criar um layout responsivo.</li>
            <li><strong>Design:</strong> Escolha uma paleta de cores e fontes que representem seu estilo.</li>
        </ol>
    `
};

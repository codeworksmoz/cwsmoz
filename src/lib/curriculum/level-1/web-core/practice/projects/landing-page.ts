import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'proj-landing', 
    title: 'Projeto: Landing Page de Produto', 
    statement: 'Crie uma landing page para um produto fictício.', 
    template: '<!-- index.html -->\n\n<!-- styles.css -->',
    youtubeVideoId: 'u-PAnO12y00',
    detailedExplanation: `
        <h2>Criando uma Landing Page</h2>
        <p>Uma landing page é uma página única focada em converter visitantes em leads ou clientes.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li><strong>Estrutura HTML:</strong> Crie um arquivo <code>index.html</code>.</li>
            <li><strong>Seção Principal (Hero):</strong> Adicione uma seção no topo com um título chamativo (<code>&lt;h1&gt;</code>), uma breve descrição e um botão de "Call to Action" (CTA).</li>
            <li><strong>Seção de Features:</strong> Crie uma seção que destaque os principais benefícios do produto, talvez usando um layout Flexbox ou Grid.</li>
            <li><strong>Seção de Preços/Contato:</strong> Adicione uma seção final para informações de contato ou planos de preços.</li>
            <li><strong>Estilização CSS:</strong> Deixe a página visualmente atraente e responsiva.</li>
        </ol>
    `
};

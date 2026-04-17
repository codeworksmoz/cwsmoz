import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'sd-proj-patterns',
    title: 'Projeto: Biblioteca de Padrões de Design',
    statement: 'Crie uma pequena biblioteca em TypeScript que implementa três padrões de design de sua escolha (um criacional, um estrutural e um comportamental) e demonstre seu uso.',
    template: `// Exemplo de estrutura do projeto

// --- Padrão Criacional (Ex: Builder) ---
// ... seu código do Builder aqui ...


// --- Padrão Estrutural (Ex: Facade) ---
// ... seu código do Facade aqui ...


// --- Padrão Comportamental (Ex: State) ---
// ... seu código do State aqui ...


// --- Demonstração de Uso ---
console.log("--- Demonstração do Builder ---");
// ... crie um objeto com seu builder

console.log("\\n--- Demonstração do Facade ---");
// ... use sua facade para simplificar uma operação

console.log("\\n--- Demonstração do State ---");
// ... demonstre um objeto mudando de comportamento com base em seu estado
`,
    youtubeVideoId: 'tv-_1er1mWI',
    detailedExplanation: `
        <h2>Aplicando o Conhecimento</h2>
        <p>Este projeto é uma oportunidade para solidificar seu entendimento sobre os padrões de design, implementando-os do zero em um cenário prático.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li><strong>Escolha seus Padrões:</strong> Selecione um padrão de cada categoria (criacional, estrutural, comportamental) que você achou interessante. Por exemplo: Builder, Facade e State.</li>
            <li><strong>Implemente cada Padrão:</strong> Escreva as classes e interfaces necessárias para cada padrão escolhido. Crie um cenário simples para cada um (ex: construir um <code>Computador</code> com o Builder, simplificar a conversão de vídeo com a Facade, gerenciar o estado de um <code>Documento</code> com o State).</li>
            <li><strong>Demonstre o Uso:</strong> Na seção de demonstração, escreva um código cliente que use sua implementação de cada padrão para mostrar como eles funcionam e resolvem o problema para o qual foram projetados.</li>
        </ol>
        <p>Tente manter o código limpo e adicione comentários explicando as diferentes partes de cada padrão (Receiver, Invoker, Subject, etc.).</p>
    `
};

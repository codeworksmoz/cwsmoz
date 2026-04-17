import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'ai-ex-1', 
    title: 'Aprendizado Supervisionado vs. Não Supervisionado', 
    statement: 'Classifique os seguintes problemas como Supervisionados ou Não Supervisionados: 1) Prever o preço de uma casa com base em seu tamanho e localização. 2) Agrupar clientes de uma loja em diferentes segmentos com base em seu comportamento de compra. 3) Identificar se um email é spam ou não.', 
    template: `// 1. Prever preço da casa:
// ...

// 2. Agrupar clientes:
// ...

// 3. Identificar spam:
// ...
`,
    youtubeVideoId: 'i_LwzRVP7bg',
    detailedExplanation: `
        <h2>Diferenciando os Tipos de Aprendizado</h2>
        <p>A principal diferença é a presença (ou ausência) de dados rotulados no treinamento.</p>
        <h3>Passo a Passo da Análise</h3>
        <ol>
            <li><strong>Prever preço da casa:</strong> Para treinar o modelo, você precisa de um histórico de casas com seus preços (dados rotulados). O preço é o que você quer prever. Isso é <strong>Supervisionado (Regressão)</strong>.</li>
            <li><strong>Agrupar clientes:</strong> Você não sabe de antemão quais são os segmentos. Você quer que o algoritmo encontre padrões e crie os grupos. Não há rótulos. Isso é <strong>Não Supervisionado (Clusterização)</strong>.</li>
            <li><strong>Identificar spam:</strong> O modelo é treinado com uma grande quantidade de emails já classificados como "spam" ou "não spam". Isso é <strong>Supervisionado (Classificação)</strong>.</li>
        </ol>
    `
};

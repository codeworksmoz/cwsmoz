import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'data-ex-1', 
    title: 'Processo de Ciência de Dados', 
    statement: 'Ordene as seguintes etapas do processo de ciência de dados: Modelagem, Limpeza de Dados, Coleta de Dados, Comunicação de Resultados, Análise Exploratória.', 
    template: `// Ordem Correta:
// 1. ...
// 2. ...
// 3. ...
// 4. ...
// 5. ...
`,
    youtubeVideoId: 'XUwbZ8a2gPg',
    detailedExplanation: `
        <h2>Entendendo o Fluxo de Trabalho</h2>
        <p>Embora iterativo, o processo de ciência de dados geralmente segue uma sequência lógica para transformar dados brutos em insights acionáveis.</p>
        <h3>A Sequência Lógica</h3>
        <ol>
            <li><strong>Coleta de Dados:</strong> O primeiro passo é sempre obter os dados de várias fontes.</li>
            <li><strong>Limpeza de Dados:</strong> Dados do mundo real são bagunçados. Esta etapa, que consome muito tempo, envolve o tratamento de valores ausentes, correção de inconsistências e formatação.</li>
            <li><strong>Análise Exploratória de Dados (EDA):</strong> Onde você começa a "entender" os dados, calculando estatísticas descritivas e criando visualizações para encontrar padrões iniciais.</li>
            <li><strong>Modelagem:</strong> Aplicação de algoritmos estatísticos ou de machine learning para responder a uma pergunta ou fazer uma previsão.</li>
            <li><strong>Comunicação de Resultados:</strong> Apresentar os insights encontrados de forma clara e compreensível para os stakeholders, geralmente através de relatórios e visualizações.</li>
        </ol>
    `
};

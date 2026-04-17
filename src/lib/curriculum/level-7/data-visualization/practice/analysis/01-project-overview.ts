import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'fcc-dv-proj-1', 
    title: 'Análise de Projeto: Gráfico de Barras com D3', 
    statement: 'O primeiro projeto da certificação de Visualização de Dados é criar um gráfico de barras com a biblioteca D3.js. Descreva os passos fundamentais para criar esta visualização a partir de um conjunto de dados.', 
    template: `// Passos com D3.js:
// 1. Preparar o "palco":
//    - ... (Criar um container SVG e definir suas dimensões)

// 2. Definir as Escalas (Scales):
//    - ... (Criar uma escala para o eixo X e uma para o eixo Y)

// 3. Vincular os Dados (Data Binding):
//    - ... (Usar .data(), .enter(), .append() para criar as barras)

// 4. Desenhar os Eixos:
//    - ... (Usar d3.axisLeft() e d3.axisBottom())
`,
    youtubeVideoId: 's57bL2_D4as',
    detailedExplanation: `
        <h2>Visualizando Dados com D3</h2>
        <p>D3.js (Data-Driven Documents) é uma biblioteca poderosa que permite vincular dados a um Document Object Model (DOM) e aplicar transformações orientadas a dados. A chave é entender seu padrão de "enter, update, exit".</p>
        <h3>Passo a Passo da Lógica</h3>
        <ol>
            <li><strong>Preparar o Palco:</strong> Use D3 para selecionar um elemento no seu HTML e anexar um elemento <code><svg></code>. Defina a largura, altura e margens para a sua visualização.</li>
            <li><strong>Definir Escalas:</strong> Escalas são funções que mapeiam um domínio de dados (ex: de 0 a 1000) para um intervalo de saída (ex: de 0 a 500 pixels). Para um gráfico de barras, você precisará de uma escala linear ou de banda para o eixo X e uma escala linear para o eixo Y.</li>
            <li><strong>Vincular Dados:</strong> Este é o coração do D3. Você seleciona todos os elementos que ainda não existem (ex: <code>svg.selectAll("rect")</code>), vincula seus dados com <code>.data(dados)</code>, e usa a seleção <code>.enter()</code> para anexar um novo <code><rect></code> para cada ponto de dado. Em seguida, você usa as escalas para definir os atributos (x, y, largura, altura) de cada barra.</li>
            <li><strong>Desenhar Eixos:</strong> D3 fornece geradores de eixo convenientes (<code>d3.axisLeft</code>, etc.) que, quando chamados, criam todos os elementos SVG necessários para um eixo.</li>
        </ol>
    `
};

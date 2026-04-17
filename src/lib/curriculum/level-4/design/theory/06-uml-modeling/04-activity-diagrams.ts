import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-uml-activity",
    title: "Modelagem UML: Diagramas de Atividade",
    content: `
        <h2>Mapeando o Fluxo de Trabalho</h2>
        <p>O <strong>Diagrama de Atividade</strong> é um tipo de diagrama de fluxo de trabalho que representa o fluxo de uma atividade para outra. Ele é usado para modelar a dinâmica do sistema, descrevendo a sequência de ações.</p>
        <p>É muito semelhante a um fluxograma (flowchart) e pode ser usado para modelar tanto a lógica de negócio quanto fluxos de sistema.</p>
        
        <h3>Componentes Principais:</h3>
        <ul>
            <li><strong>Nó Inicial (Initial Node):</strong> Marca o início do fluxo. (Círculo preto preenchido).</li>
            <li><strong>Nó Final (Final Node):</strong> Marca o fim do fluxo. (Círculo preto com uma borda).</li>
            <li><strong>Ação (Action):</strong> Um passo no fluxo de trabalho. (Retângulo com cantos arredondados).</li>
            <li><strong>Nó de Decisão (Decision Node):</strong> Um ponto onde o fluxo se divide em múltiplos caminhos com base em uma condição. (Losango).</li>
            <li><strong>Nó de Fusão (Merge Node):</strong> Onde múltiplos caminhos de decisão se juntam novamente. (Losango).</li>
            <li><strong>Bifurcação e Junção (Fork and Join):</strong> Usados para representar atividades paralelas. Fork divide um fluxo em vários, e Join sincroniza vários fluxos de volta em um. (Barras pretas).</li>
        </ul>
        <p>Diagramas de atividade são úteis para entender processos de negócio complexos e para projetar a lógica de um método ou função.</p>
    `
};

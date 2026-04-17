import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "ds-t-graphs",
    title: "Grafos (Graphs)",
    content: `
        <h2>Modelando Redes e Conexões</h2>
        <p>Um <strong>Grafo</strong> é uma estrutura de dados não-linear que consiste em um conjunto de <strong>vértices</strong> (ou nós) e um conjunto de <strong>arestas</strong> que conectam pares de vértices.</p>
        
        <h3>Representações de Grafos:</h3>
        <ul>
            <li><strong>Matriz de Adjacência:</strong> Uma matriz 2D onde <code>A[i][j] = 1</code> se houver uma aresta entre o vértice <code>i</code> e <code>j</code>. É boa para grafos densos, mas desperdiça espaço para grafos esparsos.</li>
            <li><strong>Lista de Adjacência:</strong> Um array onde cada posição <code>i</code> contém uma lista de todos os vértices adjacentes a <code>i</code>. É eficiente em termos de espaço para grafos esparsos.</li>
        </ul>
        
        <h3>Tipos de Grafos:</h3>
        <ul>
            <li><strong>Grafo Não-Direcionado:</strong> As arestas não têm direção (se A está conectado a B, B está conectado a A). Ex: Uma amizade no Facebook.</li>
            <li><strong>Grafo Direcionado (Digrafo):</strong> As arestas têm uma direção. Ex: Seguir alguém no Twitter.</li>
            <li><strong>Grafo Ponderado:</strong> Cada aresta tem um peso ou custo associado. Ex: Um mapa de estradas onde o peso é a distância.</li>
        </ul>
        
        <h3>Conceitos Importantes:</h3>
        <ul>
            <li><strong>Ciclo:</strong> Um caminho em um grafo que começa e termina no mesmo vértice.</li>
            <li><strong>Conectividade:</strong> Um grafo é conectado se houver um caminho entre qualquer par de vértices.</li>
        </ul>
        <p>Grafos são usados para modelar uma enorme variedade de problemas do mundo real, como redes sociais, a internet, sistemas de GPS e muito mais.</p>
    `
};

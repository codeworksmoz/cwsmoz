import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "alg-t-graph-intro",
    title: "Algoritmos em Grafos (Introdução)",
    content: `
        <h2>Percorrendo Nós e Arestas</h2>
        <p>Algoritmos de grafos são fundamentais para resolver problemas relacionados a redes, como redes sociais, sistemas de roteamento e dependências.</p>

        <h3>Busca em Largura (Breadth-First Search - BFS)</h3>
        <p>BFS é um algoritmo para percorrer ou buscar em uma árvore ou grafo. Ele começa em um nó raiz e explora todos os nós vizinhos no nível atual antes de passar para os nós do próximo nível.</p>
        <p>É como jogar uma pedra na água: as ondas se espalham em camadas. BFS usa uma estrutura de dados de <strong>Fila (Queue)</strong>.</p>
        <p><strong>Aplicações:</strong> Encontrar o caminho mais curto entre dois nós em um grafo não ponderado, web crawling.</p>

        <h3>Busca em Profundidade (Depth-First Search - DFS)</h3>
        <p>DFS é um algoritmo que explora o mais longe possível ao longo de cada ramo antes de retroceder (backtracking).</p>
        <p>É como explorar um labirinto: você segue um caminho até o fim; se não houver saída, você volta e tenta outro caminho. DFS usa uma estrutura de dados de <strong>Pilha (Stack)</strong> (geralmente de forma implícita, através da recursão da pilha de chamadas).</p>
        <p><strong>Aplicações:</strong> Detecção de ciclos em um grafo, ordenação topológica, resolver labirintos.</p>
    `
};

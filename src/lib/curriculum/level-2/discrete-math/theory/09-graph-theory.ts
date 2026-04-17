import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "dm-t-graph-theory",
    title: "Teoria dos Grafos (Matemática)",
    content: `
        <h2>O Estudo das Relações</h2>
        <p>A <strong>Teoria dos Grafos</strong> é o estudo de grafos, que são estruturas matemáticas usadas para modelar relações entre objetos. Um grafo consiste em vértices (ou nós) e arestas (ou arcos) que conectam esses vértices.</p>
        
        <h3>Definições Formais:</h3>
        <p>Um grafo G é um par ordenado (V, E), onde V é um conjunto de vértices e E é um conjunto de arestas.</p>
        
        <h3>Caminhos e Ciclos Especiais:</h3>
        <ul>
            <li><strong>Caminho/Ciclo Euleriano:</strong> Um caminho (ou ciclo) em um grafo que visita cada aresta exatamente uma vez.</li>
            <li><strong>Caminho/Ciclo Hamiltoniano:</strong> Um caminho (ou ciclo) em um grafo que visita cada vértice exatamente uma vez.</li>
        </ul>
        
        <h3>Coloração de Grafos:</h3>
        <p>Uma atribuição de "cores" (geralmente inteiros) aos vértices de um grafo de tal forma que dois vértices adjacentes não tenham a mesma cor. O problema de encontrar o número mínimo de cores necessárias (o número cromático) é um problema NP-difícil famoso, com aplicações em agendamento e alocação de recursos.</p>

        <h3>Árvores Geradoras Mínimas (Minimum Spanning Trees - MST):</h3>
        <p>Dado um grafo conectado e ponderado, uma árvore geradora mínima é um subconjunto das arestas que conecta todos os vértices juntos, sem nenhum ciclo e com o menor peso total possível das arestas. Algoritmos como o de Kruskal e o de Prim são usados para encontrar a MST.</p>
    `
};

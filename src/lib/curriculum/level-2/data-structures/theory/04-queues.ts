import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "ds-t-queues",
    title: "Filas (Queues)",
    content: `
        <h2>Primeiro a Entrar, Primeiro a Sair (FIFO)</h2>
        <p>Uma <strong>Fila (Queue)</strong> é uma estrutura de dados linear que segue o princípio FIFO (First-In, First-Out). Pense em uma fila de pessoas em um supermercado: a primeira pessoa a chegar é a primeira a ser atendida.</p>
        
        <h3>Operações Principais:</h3>
        <ul>
            <li><strong>enqueue(item):</strong> Adiciona um item ao final da fila.</li>
            <li><strong>dequeue():</strong> Remove e retorna o item do início da fila.</li>
            <li><strong>front():</strong> Retorna o item do início da fila sem removê-lo.</li>
            <li><strong>isEmpty():</strong> Verifica se a fila está vazia.</li>
        </ul>
        <p>Em uma implementação eficiente (ex: com lista ligada), todas essas operações têm complexidade O(1).</p>

        <h3>Variações de Filas:</h3>
        <ul>
            <li><strong>Deque (Double-Ended Queue):</strong> Uma fila de duas pontas, onde elementos podem ser adicionados e removidos tanto do início quanto do fim.</li>
            <li><strong>Fila de Prioridade (Priority Queue):</strong> Cada item tem uma prioridade associada. Itens com maior prioridade são removidos primeiro, independentemente de quando entraram. Geralmente implementada com uma estrutura de dados chamada Heap.</li>
            <li><strong>Fila Circular:</strong> Uma implementação de fila usando um array de tamanho fixo, onde as posições "dão a volta" do final para o começo, otimizando o uso do espaço.</li>
        </ul>

        <h3>Aplicações Comuns:</h3>
        <ul>
            <li>Algoritmo de Busca em Largura (BFS) em grafos.</li>
            <li>Gerenciamento de tarefas em sistemas operacionais (scheduling).</li>
            <li>Buffers de dados em streaming.</li>
            <li>Filas de impressão.</li>
        </ul>
    `
};

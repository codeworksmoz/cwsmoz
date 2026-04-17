import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "ds-t-trees",
    title: "Árvores (Trees)",
    content: `
        <h2>Estruturas de Dados Hierárquicas</h2>
        <p>Uma <strong>Árvore</strong> é uma estrutura de dados não-linear que simula uma estrutura hierárquica, com um nó raiz e sub-árvores de filhos com um nó pai.</p>
        
        <h3>Terminologia:</h3>
        <ul>
            <li><strong>Nó (Node):</strong> Um elemento da árvore.</li>
            <li><strong>Raiz (Root):</strong> O nó do topo da árvore.</li>
            <li><strong>Folha (Leaf):</strong> Um nó que não tem filhos.</li>
            <li><strong>Altura (Height):</strong> O comprimento do caminho mais longo da raiz até uma folha.</li>
            <li><strong>Profundidade (Depth):</strong> O comprimento do caminho da raiz até um nó específico.</li>
        </ul>
        
        <h3>Tipos Importantes de Árvores:</h3>
        <ul>
            <li><strong>Árvore Binária:</strong> Uma árvore onde cada nó tem no máximo dois filhos.</li>
            <li><strong>Árvore Binária de Busca (Binary Search Tree - BST):</strong> Uma árvore binária onde, para cada nó, todos os valores na sub-árvore esquerda são menores, e todos os valores na sub-árvore direita são maiores. Permite busca, inserção e remoção eficientes (O(log n) em média).</li>
            <li><strong>Árvores Balanceadas (AVL, Red-Black):</strong> Variações da BST que se auto-balanceiam para garantir que a altura permaneça logarítmica, mesmo no pior caso, mantendo a performance O(log n).</li>
            <li><strong>Heap:</strong> Uma árvore binária especializada onde o nó pai é sempre maior (Max-Heap) ou menor (Min-Heap) que seus filhos. Usada para implementar filas de prioridade.</li>
            <li><strong>Árvore B e B+:</strong> Árvores de busca otimizadas para sistemas de arquivos e bancos de dados, minimizando o número de acessos a disco.</li>
            <li><strong>Trie (Árvore de Prefixos):</strong> Usada para armazenar e buscar strings de forma eficiente.</li>
        </ul>
    `
};

import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "ds-t-sets",
    title: "Conjuntos (Sets)",
    content: `
        <h2>Coleções de Itens Únicos</h2>
        <p>Um <strong>Conjunto (Set)</strong> é uma estrutura de dados abstrata que pode armazenar valores únicos, sem nenhuma ordem particular. É uma implementação computacional do conceito matemático de um conjunto finito.</p>
        
        <h3>Operações Principais:</h3>
        <p>As operações em conjuntos são geralmente muito eficientes.</p>
        <ul>
            <li><strong>add(item):</strong> Adiciona um item ao conjunto. Se o item já existir, nada acontece.</li>
            <li><strong>has(item):</strong> Verifica se um item pertence ao conjunto (retorna true ou false).</li>
            <li><strong>delete(item):</strong> Remove um item do conjunto.</li>
        </ul>

        <h3>Operações Matemáticas:</h3>
        <p>Conjuntos são poderosos para realizar operações matemáticas de teoria de conjuntos:</p>
        <ul>
            <li><strong>União (Union):</strong> Retorna um novo conjunto com todos os elementos de dois conjuntos.</li>
            <li><strong>Interseção (Intersection):</strong> Retorna um novo conjunto com os elementos que são comuns a ambos os conjuntos.</li>
            <li><strong>Diferença (Difference):</strong> Retorna um novo conjunto com os elementos do primeiro conjunto que não estão no segundo.</li>
        </ul>
        
        <h3>Implementação:</h3>
        <p>Conjuntos são frequentemente implementados internamente usando uma <strong>Tabela Hash</strong> para garantir que as operações de adição, remoção e verificação de pertencimento tenham uma complexidade de tempo média de O(1).</p>
        
        <h3>BitSets</h3>
        <p>Um <strong>BitSet</strong> (ou Bit Array) é uma implementação de conjunto altamente eficiente em termos de espaço para armazenar inteiros pequenos, usando um único bit para representar a presença (1) ou ausência (0) de cada número.</p>
    `
};

import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "ds-t-arrays-lists",
    title: "Arrays e Listas",
    content: `
        <h2>A Estrutura de Dados Mais Fundamental</h2>
        <p>Um <strong>Array</strong> (ou vetor) é uma coleção de itens armazenados em locais de memória contíguos. O principal benefício é que o acesso a qualquer elemento é muito rápido, com complexidade de tempo O(1), usando seu índice.</p>
        
        <h3>Arrays Estáticos vs. Dinâmicos</h3>
        <ul>
            <li><strong>Arrays Estáticos:</strong> Têm um tamanho fixo, definido no momento da criação. Tentar adicionar mais elementos do que a capacidade resulta em erro. (Comum em linguagens como C++ e Java).</li>
            <li><strong>Arrays Dinâmicos:</strong> Podem crescer e encolher de tamanho. Quando um array dinâmico atinge sua capacidade, ele aloca um novo bloco de memória maior e copia os elementos antigos. (Implementado como <code>List</code> em Python ou <code>ArrayList</code> em Java).</li>
        </ul>

        <h3>Operações Comuns e Complexidades:</h3>
        <ul>
            <li><strong>Acesso (por índice):</strong> O(1)</li>
            <li><strong>Busca (por valor):</strong> O(n)</li>
            <li><strong>Inserção/Remoção (no final):</strong> O(1) (amortizado para arrays dinâmicos)</li>
            <li><strong>Inserção/Remoção (no início ou meio):</strong> O(n) (porque os elementos precisam ser deslocados)</li>
        </ul>
        
        <h3>Arrays Multidimensionais</h3>
        <p>São arrays de arrays, usados para criar matrizes ou grades. Uma matriz 2D é comumente usada para representar tabuleiros de jogos, imagens (pixels) ou dados tabulares.</p>
    `
};

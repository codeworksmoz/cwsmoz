import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "alg-t-paradigms",
    title: "Paradigmas de Algoritmos",
    content: `
        <h2>Estratégias para Resolver Problemas</h2>
        <p>Paradigmas de algoritmos são abordagens ou estratégias gerais para projetar algoritmos e resolver problemas.</p>
        
        <h3>Divisão e Conquista (Divide and Conquer)</h3>
        <p>Esta estratégia envolve três passos:</p>
        <ol>
            <li><strong>Dividir:</strong> Quebrar o problema original em subproblemas menores.</li>
            <li><strong>Conquistar:</strong> Resolver os subproblemas recursivamente.</li>
            <li><strong>Combinar:</strong> Combinar as soluções dos subproblemas para criar a solução do problema original.</li>
        </ol>
        <p><em>Exemplos: Merge Sort, Quick Sort.</em></p>

        <h3>Algoritmos Gulosos (Greedy Algorithms)</h3>
        <p>Faz a escolha que parece ser a melhor no momento, na esperança de que isso leve a uma solução ótima global. Não volta atrás para reconsiderar suas escolhas. Funciona bem para problemas de otimização específicos.</p>
        <p><em>Exemplo: Algoritmo de Dijkstra para encontrar o caminho mais curto.</em></p>
        
        <h3>Programação Dinâmica (Dynamic Programming - DP)</h3>
        <p>Resolve problemas complexos quebrando-os em subproblemas mais simples e sobrepostos. A solução para cada subproblema é armazenada (memoization ou tabulação) para que não precise ser recalculada. É útil quando os subproblemas são interdependentes.</p>
        <p><em>Exemplo: Problema da Mochila (Knapsack), Sequência de Fibonacci.</em></p>
        
        <h3>Backtracking</h3>
        <p>Abordagem de força bruta incremental. Tenta construir uma solução passo a passo e abandona um caminho assim que determina que ele não pode levar a uma solução válida ("backtrack").</p>
        <p><em>Exemplo: Resolver Sudoku, Problema das 8 Rainhas.</em></p>
    `
};

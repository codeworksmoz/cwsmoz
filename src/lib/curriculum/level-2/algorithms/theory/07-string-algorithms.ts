import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "alg-t-string",
    title: "Algoritmos de String",
    content: `
        <h2>Processando Texto de Forma Eficiente</h2>
        <p>Algoritmos de string são um conjunto de algoritmos para realizar operações em strings, como busca e comparação.</p>
        
        <h3>Busca de Padrões (Pattern Matching)</h3>
        <p>O problema de encontrar a ocorrência de um padrão (uma string menor) dentro de um texto maior.</p>
        <ul>
            <li><strong>Algoritmo Ingênuo:</strong> Desliza o padrão sobre o texto, uma posição de cada vez, e verifica a correspondência. Ineficiente para textos grandes.</li>
            <li><strong>Knuth-Morris-Pratt (KMP):</strong> Um algoritmo muito mais eficiente que pré-processa o padrão para evitar comparações desnecessárias após uma falha de correspondência.</li>
            <li><strong>Rabin-Karp:</strong> Usa hashing para encontrar o padrão. Ele calcula o hash do padrão e de cada sub-string do texto e compara os hashes.</li>
        </ul>

        <h3>Distância de Edição (Edit Distance)</h3>
        <p>Mede quão diferentes duas strings são. A <strong>Distância de Levenshtein</strong> é a métrica mais comum, contando o número mínimo de edições de um único caractere (inserções, exclusões ou substituições) necessárias para mudar uma palavra na outra.</p>
        <p>É um problema clássico resolvido com programação dinâmica e tem aplicações em corretores ortográficos e bioinformática.</p>
    `
};

import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "alg-t-searching",
    title: "Algoritmos de Busca",
    content: `
        <h2>Encontrando Informações</h2>
        <p>Algoritmos de busca são usados para encontrar um item com propriedades especificadas dentro de uma coleção de itens.</p>

        <h3>Busca em Listas Não Ordenadas</h3>
        <ul>
            <li><strong>Linear Search (Busca Linear):</strong> O algoritmo mais simples. Percorre a coleção item por item até encontrar o alvo ou chegar ao fim. Complexidade de tempo: O(n).</li>
        </ul>

        <h3>Busca em Listas Ordenadas</h3>
        <p>Se a coleção já estiver ordenada, podemos usar algoritmos muito mais eficientes.</p>
        <ul>
            <li><strong>Binary Search (Busca Binária):</strong> Compara o item alvo com o elemento do meio da coleção. Se não forem iguais, a metade em que o alvo não pode estar é eliminada, e a busca continua na metade restante. Complexidade de tempo: O(log n).</li>
            <li><strong>Jump Search:</strong> Verifica menos elementos que a busca linear pulando um número fixo de passos.</li>
            <li><strong>Interpolation Search:</strong> Uma melhoria da busca binária para dados uniformemente distribuídos.</li>
            <li><strong>Exponential Search:</strong> Encontra um intervalo onde o elemento pode estar e depois usa a busca binária.</li>
            <li><strong>Ternary Search:</strong> Semelhante à busca binária, mas divide o array em três partes.</li>
        </ul>
    `
};

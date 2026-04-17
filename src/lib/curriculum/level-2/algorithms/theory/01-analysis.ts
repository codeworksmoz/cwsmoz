import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "alg-t-analysis",
    title: "Análise de Algoritmos",
    content: `
        <h2>Como Medir a Eficiência de um Algoritmo?</h2>
        <p>Ao resolver um problema, muitas vezes existem vários algoritmos diferentes que podem ser usados. Como decidimos qual é o "melhor"? Medimos sua eficiência em termos de <strong>tempo</strong> (quão rápido ele executa) e <strong>espaço</strong> (quanta memória ele usa).</p>
        
        <h3>Análise Assintótica</h3>
        <p>Em vez de medir o tempo em segundos (que depende do hardware), analisamos como o tempo de execução ou o uso de memória de um algoritmo cresce à medida que o tamanho da entrada (input) aumenta. Isso é chamado de análise assintótica.</p>

        <h3>Notação Big O, Big Theta e Big Omega</h3>
        <ul>
            <li><strong>Big O (O): Limite Superior (Pior Caso):</strong> Descreve o pior cenário de performance. É a mais comum, pois nos dá uma garantia. Dizemos que um algoritmo é <em>O(f(n))</em> se seu tempo de execução no pior caso não cresce mais rápido que uma constante vezes <em>f(n)</em>.</li>
            <li><strong>Big Omega (Ω): Limite Inferior (Melhor Caso):</strong> Descreve o melhor cenário de performance.</li>
            <li><strong>Big Theta (Θ): Limite Justo (Caso Médio):</strong> Descreve o comportamento médio do algoritmo. É o mais preciso, mas muitas vezes mais difícil de calcular.</li>
        </ul>
        
        <h3>Complexidades Comuns:</h3>
        <ul>
            <li><strong>O(1) - Constante:</strong> O tempo não muda com a entrada.</li>
            <li><strong>O(log n) - Logarítmico:</strong> O tempo cresce muito lentamente. Ex: Busca Binária.</li>
            <li><strong>O(n) - Linear:</strong> O tempo cresce linearmente com a entrada. Ex: Percorrer um array.</li>
            <li><strong>O(n log n) - Linearítmico:</strong> Comum em algoritmos de ordenação eficientes. Ex: Merge Sort, Quick Sort.</li>
            <li><strong>O(n²) - Quadrático:</strong> O tempo cresce exponencialmente. Ex: Loops aninhados (Bubble Sort).</li>
            <li><strong>O(2^n) - Exponencial:</strong> Extremamente lento. Geralmente indica um algoritmo de força bruta.</li>
        </ul>
    `
};

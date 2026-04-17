import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "alg-t-sorting",
    title: "Algoritmos de Ordenação",
    content: `
        <h2>Organizando Dados</h2>
        <p>Algoritmos de ordenação são um tópico fundamental em ciência da computação, com uma vasta gama de aplicações. Eles são classificados principalmente por sua complexidade de tempo.</p>

        <h3>Algoritmos Simples (O(n²))</h3>
        <p>São fáceis de implementar, mas ineficientes para grandes conjuntos de dados.</p>
        <ul>
            <li><strong>Bubble Sort:</strong> Compara repetidamente pares adjacentes e os troca se estiverem na ordem errada.</li>
            <li><strong>Selection Sort:</strong> Encontra repetidamente o menor elemento da parte não ordenada e o coloca no início.</li>
            <li><strong>Insertion Sort:</strong> Constrói a lista ordenada final um item de cada vez, inserindo cada item em sua posição correta.</li>
        </ul>

        <h3>Algoritmos Eficientes (O(n log n))</h3>
        <p>Usam estratégias de "divisão e conquista" para alcançar uma performance muito melhor.</p>
        <ul>
            <li><strong>Merge Sort:</strong> Divide a lista pela metade, ordena cada metade recursivamente e depois junta (merge) as duas metades ordenadas.</li>
            <li><strong>Quick Sort:</strong> Escolhe um elemento como "pivô" e particiona os outros elementos em dois sub-arrays, de acordo com se eles são menores ou maiores que o pivô. Em seguida, ordena os sub-arrays recursivamente.</li>
            <li><strong>Heap Sort:</strong> Usa a estrutura de dados Heap para ordenar os elementos.</li>
        </ul>

        <h3>Algoritmos de Ordenação Linear (Não-comparativos)</h3>
        <p>Esses algoritmos não usam comparações e podem ser mais rápidos que O(n log n) sob certas condições.</p>
        <ul>
            <li><strong>Counting Sort:</strong> Funciona contando o número de ocorrências de cada valor distinto.</li>
            <li><strong>Radix Sort:</strong> Ordena os números inteiros processando dígitos individuais.</li>
            <li><strong>Bucket Sort:</strong> Distribui os elementos em vários "baldes" (buckets) e depois ordena cada balde individualmente.</li>
        </ul>
    `
};

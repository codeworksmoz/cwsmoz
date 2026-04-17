import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'alg-js-binary-search',
    title: 'Implementando Busca Binária',
    statement: 'Implemente o algoritmo de Busca Binária para encontrar o índice de um elemento em um array ordenado.',
    template: `function binarySearch(sortedArr, target) {
  let left = 0;
  let right = sortedArr.length - 1;

  // Seu código aqui

  return -1; // Retorna -1 se o alvo não for encontrado
}`,
    youtubeVideoId: 'v4cd1O4zkGw',
    detailedExplanation: `
        <h2>Busca Binária: Eficiência em Arrays Ordenados</h2>
        <p>A Busca Binária é um algoritmo muito eficiente (O(log n)) para encontrar um item em uma lista <strong>ordenada</strong>. Ele funciona dividindo repetidamente pela metade a porção da lista que poderia conter o item, até reduzir as possíveis localizações a apenas uma.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li>Crie um loop <code>while</code> que continue enquanto <code>left <= right</code>.</li>
            <li>Dentro do loop, calcule o índice do meio (<code>mid</code>).</li>
            <li>Compare o elemento em <code>mid</code> com o <code>target</code>.</li>
            <li>Se for igual, você encontrou! Retorne <code>mid</code>.</li>
            <li>Se o alvo for menor, descarte a metade direita da busca, ajustando <code>right = mid - 1</code>.</li>
            <li>Se o alvo for maior, descarte a metade esquerda da busca, ajustando <code>left = mid + 1</code>.</li>
        </ol>
    `,
    tests: [
        {
            description: "Deve encontrar o elemento no meio",
            code: "return binarySearch([1, 2, 3, 4, 5], 3) === 2;"
        },
        {
            description: "Deve encontrar o elemento na primeira metade",
            code: "return binarySearch([10, 20, 30, 40, 50, 60], 20) === 1;"
        },
        {
            description: "Deve retornar -1 se o elemento não existir",
            code: "return binarySearch([1, 2, 3, 4, 5], 6) === -1;"
        }
    ]
};

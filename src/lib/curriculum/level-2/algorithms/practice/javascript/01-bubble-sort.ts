import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'alg-js-bubble-sort',
    title: 'Implementando Bubble Sort',
    statement: 'Implemente o algoritmo Bubble Sort para ordenar um array de números em ordem crescente.',
    template: `function bubbleSort(arr) {
  let n = arr.length;
  // Seu código aqui

  return arr;
}`,
    youtubeVideoId: 'Vca808JTbI8',
    detailedExplanation: `
        <h2>Bubble Sort: O Algoritmo de Ordenação Simples</h2>
        <p>O Bubble Sort é um dos algoritmos de ordenação mais simples. Ele funciona percorrendo repetidamente a lista, comparando elementos adjacentes e trocando-os se estiverem na ordem errada.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li>Percorra o array com um loop externo, de <code>i = 0</code> até <code>n-1</code>.</li>
            <li>Percorra o array com um loop interno, de <code>j = 0</code> até <code>n-i-1</code>.</li>
            <li>Dentro do loop interno, compare <code>arr[j]</code> com <code>arr[j+1]</code>.</li>
            <li>Se <code>arr[j]</code> for maior que <code>arr[j+1]</code>, troque os dois elementos.</li>
        </ol>
        <p>Embora simples, o Bubble Sort é ineficiente para grandes listas (complexidade O(n²)), mas é um ótimo ponto de partida para entender algoritmos de ordenação.</p>
    `,
    tests: [
        {
            description: "Deve ordenar um array simples",
            code: "return JSON.stringify(bubbleSort([5, 3, 8, 4, 2])) === JSON.stringify([2, 3, 4, 5, 8]);"
        },
        {
            description: "Deve lidar com um array já ordenado",
            code: "return JSON.stringify(bubbleSort([1, 2, 3, 4, 5])) === JSON.stringify([1, 2, 3, 4, 5]);"
        },
        {
            description: "Deve lidar com um array com elementos duplicados",
            code: "return JSON.stringify(bubbleSort([5, 3, 8, 3, 2])) === JSON.stringify([2, 3, 3, 5, 8]);"
        }
    ]
};

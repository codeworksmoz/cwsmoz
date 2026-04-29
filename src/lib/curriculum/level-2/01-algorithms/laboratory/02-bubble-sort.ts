import type { PracticeExercise } from '../../types';

export const exercise: PracticeExercise = {
  id: "alg-p2",
  language: "javascript",
  title: "Laboratório: Bubble Sort",
  description: "Pratique trocas de valores num array.",
  statement: "Implemente a troca (swap) entre arr[j] e arr[j+1] se arr[j] for maior.",
  template: `function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Realiza a troca aqui
      }
    }
  }
  return arr;
}`,
  detailedExplanation: `<h3>🫧 O Algoritmo da Bolha</h3><p>Percorremos o array várias vezes, empurrando o maior elemento para a direita como uma bolha a subir na água.</p>`,
  objectives: [
    {
      id: "obj1",
      description: "Implementar a lógica de troca",
      test: "arr[j] = arr[j + 1]"
    }
  ]
};

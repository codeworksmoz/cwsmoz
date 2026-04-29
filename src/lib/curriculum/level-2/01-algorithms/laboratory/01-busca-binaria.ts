import type { PracticeExercise } from '../../types';

export const exercise: PracticeExercise = {
  id: "alg-p1",
  language: "javascript",
  title: "Laboratório: Busca Binária",
  description: "Implemente a lógica de divisão e conquista.",
  statement: "Complete a lógica para calcular o ponto médio 'meio' e verificar o valor.",
  template: `function buscaBinaria(arr, alvo) {
  let inicio = 0;
  let fim = arr.length - 1;

  while (inicio <= fim) {
    let meio = ; // Calcula o meio aqui
    if (arr[meio] === alvo) return meio;
    if (arr[meio] < alvo) inicio = meio + 1;
    else fim = meio - 1;
  }
  return -1;
}`,
  detailedExplanation: `<h3>⚡ Eficiência Logarítmica</h3><p>O segredo da busca binária é reduzir o espaço de busca a metade em cada iteração.</p>`,
  objectives: [
    {
      id: "obj1",
      description: "Calcular o índice do meio corretamente",
      test: "Math.floor((inicio + fim) / 2)"
    }
  ]
};

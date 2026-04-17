import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'pla-js-functional', 
    title: 'Programação Funcional: map, filter, reduce', 
    statement: 'Dado um array de números, use map, filter e reduce para retornar a soma do quadrado dos números pares.', 
    template: `const numeros = [1, 2, 3, 4, 5, 6];

function processarNumeros(arr) {
  // 1. Filtre apenas os números pares.
  // 2. Mapeie cada número par para o seu quadrado.
  // 3. Reduza o array resultante para uma única soma.
  // Encadeie os métodos!
  return // seu código aqui
}
`,
    youtubeVideoId: 'o_wD-030D-Y',
    detailedExplanation: `
        <h2>Compondo Funções de Alta Ordem</h2>
        <p><code>map</code>, <code>filter</code>, e <code>reduce</code> são a base da programação funcional em JavaScript, permitindo transformações de dados complexas de forma declarativa e legível.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li><strong>filter:</strong> Comece com <code>arr.filter(n => n % 2 === 0)</code> para obter um novo array apenas com os números pares.</li>
            <li><strong>map:</strong> Encadeie o método <code>.map(n => n * n)</code> no resultado do filtro para obter um novo array com os quadrados.</li>
            <li><strong>reduce:</strong> Encadeie o método <code>.reduce((acc, curr) => acc + curr, 0)</code> no resultado do map para somar todos os valores. O <code>0</code> é o valor inicial do acumulador.</li>
        </ol>
    `,
    tests: [
        {
            description: "Deve processar corretamente o array [1, 2, 3, 4, 5, 6]",
            code: `return processarNumeros([1, 2, 3, 4, 5, 6]) === (4 + 16 + 36);`
        },
        {
            description: "Deve retornar 0 para um array sem números pares",
            code: `return processarNumeros([1, 3, 5]) === 0;`
        }
    ]
};

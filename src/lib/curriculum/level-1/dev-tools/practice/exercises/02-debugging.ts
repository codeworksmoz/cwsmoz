import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'devtools-ex-2', 
    title: 'Depurando Código com um IDE', 
    statement: 'Dado um pequeno código com um bug, descreva os passos que você seguiria no VS Code para encontrar o problema usando o depurador.', 
    template: `const numeros = [1, 2, 3, 4, 5];
let soma = 0;
for (let i = 0; i <= numeros.length; i++) { // Bug está aqui!
  soma += numeros[i];
}
console.log(soma); // Deveria ser 15, mas resulta em erro.

// Passos para depurar:
// 1. Colocar um breakpoint: ...
// 2. Iniciar a depuração: ...
// 3. Inspecionar variáveis: ...
// 4. Identificar o problema: ...
`,
    youtubeVideoId: 'a_l648-wN3o',
    detailedExplanation: `
        <h2>Encontrando Bugs com o Depurador</h2>
        <p>Usar <code>console.log</code> é útil, mas um depurador visual é uma ferramenta muito mais poderosa. Ele permite pausar a execução do código e inspecionar o estado do seu programa.</p>
        <h3>Passo a Passo da Depuração</h3>
        <ol>
            <li><strong>Colocar um Breakpoint:</strong> Clique na margem à esquerda do número da linha onde você quer pausar a execução (ex: na linha do <code>for</code>). Um ponto vermelho aparecerá.</li>
            <li><strong>Iniciar a Depuração:</strong> Vá para a aba "Run and Debug" e clique no botão verde para iniciar.</li>
            <li><strong>Inspecionar Variáveis:</strong> Quando o código pausar no breakpoint, a aba do depurador mostrará o valor atual de todas as variáveis (<code>i</code>, <code>soma</code>). Use os controles (Step Over, Step Into) para avançar o código linha por linha.</li>
            <li><strong>Identificar o Problema:</strong> Ao avançar o loop, você notará que na última iteração, <code>i</code> será <code>5</code>. A tentativa de acessar <code>numeros[5]</code> resulta em <code>undefined</code>, pois o último índice é 4. O bug é o <code><=</code> no loop, que deveria ser <code><</code>.</li>
        </ol>
        <p>No editor, descreva esses passos de forma concisa.</p>
    `
};

import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'fcc-js-proj-1', 
    title: 'Análise de Projeto: Verificador de Palíndromos', 
    statement: 'O primeiro projeto da certificação de Algoritmos e Estruturas de Dados com JavaScript é construir um verificador de palíndromos. Descreva a lógica principal e os casos de borda a serem considerados.', 
    template: `// Lógica Principal:
// 1. Receber uma string.
// 2. Remover todos os caracteres não-alfanuméricos e converter para um mesmo caso (minúsculo ou maiúsculo).
// 3. Verificar se a string resultante é igual à sua versão invertida.

// Casos de Borda a Considerar:
// - Strings com diferentes casos: "RaceCar"
// - Strings com pontuação e espaços: "A man, a plan, a canal. Panama"
// - Strings com símbolos: "0_0 (: /-\ :) 0-0"
`,
    youtubeVideoId: 'N600-iW18Ew',
    detailedExplanation: `
        <h2>Analisando o Desafio do Palíndromo</h2>
        <p>Este projeto testa sua habilidade de manipular strings e pensar em casos de borda. Um palíndromo é uma palavra ou frase que se lê da mesma forma de trás para frente, ignorando pontuação, caso e espaçamento.</p>
        <h3>Passo a Passo da Lógica</h3>
        <ol>
            <li>Use expressões regulares (regex) para remover todos os caracteres que não são letras ou números.</li>
            <li>Converta a string inteira para minúsculas para garantir uma comparação de caso insensível.</li>
            <li>Crie uma versão invertida da string limpa. Você pode fazer isso transformando a string em um array, usando o método <code>.reverse()</code> do array e depois juntando de volta em uma string.</li>
            <li>Compare a string original limpa com a sua versão invertida.</li>
        </ol>
        <p>Pensar nos diferentes tipos de entrada (casos de borda) é a chave para uma solução robusta.</p>
    `
};

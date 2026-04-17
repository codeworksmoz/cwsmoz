import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'pla-js-async', 
    title: 'Programação Assíncrona: async/await', 
    statement: 'Escreva uma função assíncrona que simula a busca de dados de uma API. A função deve usar `await` para esperar por uma Promise que resolve após um segundo.', 
    template: `// Função que simula uma chamada de API demorada
function buscarDadosDaApi() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ dados: "Informação do servidor" });
    }, 1000);
  });
}

// Escreva sua função assíncrona 'processar' abaixo.
// Ela deve chamar 'buscarDadosDaApi' com 'await'
// e retornar os dados recebidos.

async function processar() {
  // Seu código aqui
}
`,
    youtubeVideoId: 'DHvZLI7Db8E',
    detailedExplanation: `
        <h2>Escrevendo Código Assíncrono Limpo</h2>
        <p><code>async/await</code> é uma sintaxe moderna em JavaScript que torna o trabalho com Promises muito mais fácil e legível, evitando o "callback hell" ou cadeias longas de <code>.then()</code>.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li>Declare sua função com a palavra-chave <code>async</code> antes do nome.</li>
            <li>Dentro da função, chame a função <code>buscarDadosDaApi()</code> e coloque a palavra-chave <code>await</code> na frente dela. Isso pausará a execução da sua função até que a Promise seja resolvida.</li>
            <li>Armazene o resultado da Promise em uma variável: <code>const resultado = await buscarDadosDaApi();</code>.</li>
            <li>Retorne a propriedade <code>dados</code> do objeto de resultado.</li>
        </ol>
    `
};

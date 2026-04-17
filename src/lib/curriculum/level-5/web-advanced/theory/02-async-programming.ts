import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t2-async",
    title: "Programação Assíncrona: Promises, async/await, Event Loop",
    youtubeVideoId: "DHvZLI7Db8E",
    content: `
        <h2>Lidando com Operações Demoradas</h2>
        <p>No desenvolvimento web, muitas operações levam tempo, como buscar dados de um servidor. Se o JavaScript esperasse por cada uma, a página congelaria. Para resolver isso, usamos código <strong>assíncrono</strong>.</p>
        
        <h3>Promises</h3>
        <p>Uma <strong>Promise</strong> é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona. Ela pode estar em três estados: pendente, cumprida ou rejeitada.</p>
        <pre><code class="language-js">fetch('https://api.exemplo.com/dados')
  .then(response => response.json()) // Quando a busca termina, converte a resposta
  .then(data => console.log(data))   // Quando a conversão termina, usa os dados
  .catch(error => console.error('Houve um erro:', error)); // Se algo falhar
</code></pre>

        <h3>Async/Await</h3>
        <p>ES2017 introduziu <code>async/await</code>, uma sintaxe que torna o código assíncrono mais fácil de ler, fazendo-o parecer síncrono.</p>
        <pre><code class="language-js">async function buscarDados() {
  try {
    const response = await fetch('https://api.exemplo.com/dados');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Houve um erro:', error);
  }
}
</code></pre>
        <p>A palavra-chave <code>await</code> pausa a execução da função <code>async</code> até que a Promise seja resolvida.</p>

        <h3>O Event Loop</h3>
        <p>O JavaScript executa em uma única thread, mas consegue lidar com operações assíncronas graças ao <strong>Event Loop</strong>. Quando uma operação demorada é iniciada, ela é passada para uma API do ambiente (ex: navegador). Quando a operação termina, seu callback é colocado em uma fila. O Event Loop verifica continuamente a pilha de execução (call stack); se estiver vazia, ele pega o primeiro item da fila e o executa.</p>
    `
};

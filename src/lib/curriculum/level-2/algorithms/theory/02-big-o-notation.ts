import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "alg-t2",
    title: "Análise de Complexidade (Big O Notation)",
    youtubeVideoId: "v4cd1O4zkGw",
    content: `
        <h2>Como Medir a Eficiência de um Algoritmo?</h2>
        <p>Ao resolver um problema, muitas vezes existem vários algoritmos diferentes que podem ser usados. Como decidimos qual é o "melhor"? Medimos sua eficiência em termos de <strong>tempo</strong> (quão rápido ele executa) e <strong>espaço</strong> (quanta memória ele usa).</p>
        <p>A <strong>Notação Big O</strong> é a linguagem que usamos para descrever como o tempo de execução ou o uso de memória de um algoritmo cresce à medida que o tamanho da entrada (input) aumenta.</p>
        
        <h3>Exemplos Comuns de Complexidade de Tempo:</h3>
        <ul>
            <li>
                <strong>O(1) - Constante:</strong> O tempo de execução não muda, independentemente do tamanho da entrada. É o ideal.
                <pre><code class="language-javascript">// Acessar um item em um array pelo índice
const item = meuArray[3];</code></pre>
            </li>
            <li>
                <strong>O(n) - Linear:</strong> O tempo de execução cresce linearmente com o tamanho da entrada (n). Se a entrada dobrar, o tempo de execução também dobra.
                <pre><code class="language-javascript">// Percorrer todos os itens de um array
for (let i = 0; i < meuArray.length; i++) {
  console.log(meuArray[i]);
}</code></pre>
            </li>
            <li>
                <strong>O(n²) - Quadrático:</strong> O tempo de execução cresce exponencialmente. É comum em algoritmos com loops aninhados (um loop dentro de outro). Deve ser evitado para grandes entradas.
                <pre><code class="language-javascript">// Comparar cada item do array com todos os outros
for (let i = 0; i < meuArray.length; i++) {
  for (let j = 0; j < meuArray.length; j++) {
    // ... faz alguma comparação
  }
}</code></pre>
            </li>
            <li>
                <strong>O(log n) - Logarítmico:</strong> O tempo de execução cresce muito lentamente. O algoritmo corta o problema pela metade a cada passo. Exemplo clássico: busca binária em um array ordenado.
            </li>
        </ul>
        <p>Entender a Notação Big O é crucial para escrever código eficiente e escalável.</p>
    `
};

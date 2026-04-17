import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "alg-t-recursion",
    title: "Recursão",
    content: `
        <h2>Uma Função que Chama a Si Mesma</h2>
        <p><strong>Recursão</strong> é uma técnica de programação onde uma função chama a si mesma para resolver um problema. Um problema recursivo é aquele que pode ser quebrado em subproblemas menores da mesma natureza.</p>

        <h3>Componentes de uma Função Recursiva:</h3>
        <ol>
            <li><strong>Caso Base:</strong> Uma condição que termina a recursão. Sem um caso base, a função chamaria a si mesma indefinidamente, resultando em um "stack overflow".</li>
            <li><strong>Caso Recursivo:</strong> Onde a função chama a si mesma com uma entrada modificada, que se aproxima do caso base.</li>
        </ol>

        <pre><code class="language-js">// Exemplo: Fatorial
function fatorial(n) {
  // Caso Base
  if (n === 0) {
    return 1;
  }
  // Caso Recursivo
  return n * fatorial(n - 1);
}
</code></pre>

        <h3>Pilha de Chamadas (Call Stack)</h3>
        <p>A recursão usa a pilha de chamadas para manter o controle de cada chamada de função. Cada chamada à função adiciona um novo "frame" à pilha. Quando um caso base é atingido, os frames começam a ser removidos da pilha e os valores retornados.</p>

        <h3>Recursão de Cauda (Tail Recursion)</h3>
        <p>Uma forma especial de recursão onde a chamada recursiva é a última operação na função. Alguns compiladores podem otimizar a recursão de cauda para evitar o crescimento da pilha (tail-call optimization), prevenindo stack overflows.</p>
    `
};

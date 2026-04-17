import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "qa-t3-tdd-examples",
    title: "TDD: Exemplos Práticos",
    content: `
        <h2>TDD em Ação</h2>
        <p>Vamos ver como o ciclo Red-Green-Refactor se aplica a um problema simples: criar uma função <code>somar()</code>.</p>
        
        <h3>Passo 1: 🔴 Red</h3>
        <p>Primeiro, escrevemos um teste que descreve o que queremos. Esperamos que <code>somar(2, 3)</code> retorne <code>5</code>. Neste momento, a função <code>somar</code> nem existe ainda, então o teste falhará com um <code>ReferenceError</code>.</p>
        <pre><code class="language-javascript">test('deve somar dois números', () => {
  expect(somar(2, 3)).toBe(5);
});
</code></pre>

        <h3>Passo 2: 🟢 Green</h3>
        <p>Escrevemos o código mais simples possível para fazer o teste passar. Poderíamos até "trapacear" por um momento.</p>
        <pre><code class="language-javascript">function somar(a, b) {
  // Código mínimo para passar o teste específico
  if (a === 2 && b === 3) {
    return 5;
  }
}
</code></pre>
        <p>Isso parece bobo, mas nos força a pensar no próximo teste. Vamos adicionar outro teste:</p>
        <pre><code class="language-javascript">test('deve somar números diferentes', () => {
  expect(somar(5, 10)).toBe(15);
});
</code></pre>
        <p>Agora, nosso código "trapaceiro" falha. Para fazer ambos os testes passarem, somos forçados a escrever a implementação correta:</p>
        <pre><code class="language-javascript">function somar(a, b) {
  return a + b;
}
</code></pre>
        <p>Agora, todos os testes passam. A barra está verde.</p>

        <h3>Passo 3: 🔵 Refactor</h3>
        <p>Neste caso, a função <code>somar</code> já é muito simples e não há o que refatorar. A refatoração se torna mais importante em problemas mais complexos, onde o código escrito para "ficar verde" pode ser confuso ou duplicado.</p>
        <p>Com os testes garantindo o comportamento, podemos limpar o código com segurança. O processo então recomeça para a próxima funcionalidade.</p>
    `
};

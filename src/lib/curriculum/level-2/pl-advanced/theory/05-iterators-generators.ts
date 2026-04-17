import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "pla-t-iterators-generators",
    title: "Iteradores e Geradores",
    content: `
        <h2>Percorrendo Sequências de Forma Padronizada</h2>
        
        <h3>Padrão Iterator</h3>
        <p>O <strong>Padrão Iterator</strong> fornece uma maneira de acessar os elementos de um objeto de coleção sequencialmente, sem expor sua representação interna. Isso desacopla o algoritmo de travessia da estrutura de dados.</p>
        
        <h3>Iteráveis e Iteradores</h3>
        <p>Muitas linguagens (como Python e JavaScript) formalizam esse padrão. Um objeto é <strong>iterável</strong> se ele sabe como produzir um <strong>iterador</strong>. O iterador é o objeto que realmente faz a iteração, geralmente expondo um método <code>next()</code> que retorna o próximo item e um status indicando se a iteração terminou.</p>
        <p>O loop <code>for...of</code> em JavaScript funciona com qualquer objeto que siga o protocolo iterável.</p>

        <h3>Geradores (Generators)</h3>
        <p>Um <strong>Gerador</strong> é uma maneira mais fácil de criar iteradores. É uma função especial que pode pausar sua execução e depois retomá-la. A palavra-chave <code>yield</code> é usada para "retornar" um valor da função geradora e pausar a execução. Na próxima vez que o gerador for chamado, ele continuará de onde parou.</p>
        
        <pre><code class="language-javascript">// Função Geradora em JavaScript
function* contador(limite) {
  let i = 0;
  while (i < limite) {
    yield i;
    i++;
  }
}

const meuContador = contador(3);
console.log(meuContador.next().value); // 0
console.log(meuContador.next().value); // 1
</code></pre>
        
        <h3>Avaliação Preguiçosa (Lazy Evaluation)</h3>
        <p>Geradores permitem a avaliação preguiçosa, onde os valores são gerados sob demanda, e não todos de uma vez. Isso é extremamente eficiente em termos de memória para lidar com coleções grandes ou até mesmo sequências infinitas.</p>
    `
};

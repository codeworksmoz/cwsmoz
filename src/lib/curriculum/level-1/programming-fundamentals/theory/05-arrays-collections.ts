import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "pf-t5",
    title: "Arrays e Coleções",
    youtubeVideoId: "tVRbu1gJgo4",
    content: `
      <h2>Organizando Múltiplos Dados</h2>
      <p>Arrays (ou listas em linguagens como Python) são estruturas de dados que armazenam uma coleção de itens em uma única variável.</p>
      <pre><code>numeros = [10, 20, 30, 40, 50]</code></pre>
      <h3>Acessando Elementos</h3>
      <p>Os elementos são acessados por seu <strong>índice</strong>, que começa em 0.</p>
      <pre><code>primeiro_numero = numeros[0]  // Retorna 10
terceiro_numero = numeros[2]  // Retorna 30
</code></pre>
      <p>Existem outras estruturas de coleção importantes, como <strong>Dicionários/Mapas</strong> (que usam chaves em vez de índices) e <strong>Conjuntos</strong> (que armazenam itens únicos e não ordenados).</p>
    `
};

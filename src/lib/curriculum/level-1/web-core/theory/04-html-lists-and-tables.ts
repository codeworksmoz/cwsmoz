import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "web-t4",
    title: "Listas e Tabelas",
    youtubeVideoId: "bS7cCoesCVs",
    content: `
        <h2>Organizando em Listas</h2>
        <p>HTML oferece três tipos de listas:</p>
        <h3>Lista Não Ordenada (<code>&lt;ul&gt;</code>)</h3>
        <p>Para itens onde a ordem não importa.</p>
        <pre><code>&lt;ul&gt;
  &lt;li&gt;Café&lt;/li&gt;
  &lt;li&gt;Chá&lt;/li&gt;
&lt;/ul&gt;</code></pre>
        <h3>Lista Ordenada (<code>&lt;ol&gt;</code>)</h3>
        <p>Para itens onde a sequência é importante.</p>
        <pre><code>&lt;ol&gt;
  &lt;li&gt;Primeiro passo&lt;/li&gt;
  &lt;li&gt;Segundo passo&lt;/li&gt;
&lt;/ol&gt;</code></pre>
        
        <h2>Estruturando Dados em Tabelas</h2>
        <p>Tabelas são usadas para exibir dados tabulares.</p>
        <pre><code>&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Nome&lt;/th&gt;
      &lt;th&gt;Idade&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Maria&lt;/td&gt;
      &lt;td&gt;25&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
    `
};

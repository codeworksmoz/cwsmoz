import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "pf-t3",
    title: "Estruturas de Controle (Loops)",
    youtubeVideoId: "n0p_cQc_i-A",
    content: `
      <h2>Repetindo Tarefas</h2>
      <p>Loops são usados para executar o mesmo bloco de código várias vezes.</p>
      <h3>Loop 'for'</h3>
      <p>Usado para iterar sobre uma sequência (como uma lista).</p>
      <pre><code>frutas = ["maçã", "banana", "cereja"]
for fruta in frutas:
  print(fruta)
</code></pre>
      <h3>Loop 'while'</h3>
      <p>Executa um bloco de código enquanto uma condição for verdadeira.</p>
      <pre><code>contador = 0
while contador < 5:
  print(contador)
  contador = contador + 1  // Cuidado com loops infinitos!
</code></pre>
    `
};

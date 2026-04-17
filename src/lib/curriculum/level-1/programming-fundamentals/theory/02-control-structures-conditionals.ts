import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "pf-t2",
    title: "Estruturas de Controle (Condicionais)",
    youtubeVideoId: "s-i64-W0_sA",
    content: `
      <h2>Tomando Decisões no Código</h2>
      <p>Estruturas de controle permitem que seu programa tome decisões e execute diferentes blocos de código com base em certas condições. A mais comum é a instrução <code>if/else</code>.</p>
      <pre><code>idade = 18

if idade >= 18:
  print("Você é maior de idade.")
else:
  print("Você é menor de idade.")
</code></pre>
      <p>Você também pode encadear múltiplas condições com <code>elif</code> (em Python) ou <code>else if</code> (em outras linguagens).</p>
    `
};

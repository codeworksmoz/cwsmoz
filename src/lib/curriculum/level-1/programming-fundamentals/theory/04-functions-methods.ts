import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "pf-t4",
    title: "Funções e Métodos",
    youtubeVideoId: "o_wD-030D-Y",
    content: `
      <h2>Blocos de Código Reutilizáveis</h2>
      <p>Funções são blocos de código nomeados que realizam uma tarefa específica. Elas ajudam a organizar o código, evitar repetição e torná-lo mais legível.</p>
      <pre><code>def saudar(nome):
  return f"Olá, {nome}!"

mensagem = saudar("Carlos")  // Chama a função
print(mensagem)  // Saída: Olá, Carlos!
</code></pre>
      <p><strong>Métodos</strong> são funções que pertencem a um objeto (veremos mais sobre isso em Programação Orientada a Objetos).</p>
    `
};

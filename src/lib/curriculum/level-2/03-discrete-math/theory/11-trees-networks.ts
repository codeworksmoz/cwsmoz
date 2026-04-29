import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "math-t11",
  title: "Árvores e Conectividade Matemática",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🌳 Grafos Acíclicos Conexos</h2>
        <p class="text-lg leading-relaxed">
          Uma árvore é um grafo que não contém ciclos. Esta simplicidade estrutural garante que existe exatamente um único caminho entre quaisquer dois nós.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Propriedades Invariantes</h3>
        <ul class="list-disc ml-6 space-y-2 text-sm">
          <li>Uma árvore com <strong>n</strong> vértices tem exatamente <strong>n-1</strong> arestas.</li>
          <li>Toda a árvore com pelo menos 2 nós tem pelo menos duas folhas (nós de grau 1).</li>
          <li>Adicionar qualquer aresta extra a uma árvore cria obrigatoriamente um ciclo.</li>
        </ul>

        <h3 class="text-xl font-bold font-headline text-accent">Spanning Trees (Árvores Geradoras)</h3>
        <p class="text-sm">Um subgrafo que liga todos os nós da rede sem ciclos. No Nível 3, aprenderás a usar isto para evitar <i>Broadcast Storms</i> em redes de computadores através do protocolo Spanning Tree Protocol (STP).</p>
      </div>
    </div>
  `,
  quizId: "math-q11"
};

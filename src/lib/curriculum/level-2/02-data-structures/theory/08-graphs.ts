import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "ds-t8",
  title: "Graphs: Representação e Redes de Conexão",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🕸️ A Estrutura Universal</h2>
        <p class="text-lg leading-relaxed">
          Grafos representam relações entre objetos. São compostos por **Vértices (V)** e **Arestas (E)**. No nível Master, escolhemos a representação baseando-se na densidade das conexões.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Matriz de Adjacência vs Lista de Adjacência</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-1">Adjacency Matrix</h4>
            <p class="text-[10px] text-muted-foreground mb-2">Espaço: O(V²)</p>
            <p class="text-xs">Rápida para verificar se dois nós se ligam. Ideal para grafos densos (muitas arestas).</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-1">Adjacency List</h4>
            <p class="text-[10px] text-muted-foreground mb-2">Espaço: O(V + E)</p>
            <p class="text-xs">Eficiente em memória para grafos esparsos (redes sociais reais). Ocupa apenas o necessário para as arestas existentes.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline">2. Tipologia de Grafos</h3>
        <ul class="list-disc ml-6 space-y-2 text-sm">
          <li><strong>Directed (DAG):</strong> Conexões com sentido único (ex: dependências de módulos).</li>
          <li><strong>Weighted:</strong> Conexões com custos (ex: distância em km).</li>
          <li><strong>Cyclic vs Acyclic:</strong> Presença ou ausência de caminhos fechados.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "ds-mq8"
};

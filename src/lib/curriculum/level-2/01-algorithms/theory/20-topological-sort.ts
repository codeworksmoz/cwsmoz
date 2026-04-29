import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "alg-t20",
  title: "Ordenação Topológica: Gestão de Dependências",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🖇️ O que vem primeiro?</h2>
        <p class="text-lg leading-relaxed">
          A Ordenação Topológica organiza os nós de um Grafo Acíclico Dirigido (DAG) de forma a que, para cada aresta (u, v), o nó 'u' apareça sempre antes de 'v'.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">Aplicações de Engenharia</h3>
        <ul class="list-disc ml-6 space-y-2 text-sm">
          <li><strong>Compilação:</strong> Decidir a ordem de compilação de módulos que dependem uns dos outros.</li>
          <li><strong>Gestão de Pacotes:</strong> Instalar bibliotecas na ordem correta (NPM, Pip).</li>
          <li><strong>Task Scheduling:</strong> Agendar tarefas em pipelines de dados (ex: Airflow).</li>
        </ul>
        <p class="text-sm italic">O algoritmo de <strong>Kahn</strong> utiliza a contagem de "graus de entrada" (in-degree) para realizar esta ordenação em tempo linear.</p>
      </div>
    </div>
  `,
  quizId: "alg-q20"
};

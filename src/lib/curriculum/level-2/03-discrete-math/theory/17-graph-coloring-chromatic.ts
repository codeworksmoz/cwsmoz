import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "math-t17",
  title: "Coloração de Grafos e Gestão de Conflitos",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🎨 Otimizando Recursos</h2>
        <p class="text-lg leading-relaxed">
          Colorir um grafo é atribuir cores aos nós para que vizinhos nunca partilhem a mesma cor. No mundo da engenharia, "cor" representa um recurso limitado (canal de rádio, registrador de CPU, horário de exame).
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Número Cromático χ(G)</h3>
        <p class="text-sm">O menor número de cores necessárias para colorir um grafo. Determinar este número para um grafo geral é um problema <strong>NP-Hard</strong>.</p>

        <h3 class="text-xl font-bold font-headline text-accent">2. Alocação de Registradores</h3>
        <p class="text-sm">Um compilador constrói um <strong>Grafo de Interferência</strong>: se duas variáveis precisam de estar vivas ao mesmo tempo, elas ligam-se por uma aresta. O compilador tenta colorir esse grafo com o número de registradores físicos da CPU.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🏆 Teorema das 4 Cores</h3>
          <p class="text-sm leading-relaxed">Provado em 1976: qualquer mapa plano pode ser colorido com apenas 4 cores. Foi a primeira prova matemática de grande escala feita inteiramente por um computador.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "math-q17"
};

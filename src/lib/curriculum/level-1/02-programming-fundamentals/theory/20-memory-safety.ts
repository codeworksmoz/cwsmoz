import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t20",
  title: "Segurança de Memória: Quem limpa a casa?",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🧹 O Ciclo de Vida dos Objetos
        </h2>
        <p class="text-lg leading-relaxed">
          Um computador tem memória limitada. Se criarmos objetos e nunca os removermos, o sistema ficará sem RAM e irá crashar. Existem duas formas principais de gerir isto: Manualmente ou via <strong>Garbage Collection</strong>.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Gestão Automática (Garbage Collector)</h3>
        <p class="text-sm">Linguagens como JavaScript, Python e Java têm um "faxineiro" automático. Ele monitoriza quais os objetos que o teu código já não consegue aceder e liberta esse espaço na RAM.</p>
        
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-red-400">2. Fugas de Memória (Memory Leaks)</h3>
        <p class="text-sm">Mesmo com um Garbage Collector, podes causar fugas se mantiveres referências vivas a objetos que não usas. Exemplo: um array global que nunca para de crescer.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🧠 Referências e Contagem</h3>
          <p class="text-sm leading-relaxed mb-4">
            Muitos motores usam <strong>Reference Counting</strong>:
          </p>
          <ul class="space-y-2 text-xs font-mono">
            <li>1. Crias um objeto: <span class="text-accent">Contagem = 1</span></li>
            <li>2. Outra variável aponta para ele: <span class="text-accent">Contagem = 2</span></li>
            <li>3. As variáveis saem do escopo: <span class="text-accent">Contagem = 0</span></li>
            <li><span class="text-green-400">4. O motor apaga o objeto da RAM.</span></li>
          </ul>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Dica de Engenharia: Weak References
          </h4>
          <p class="text-sm leading-relaxed">
            Em sistemas de cache avançados, usamos <strong>WeakRefs</strong>. Elas permitem apontar para um objeto sem impedir que o faxineiro o apague se a memória estiver a acabar. É a diferença entre um sistema fluido e um que bloqueia em dispositivos com pouca RAM.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "pf-t20-quiz"
};

import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "os-t5",
  title: "Deadlocks: O Impasse Mortal da Computação",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/5 p-6 rounded-2xl border border-red-500/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400 flex items-center gap-2">
          🚫 Bloqueio Mútuo
        </h2>
        <p class="text-lg leading-relaxed">
          Um Deadlock ocorre quando um conjunto de processos está num estado de espera infinita porque cada um segura um recurso que o outro precisa. O sistema "congela".
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">As 4 Condições de Coffman</h3>
        <p class="text-sm">Para que ocorra um deadlock, estas 4 condições devem ser verdadeiras simultaneamente:</p>
        <ul class="list-decimal ml-6 space-y-2 text-xs">
          <li><strong>Exclusão Mútua:</strong> Pelo menos um recurso não é partilhável.</li>
          <li><strong>Hold and Wait:</strong> Um processo segura um recurso e espera por outro.</li>
          <li><strong>Sem Preempção:</strong> O kernel não pode tirar o recurso à força.</li>
          <li><strong>Espera Circular:</strong> Existe uma cadeia A -> B -> C -> A de pedidos.</li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🏦 O Algoritmo do Banqueiro</h3>
          <p class="text-sm leading-relaxed">
            Estratégia de <strong>Evitação (Avoidance)</strong>. Antes de conceder um recurso, o sistema operativo simula a alocação e verifica se o sistema continuará num "Estado Seguro" onde todos os processos conseguirão terminar no futuro.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "os-q5"
};
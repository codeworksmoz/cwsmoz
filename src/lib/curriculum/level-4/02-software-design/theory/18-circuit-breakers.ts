
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "des-t18",
  title: "Circuit Breakers e Resiliência de Falhas",
  quizId: "des-q18-master",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/5 p-6 rounded-2xl border border-red-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400">🔌 Evitando Efeitos Dominó</h2>
        <p class="text-lg">Se um serviço de base de dados fica lento, as threads de todos os serviços que dependem dele podem travar à espera. O <strong>Circuit Breaker</strong> "abre o disjuntor" para falhar rápido e proteger o resto do sistema.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Estados do Disjuntor</h3>
        <div class="grid md:grid-cols-3 gap-4 text-center text-xs">
          <div class="p-3 bg-green-500/10 border border-green-500/30 rounded-xl">Closed<br/><span class="opacity-70">Tudo OK</span></div>
          <div class="p-3 bg-red-500/10 border border-red-500/30 rounded-xl">Open<br/><span class="opacity-70">Falhando rápido</span></div>
          <div class="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">Half-Open<br/><span class="opacity-70">Testando recuperação</span></div>
        </div>
      </div>
    </div>
  `
};

import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "os-t4",
  title: "Sincronização: Mutex, Semáforos e Monitores",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🔒 A Secção Crítica</h2>
        <p class="text-lg">Quando múltiplas threads acedem a recursos partilhados, precisamos de mecanismos de coordenação para evitar o caos. A Secção Crítica é a parte do código que mexe em dados sensíveis.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Mutex (Mutual Exclusion)</h3>
        <p class="text-sm">Um trinco binário. Se uma thread tem o Mutex, nenhuma outra entra. É o dono exclusivo do recurso.</p>
        
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Semáforos</h3>
        <p class="text-sm">Um contador que permite N threads acederem a um recurso. Ex: Uma base de dados que só aceita 10 conexões simultâneas.</p>
        
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-accent">3. Monitores</h3>
        <p class="text-sm">Uma abstração de alto nível (usada em Java) que agrupa os dados partilhados e os métodos de sincronização num único objeto seguro, gerindo as filas de espera automaticamente.</p>

        <div class="bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-yellow-500 mb-2 italic">Peterson's Algorithm:</h4>
          <p class="text-xs leading-relaxed">Uma solução clássica de software para o problema da secção crítica entre dois processos, utilizando alternância e intenção para garantir progresso e exclusão mútua.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "os-q4"
};
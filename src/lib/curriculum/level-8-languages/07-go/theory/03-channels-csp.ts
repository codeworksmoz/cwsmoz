import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "go-m3",
  title: "Canais (Channels) e o Modelo CSP de Comunicação",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          📦 "Do not communicate by sharing memory..."
        </h2>
        <p class="text-lg leading-relaxed">
          O lema do Go é: <i>"Não comunique partilhando memória; partilhe memória comunicando."</i> Os <strong>Canais</strong> são os túneis que implementam o modelo CSP (Communicating Sequential Processes), garantindo sincronização segura entre goroutines sem Mutexes complexos.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2 text-accent">1. Buffered vs Unbuffered Channels</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-primary mb-1">Unbuffered (make(chan T))</h4>
            <p class="text-xs">Síncronos. O emissor bloqueia até que o recetor esteja pronto. Garante sincronia perfeita.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-primary mb-1">Buffered (make(chan T, n))</h4>
            <p class="text-xs">Assíncronos até o buffer encher. Permite enviar 'n' mensagens sem esperar pelo recetor.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline">2. Fecho de Canais e Range</h3>
        <p class="text-sm">Fechar um canal (<code>close(ch)</code>) sinaliza que não haverá mais dados. Tentar enviar para um canal fechado causa um <strong>Panic</strong>. O recetor pode usar um loop <code>for range</code> para consumir até o fecho.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">💎 Direcionalidade de Canais</h4>
          <p class="text-sm leading-relaxed">Podes restringir uma função para apenas ler ou apenas escrever num canal (ex: <code>ch <-chan int</code>). Isto aumenta a segurança do código, impedindo erros lógicos de quem consome a sua API.</p>
        </div>
      </div>
    </div>
  `,
};

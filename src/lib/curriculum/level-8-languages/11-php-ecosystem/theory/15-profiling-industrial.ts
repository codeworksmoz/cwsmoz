import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-eco-t15",
  title: "Fase 3: Profiling Industrial: Xdebug, Blackfire e Tideways",
  enableInteractive: true,
  youtubeVideoId: "raf_id_profiling",
  quizId: "php-eco-mq15",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🔬 Anatomia da Performance de Runtime
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <strong>Profiling</strong> é a prática de medir o consumo de recursos (CPU, RAM, I/O) durante a execução do código. No nível Master, não adivinhamos o gargalo; utilizamos ferramentas de instrumentação e amostragem para identificar exatamente qual função está a travar o servidor.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Xdebug: O Cirurgião de Desenvolvimento</h3>
        <p class="text-sm leading-relaxed">
          O <button>Xdebug</button> é um profiler de instrumentação. Ele gera ficheiros <code>.cachegrind</code> que mostram o rasto completo de chamadas. Embora lento para produção, é imbatível para encontrar falhas lógicas e memory leaks em desenvolvimento.
        </p>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Blackfire e Tideways: Monitorização de Produção</h3>
        <p class="text-sm leading-relaxed">Diferente do Xdebug, o <button>Blackfire</button> e o <button>Tideways</button> utilizam técnicas de amostragem (Sampling) e instrumentação inteligente para gerar overhead mínimo, permitindo auditar o tráfego real sem derrubar o servidor.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">Wall Time vs. CPU Time</h4>
             <p class="text-[10px] opacity-70 leading-relaxed">
               <strong>Wall Time:</strong> O tempo total que o utilizador espera.<br>
               <strong>CPU Time:</strong> O tempo que o processador passou realmente a calcular.<br>
               Se a diferença for grande, o teu gargalo é <strong>I/O</strong> (espera por base de dados ou rede).
             </p>
          </div>
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">Flame Graphs</h4>
             <p class="text-[10px] leading-relaxed">
               Visualização térmica da stack de chamadas. As "chamas" mais largas representam as funções que consomem mais tempo acumulado. O objetivo do Engenheiro Master é "achatar" o gráfico.
             </p>
          </div>
        </div>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Engenheiro Master</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Nunca otimize por intuição. O código que parece lento pode estar a ser otimizado pelo <button>JIT</button>, enquanto uma função simples que se repete 100.000 vezes pode ser o verdadeiro assassino do seu servidor."
        </p>
      </section>
    </div>
  `,
};

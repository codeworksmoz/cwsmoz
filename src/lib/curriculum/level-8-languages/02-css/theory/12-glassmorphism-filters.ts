import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m12",
  title: "Fase 3: Glassmorphism & Backdrop Filters",
  enableInteractive: true,
  youtubeVideoId: "8ME9u065vD4",
  quizId: "css-mq12",
  content: `<div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          💎 O Efeito Vidro Fosco e Profundidade
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <strong>Glassmorphism</strong> é um padrão de design que utiliza transparência, desfoque e bordas brilhantes para simular camadas de vidro sobrepostas. A chave técnica para este efeito é o <code>backdrop-filter</code>.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. A Diferença entre Filter e Backdrop-Filter</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">filter: blur(10px)</h4>
             <p class="text-xs opacity-70 leading-relaxed">Desfoca o elemento e todo o seu conteúdo.</p>
          </div>
          <div class="p-5 bg-card border rounded-2xl border-green-500/20 shadow-xl">
             <h4 class="font-bold text-green-400 text-xs mb-3 uppercase tracking-widest">backdrop-filter: blur(10px)</h4>
             <p class="text-xs opacity-70 leading-relaxed">Desfoca apenas o que está por trás do elemento.</p>
          </div>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Anatomia de um Card Glass Master</h3>
        <pre><code class="language-css">
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
}
        </code></pre>
      </section>
    </div>`
};
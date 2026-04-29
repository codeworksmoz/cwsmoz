import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-eco-t20",
  title: "Fase 4: PHP 8.4+: Novidades e Otimizações de Linguagem",
  enableInteractive: true,
  youtubeVideoId: "raf_id_php84_new",
  quizId: "php-eco-mq20",
  content: `
    <div class="space-y-12">
      <div class="bg-green-500/5 p-8 rounded-[2.5rem] border border-green-500/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-green-400">🆕 PHP 8.4: A Nova Fronteira</h2>
        <p class="text-lg leading-relaxed opacity-90">
          O PHP 8.4 traz otimizações massivas no motor JIT e novas funcionalidades de sintaxe que aproximam o PHP das linguagens de sistemas modernas, focando em **Tipagem Estática** e **Eficiência de Escrita**.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-green-500/20 pb-2 text-accent">1. Property Hooks (Aprofundamento)</h3>
        <p class="text-sm">Vimos anteriormente os hooks de <code>get</code> e <code>set</code>. No nível Master, entendemos que eles permitem a criação de <strong>Virtual Properties</strong> que não ocupam memória física, sendo calculadas apenas quando solicitadas.</p>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-green-500/20 pb-2 text-accent">2. New without parentheses</h3>
        <p class="text-sm">Podes instanciar e chamar um método na mesma linha sem envolver o <code>new</code> em parênteses. Menos ruído visual para o Engenheiro de Elite.</p>
        <pre><code class="language-php">$request = new Request()->withHeader('X-Master', 'true');</code></pre>
      </section>
    </div>
  `,
};

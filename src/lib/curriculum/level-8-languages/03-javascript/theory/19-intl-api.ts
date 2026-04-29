import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m19",
  title: "Fase 4: Intl API: Internacionalização e Localização Master",
  enableInteractive: true,
  youtubeVideoId: "v4cd1O4zkGw",
  quizId: "js-mq19",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🌍 Software para o Mundo
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Esqueça bibliotecas pesadas de tradução como Moment.js ou numeral.js. A <strong>Intl API</strong> é o motor nativo do browser para formatar datas, números, moedas e listas respeitando as normas culturais e gramaticais de cada país com performance de silício puro.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Formatação de Moeda e Números</h3>
        <p class="text-sm leading-relaxed">
          Garante que o seu sistema financeiro mostre o valor correto em Meticais (MZN) ou Dólares (USD) sem erros de símbolo ou separadores decimais.
        </p>
        <pre><code class="language-javascript">
const formatter = new Intl.NumberFormat('pt-MZ', {
  style: 'currency',
  currency: 'MZN'
});

console.log(formatter.format(1500.50)); // "1.500,50 MT"
        </code></pre>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Datas Relativas (RelativeTimeFormat)</h3>
        <p class="text-sm leading-relaxed">Como o Facebook mostra "há 5 minutos"? Nativamente, de forma leve e sem loops.</p>
        <pre><code class="language-javascript">
const rtf = new Intl.RelativeTimeFormat('pt', { numeric: 'auto' });

console.log(rtf.format(-1, 'day')); // "ontem"
console.log(rtf.format(5, 'minute')); // "daqui a 5 minutos"
        </code></pre>
      </section>

      <section class="bg-yellow-500/5 p-8 rounded-[2rem] border-2 border-dashed border-yellow-500/20 text-center">
        <h4 class="text-xl font-bold text-yellow-500 mb-4">🚀 Vantagem de Performance</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Ao usar as APIs nativas do objeto <code>Intl</code>, você reduz o tamanho do seu bundle em até 100KB, eliminando dependências externas. Menos código para descarregar significa um site mais rápido para os utilizadores móveis em Moçambique."
        </p>
      </section>
    </div>
  `
};

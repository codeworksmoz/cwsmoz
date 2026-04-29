
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m20",
  title: "Intl API: Internacionalização de Elite",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🌍 Software para o Mundo</h2>
        <p class="text-lg leading-relaxed">Esquece as bibliotecas pesadas de tradução. O browser possui a API <strong>Intl</strong> nativa para formatar datas, números, moedas e listas de acordo com a cultura do utilizador.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">Formatação de Moeda (MZN)</h3>
        <div class="bg-black/40 p-4 rounded-xl font-code text-sm text-accent">
          <p>new <span class="text-primary">Intl.NumberFormat</span>('pt-MZ', {</p>
          <p>&nbsp;&nbsp;style: 'currency', currency: 'MZN'</p>
          <p>}).format(1500); // 1.500,00 MT</p>
        </div>

        <h3 class="text-xl font-bold font-headline">Datas Relativas</h3>
        <p>Como o Facebook mostra "há 5 minutos"? Nativamente!</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs">
          <p>const rtf = new <span class="text-primary">Intl.RelativeTimeFormat</span>('pt');</p>
          <p>rtf.format(-5, 'minute'); // "há 5 minutos"</p>
        </div>

        <h3 class="text-xl font-bold font-headline text-primary">Listas Inteligentes</h3>
        <p>Junta palavras com a conjunção correta automaticamente.</p>
        <div class="bg-black/40 p-3 rounded font-code text-xs">
          new Intl.ListFormat('pt').format(['HTML', 'CSS', 'JS']); // "HTML, CSS e JS"
        </div>
      </div>
    </div>
  `,
  quizId: "js-mq20"
};

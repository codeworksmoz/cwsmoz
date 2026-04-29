import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t18",
  title: "Programação Funcional: O Poder da Transformação",
  youtubeVideoId: "mNst8vX-u8E",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">λ Pense em Fluxos, não em Loops</h2>
        <p class="text-lg leading-relaxed">
          A Programação Funcional (FP) é um paradigma que trata a computação como a avaliação de funções matemáticas. Em vez de dizer ao computador "como" iterar, você diz "o que" quer fazer com os dados.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Os Três Reis do Processamento</h3>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="p-4 bg-card border rounded-xl border-blue-500/20 shadow-lg">
            <h4 class="font-bold text-blue-400 mb-2">Filter</h4>
            <p class="text-[10px] text-muted-foreground">Remove o que não serve. Cria uma nova lista apenas com os itens que passam no teste.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-green-500/20 shadow-lg">
            <h4 class="font-bold text-green-400 mb-2">Map</h4>
            <p class="text-[10px] text-muted-foreground">Transforma cada item. Aplica uma função a todos os elementos da lista.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-yellow-500/20 shadow-lg">
            <h4 class="font-bold text-yellow-400 mb-2">Reduce</h4>
            <p class="text-[10px] text-muted-foreground">Consolida a lista. Transforma todos os itens num único valor final (ex: uma soma).</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline">2. Imutabilidade e Funções Puras</h3>
        <p class="text-sm">Na FP de elite, nós não alteramos a lista original. Nós criamos <strong>novas versões</strong> dos dados. Isto elimina bugs de "estado mutável" que são o pesadelo de sistemas complexos.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">💎 Exemplo Master: Encadeamento</h3>
          <p class="text-xs mb-4">Imagine processar faturas: Filtrar as pagas, adicionar imposto a cada uma e somar o total.</p>
          <div class="bg-black/40 p-4 rounded-xl font-code text-[11px] text-accent">
            const total = faturas<br/>
            &nbsp;&nbsp;.<span class="text-primary">filter</span>(f => f.paga)<br/>
            &nbsp;&nbsp;.<span class="text-primary">map</span>(f => f.valor * 1.15)<br/>
            &nbsp;&nbsp;.<span class="text-primary">reduce</span>((acc, v) => acc + v, 0);
          </div>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2">🚀 Vantagem Competitiva</h4>
          <p class="text-sm leading-relaxed">
            Código funcional é mais fácil de testar, mais fácil de ler e muito mais difícil de quebrar. Numa entrevista técnica de elite, demonstrar domínio de <code>map/filter/reduce</code> coloca-te imediatamente à frente de quem usa apenas loops <code>for</code> básicos.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "pf-t18-quiz"
};
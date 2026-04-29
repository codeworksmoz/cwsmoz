import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "alg-t14",
  title: "Fluxo em Redes: Max-Flow Min-Cut",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🌊 Otimização de Capacidade</h2>
        <p class="text-lg leading-relaxed">
          Como enviar o máximo de água (ou dados) por uma rede de canos com capacidades diferentes? O Teorema de <strong>Max-Flow Min-Cut</strong> prova que o fluxo máximo é limitado pelo "gargalo" mais estreito da rede.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Algoritmo de Ford-Fulkerson</h3>
        <p class="text-sm">Encontra "caminhos aumentantes" e envia fluxo através deles até que não haja mais capacidade. É a base para roteamento de tráfego e logística industrial.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">Aplicação Real:</h4>
          <p class="text-xs">Sistemas de entrega como Uber ou Glovo usam fluxos em redes para emparelhar estafetas e pedidos minimizando a latência global do sistema.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "alg-q14"
};

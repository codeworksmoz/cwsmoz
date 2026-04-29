import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t1",
  title: "Variáveis e Tipos: A Gestão de Memória na Prática",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 font-headline">
          📦 O que é uma Variável?
        </h2>
        <p class="text-lg leading-relaxed">
          Uma variável é uma etiqueta amigável para um endereço físico na memória RAM. Como engenheiro, você não decora o endereço <code>0x7FFF5FBFFD08</code>, você usa o nome <code>userBalance</code>.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Tipos de Dados Universais</h3>
        <p>Independentemente da linguagem, os dados são classificados para que o computador saiba quantos bits reservar:</p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
          <li class="bg-card p-4 rounded-xl border border-white/5">
            <strong class="text-primary block mb-1">String (Texto):</strong> Cadeias de caracteres (UTF-8). <br/><span class="text-[10px] opacity-60">Ex: "Maputo"</span>
          </li>
          <li class="bg-card p-4 rounded-xl border border-white/5">
            <strong class="text-green-500 block mb-1">Integers e Floats:</strong> Números sem e com casas decimais. <br/><span class="text-[10px] opacity-60">Ex: 258, 10.5</span>
          </li>
          <li class="bg-card p-4 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Boolean:</strong> O pilar binário: True ou False.
          </li>
          <li class="bg-card p-4 rounded-xl border border-white/5">
            <strong class="text-yellow-500 block mb-1">Null / Nil / None:</strong> Representa a ausência intencional de um valor.
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Dinâmica vs Estática</h3>
        <p class="text-sm">Esta é a maior divisão no mundo da engenharia:</p>
        <div class="flex flex-col md:flex-row gap-6">
          <div class="flex-1 p-4 bg-muted/20 rounded-xl">
            <h4 class="font-bold text-accent">Linguagens Dinâmicas</h4>
            <p class="text-xs text-muted-foreground">Python e JavaScript. O tipo é inferido em runtime. <br/><code>x = 10; x = "ola";</code> (Válido)</p>
          </div>
          <div class="flex-1 p-4 bg-muted/20 rounded-xl">
            <h4 class="font-bold text-primary">Linguagens Estáticas</h4>
            <p class="text-xs text-muted-foreground">Java e C++. O tipo é verificado na compilação. <br/><code>int x = 10; x = "ola";</code> (ERRO!)</p>
          </div>
        </div>

        <div class="bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-yellow-500 mb-2 flex items-center gap-2">
            💎 Dica de Elite: Const vs Let
          </h4>
          <p class="text-sm leading-relaxed">
            Em engenharia profissional, 80% das suas variáveis deveriam ser constantes (<code>const</code> em JS, <code>final</code> em Java). Se o valor não precisa de mudar, bloqueie-o para evitar bugs colaterais.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "pf-t1-quiz"
};

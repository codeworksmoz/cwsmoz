import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t1",
  title: "Sistemas Numéricos: O Mundo Binário",
  youtubeVideoId: "rXc_A7G43m0",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M2 12h2"/><path d="M6 8h2"/><path d="M10 16h2"/><path d="M14 4h2"/><path d="M18 20h2"/><path d="M20 12h2"/></svg>
          O que é o Binário?
        </h2>
        <p class="text-lg leading-relaxed">
          Os computadores não entendem letras ou números como nós. Eles funcionam com eletricidade. 
          Um circuito pode estar <strong>ligado</strong> ou <strong>desligado</strong>.
        </p>
        <ul class="list-disc ml-6 mt-4 space-y-2 text-muted-foreground">
          <li><strong>1</strong> = Ligado (Passa corrente)</li>
          <li><strong>0</strong> = Desligado (Não passa corrente)</li>
        </ul>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3 class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9"/><polygon points="10 5 22 2 19 14 12 12"/></svg>
          Como contamos em Binário?
        </h3>
        <p>
          No nosso dia-a-dia, usamos o sistema <strong>Decimal</strong> (base 10).
          No sistema <strong>Binário</strong> (base 2), usamos apenas 0 e 1. Cada posição vale o dobro da anterior.
        </p>
        
        <div class="bg-gray-900 p-6 rounded-xl border border-primary/20 my-4">
          <h4 class="text-primary font-bold mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            Valores Posicionais (8 bits):
          </h4>
          <div class="grid grid-cols-8 gap-2 text-center font-code text-sm">
            <div class="bg-gray-800 p-2 rounded">128</div>
            <div class="bg-gray-800 p-2 rounded">64</div>
            <div class="bg-gray-800 p-2 rounded">32</div>
            <div class="bg-gray-800 p-2 rounded">16</div>
            <div class="bg-gray-800 p-2 rounded">8</div>
            <div class="bg-gray-800 p-2 rounded">4</div>
            <div class="bg-gray-800 p-2 rounded">2</div>
            <div class="bg-gray-800 p-2 rounded">1</div>
          </div>
          <div class="grid grid-cols-8 gap-2 text-center font-code text-sm mt-2">
            <div class="text-gray-500 text-xs">2⁷</div>
            <div class="text-gray-500 text-xs">2⁶</div>
            <div class="text-gray-500 text-xs">2⁵</div>
            <div class="text-gray-500 text-xs">2⁴</div>
            <div class="text-gray-500 text-xs">2³</div>
            <div class="text-gray-500 text-xs">2²</div>
            <div class="text-gray-500 text-xs">2¹</div>
            <div class="text-gray-500 text-xs">2⁰</div>
          </div>
        </div>

        <div class="bg-card p-4 rounded-xl border font-code text-center text-primary shadow-inner my-4">
          <strong>Exemplo:</strong> Decimal 5 = Binário 0101
          <br/>
          <span class="text-sm text-gray-400">(0×8) + (1×4) + (0×2) + (1×1) = 0 + 4 + 0 + 1 = 5</span>
        </div>

        <h3 class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 8 4 4-4 4"/><path d="M20 12H8"/><path d="M4 12h2"/></svg>
          Como converter Decimal para Binário?
        </h3>
        <p>Use o método das <strong>divisões sucessivas por 2</strong>:</p>
        
        <div class="bg-gray-900 p-6 rounded-xl border border-primary/20 my-4">
          <h4 class="text-primary font-bold mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            Exemplo: Converter 25 para binário
          </h4>
          <div class="font-code text-sm space-y-2">
            <div class="flex justify-between border-b border-gray-700 pb-2">
              <span>25 ÷ 2 = 12</span>
              <span class="text-yellow-400">resto 1 ⬅️</span>
            </div>
            <div class="flex justify-between border-b border-gray-700 pb-2">
              <span>12 ÷ 2 = 6</span>
              <span class="text-yellow-400">resto 0 ⬅️</span>
            </div>
            <div class="flex justify-between border-b border-gray-700 pb-2">
              <span>6 ÷ 2 = 3</span>
              <span class="text-yellow-400">resto 0 ⬅️</span>
            </div>
            <div class="flex justify-between border-b border-gray-700 pb-2">
              <span>3 ÷ 2 = 1</span>
              <span class="text-yellow-400">resto 1 ⬅️</span>
            </div>
            <div class="flex justify-between">
              <span>1 ÷ 2 = 0</span>
              <span class="text-yellow-400">resto 1 ⬅️</span>
            </div>
          </div>
          <p class="mt-4 text-center text-lg">
            <strong class="text-primary">Resultado:</strong> 
            <span class="bg-primary/20 px-3 py-1 rounded">11001</span>
            <span class="text-sm text-gray-400">(lendo de baixo para cima)</span>
          </p>
        </div>

        <div class="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20 my-4">
          <h4 class="flex items-center gap-2 text-blue-400 font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            Dica Rápida: Soma de Potências
          </h4>
          <p class="text-sm mt-2">Para números pequenos, some as potências de 2:</p>
          <ul class="list-disc ml-6 mt-2 text-sm space-y-1">
            <li>13 = 8 + 4 + 1 = <strong class="text-primary">1101</strong></li>
            <li>7 = 4 + 2 + 1 = <strong class="text-primary">0111</strong></li>
          </ul>
        </div>

        <h3 class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
          Bits e Bytes
        </h3>
        <div class="grid grid-cols-2 gap-4 my-4">
          <div class="bg-gray-900 p-4 rounded-xl border border-primary/20">
            <div class="flex items-center gap-2 text-primary font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/></svg>
              Bit
            </div>
            <p class="text-sm">0 ou 1 (menor unidade)</p>
          </div>
          <div class="bg-gray-900 p-4 rounded-xl border border-primary/20">
            <div class="flex items-center gap-2 text-primary font-bold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              Byte
            </div>
            <p class="text-sm">8 bits = 256 valores (0-255)</p>
          </div>
        </div>

        <h3 class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
          Sistema Hexadecimal (Base 16)
        </h3>
        <p class="mb-2">Muito usado em cores, memória e programação por ser mais compacto:</p>
        <div class="bg-gray-900 p-4 rounded-xl border border-primary/20 my-4">
          <div class="grid grid-cols-4 gap-2 text-center text-sm font-code">
            <div><span class="text-gray-500">Decimal</span><br/>0-9</div>
            <div><span class="text-gray-500">10</span><br/>A</div>
            <div><span class="text-gray-500">11</span><br/>B</div>
            <div><span class="text-gray-500">12</span><br/>C</div>
            <div><span class="text-gray-500">13</span><br/>D</div>
            <div><span class="text-gray-500">14</span><br/>E</div>
            <div><span class="text-gray-500">15</span><br/>F</div>
          </div>
        </div>
        
        <div class="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20 my-4">
          <h4 class="flex items-center gap-2 text-purple-400 font-bold mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            Exemplo: Cor RGB
          </h4>
          <p class="font-code text-center">
            <span class="bg-black px-3 py-1 rounded">#FF5733</span> em hexadecimal
          </p>
          <p class="text-sm text-center mt-2">
            FF = 255 (Vermelho) | 57 = 87 (Verde) | 33 = 51 (Azul)
          </p>
        </div>

        <div class="bg-primary/10 p-6 rounded-xl border-primary/20 my-6">
          <h3 class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            Por que usar diferentes bases?
          </h3>
          <ul class="space-y-3 mt-3">
            <li class="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <span><strong>Binário:</strong> O computador entende diretamente</span>
            </li>
            <li class="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <span><strong>Decimal:</strong> Nós humanos entendemos melhor</span>
            </li>
            <li class="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <span><strong>Hexadecimal:</strong> Compacto para representar bytes (FF = 11111111)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t1-quiz"
};
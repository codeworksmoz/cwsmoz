import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "web-t3",
  title: "CSS Box Model: A Física Espacial da Web",
  youtubeVideoId: "95v88Oit0H8",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📦 Tudo é uma Caixa</h2>
        <p class="text-lg leading-relaxed">
          Para o motor de renderização do browser, cada parágrafo, botão ou imagem é um retângulo. Entender as camadas deste retângulo é a diferença entre um layout quebrado e um design de elite.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. As 4 Camadas do Box Model</h3>
        <div class="bg-black/40 p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden shadow-2xl">
           <div class="border-2 border-dashed border-yellow-500/40 p-8 rounded-[2rem] relative">
              <span class="absolute top-1 left-4 text-[10px] font-black text-yellow-500 uppercase">Margin</span>
              <div class="border-2 border-blue-500 p-8 rounded-[1.5rem] relative bg-blue-500/5">
                 <span class="absolute top-1 left-4 text-[10px] font-black text-blue-500 uppercase">Border</span>
                 <div class="border-2 border-dashed border-green-500/40 p-8 rounded-xl relative">
                    <span class="absolute top-1 left-4 text-[10px] font-black text-green-500 uppercase">Padding</span>
                    <div class="bg-primary/20 p-4 rounded-md text-center font-bold text-xs">CONTENT (Dados/Texto)</div>
                 </div>
              </div>
           </div>
        </div>

        <ul class="space-y-4 mt-8">
          <li class="flex gap-4">
            <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">1</div>
            <div>
              <p class="font-bold text-sm uppercase">Content:</p>
              <p class="text-xs text-muted-foreground">Onde vive o texto ou a imagem real. Definido por <code>width</code> e <code>height</code>.</p>
            </div>
          </li>
          <li class="flex gap-4">
            <div class="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">2</div>
            <div>
              <p class="font-bold text-sm uppercase">Padding:</p>
              <p class="text-xs text-muted-foreground">O espaço de "respiração" entre o conteúdo e a borda. Fica DENTRO da caixa.</p>
            </div>
          </li>
          <li class="flex gap-4">
            <div class="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">3</div>
            <div>
              <p class="font-bold text-sm uppercase">Border:</p>
              <p class="text-xs text-muted-foreground">A linha que envolve o padding e o conteúdo. Tem cor, estilo e espessura.</p>
            </div>
          </li>
          <li class="flex gap-4">
            <div class="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-500 shrink-0">4</div>
            <div>
              <p class="font-bold text-sm uppercase">Margin:</p>
              <p class="text-xs text-muted-foreground">O espaço FORA da borda. Serve para afastar um elemento de outro elemento vizinho.</p>
            </div>
          </li>
        </ul>

        <div class="bg-red-500/5 p-6 rounded-2xl border border-red-500/20 mt-6 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-red-400 mb-4">⚠️ O Grande Erro: box-sizing</h3>
          <p class="text-sm leading-relaxed">
            Por padrão, o browser soma o padding e a borda à largura que definiste. Se queres 300px e dás 20px de padding, a caixa terá 340px! 
            <br/><br/>
            <strong>A Solução de Elite:</strong> Use <code>box-sizing: border-box;</code>. Isto faz com que o padding e a borda fiquem "contidos" dentro da largura definida.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "web-t3-quiz"
};
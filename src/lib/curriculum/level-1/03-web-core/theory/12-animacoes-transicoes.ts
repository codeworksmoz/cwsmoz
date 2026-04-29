import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "web-t12",
  title: "Animações e Transições CSS: Fluidez e Performance",
  youtubeVideoId: "Z5JC9Ve1sfI",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          ✨ Dando Vida ao Design
        </h2>
        <p class="text-lg leading-relaxed">
          Animações não são apenas "enfeites". Elas fornecem feedback visual crucial ao utilizador e guiam a atenção na interface. Um Engenheiro de Elite sabe distinguir entre <strong>Transições</strong> e <strong>Animações</strong> e escolhe a ferramenta certa para cada caso.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Transições (Transitions)</h3>
        <p>Usadas para suavizar a mudança entre dois estados (ex: de repouso para hover). O browser calcula automaticamente todos os frames intermédios.</p>
        <div class="bg-black/40 p-5 rounded-xl border font-code text-xs text-accent space-y-2">
          <p>.btn {</p>
          <p>&nbsp;&nbsp;<span class="text-primary">transition</span>: background-color 0.3s ease-in-out;</p>
          <p>}</p>
          <p>.btn:hover { background-color: #3b82f6; }</p>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Animações e @keyframes</h3>
        <p>Para movimentos complexos que não dependem apenas de uma interação do utilizador, usamos animações com linhas do tempo personalizadas.</p>
        <div class="bg-black/40 p-5 rounded-xl border font-code text-xs text-green-400 space-y-1">
          <p><span class="text-primary">@keyframes</span> flutuar {</p>
          <p>&nbsp;&nbsp;0% { transform: translateY(0); }</p>
          <p>&nbsp;&nbsp;50% { transform: translateY(-10px); }</p>
          <p>&nbsp;&nbsp;100% { transform: translateY(0); }</p>
          <p>}</p>
        </div>

        <h3 class="text-xl font-bold font-headline">3. As Regras da Performance (60 FPS)</h3>
        <p class="text-sm">Um erro de amador é animar propriedades que obrigam o browser a recalcular o layout (como <code>width</code> ou <code>top</code>). O Engenheiro Master anima apenas propriedades "baratas" processadas pela GPU:</p>
        <ul class="grid md:grid-cols-2 gap-4">
          <li class="p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-xs">
            <strong>Transform:</strong> translate, scale, rotate (GPU-friendly).
          </li>
          <li class="p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-xs">
            <strong>Opacity:</strong> Transparência suave sem afetar o layout.
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🚀 Fill-mode e Iteration</h3>
          <p class="text-sm mb-4">Para que a animação não "salte" de volta ao início quando terminar, usamos:</p>
          <ul class="list-disc ml-6 space-y-2 text-xs">
            <li><strong>animation-fill-mode: forwards;</strong> — O elemento mantém o estilo do último frame.</li>
            <li><strong>animation-iteration-count: infinite;</strong> — Para loops contínuos (ex: spinners).</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  quizId: "web-t12-quiz"
};

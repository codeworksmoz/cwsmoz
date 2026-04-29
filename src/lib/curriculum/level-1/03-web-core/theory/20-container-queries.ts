import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "web-t20",
  title: "Container Queries: A Nova Era do Layout Modular",
  youtubeVideoId: "u044iM9xsTM",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          📦 Componentes Autossuficientes
        </h2>
        <p class="text-lg leading-relaxed">
          Até hoje, a responsividade dependia do tamanho do ecrã (Media Queries). As <strong>Container Queries</strong> permitem que um componente mude o seu estilo baseado no espaço disponível dentro do seu elemento pai, permitindo layouts verdadeiramente modulares.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Definindo um Container</h3>
        <p>Primeiro, dizemos ao browser para vigiar o tamanho de um elemento pai.</p>
        <div class="bg-black/40 p-4 rounded-xl border font-code text-xs text-accent">
          .parent-card { <br/>
          &nbsp;&nbsp;<span class="text-primary">container-type</span>: inline-size; <br/>
          }
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Aplicando a Regra @container</h3>
        <p>O filho agora reage apenas ao pai. Se o card for movido de uma coluna larga para uma barra lateral estreita, ele adapta-se sozinho.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-green-400">
          <span class="text-primary">@container</span> (min-width: 400px) { <br/>
          &nbsp;&nbsp;.child-content { font-size: 2rem; } <br/>
          }
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">💎 Porquê isto é revolucionário?</h4>
          <p class="text-sm leading-relaxed">
            Permite criar bibliotecas de componentes (Design Systems) que funcionam em qualquer parte do site sem que precises de escrever centenas de media queries globais. É a peça que faltava para a engenharia de UI moderna.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "web-q20"
};

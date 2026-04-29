
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m13",
  title: "Multimedia: WebVTT e Captions Master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline">🎬 Legendagem Profissional</h2>
        <p class="text-lg">WebVTT (Web Video Text Tracks) é o padrão da W3C para sincronizar texto com vídeo. É vital para acessibilidade auditiva e para indexação de conteúdo por motores de busca (SEO).</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">Anatomia de um ficheiro .vtt</h3>
        <p>Um simples ficheiro de texto que o browser lê linha a linha para saber quando e onde mostrar o texto sobre o vídeo.</p>
        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm shadow-inner">
          WEBVTT<br/><br/>
          00:00:01.000 --> 00:00:05.500 align:middle<br/>
          &lt;v Narrador&gt;Bem-vindos à engenharia de elite da Codworks Moz.
        </div>

        <h3 class="text-xl font-bold font-headline">Capítulos e Metadados</h3>
        <p>Podes usar o WebVTT para criar uma barra de navegação por capítulos no vídeo, permitindo ao utilizador saltar para o ponto de interesse instantaneamente.</p>
        
        <h3 class="text-xl font-bold font-headline text-accent">Estilização de Legendas (::cue)</h3>
        <p>O CSS permite-te mudar a aparência das legendas nativas para garantir que respeitam o design da tua marca.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs">
          video<span class="text-primary">::cue</span> { <br/>
          &nbsp;&nbsp;<span class="text-accent">background</span>: rgba(0,0,0,0.9); <br/>
          &nbsp;&nbsp;<span class="text-accent">color</span>: #3b82f6; <br/>
          }
        </div>
      </div>
    </div>
  `,
  quizId: "html-mq13"
};

import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p13",
  language: "html",
  title: "Projeto Master: Legendagem Dinâmica WebVTT",
  description: "Torne o conteúdo multimedia indexável e inclusivo.",
  statement: "Configure a trilha de legendas para o seu vídeo de introdução.",
  isProjectPart: true,
  youtubeVideoId: "8ME9u065vD4",
  template: `<!DOCTYPE html>
<html>
  <body>
    <video controls width="100%">
      <source src="intro.mp4" type="video/mp4">
      <!-- Ação 1: Adicione a tag track aqui -->
    </video>
  </body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Passo a Passo: Voz ao Vídeo</h3>
      <p class="text-sm">Adicione suporte a legendas nativas:</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> Use <code>&lt;track kind="subtitles" src="pt.vtt" srclang="pt" label="Português"&gt;</code>.</p>
        <p><strong>Ação 2:</strong> Adicione o atributo <code>default</code> à tag track.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "track_tag", description: "Adicionar a tag <track>", test: "<track" },
    { id: "kind_subs", description: "Definir kind='subtitles'", test: "kind=\"subtitles\"" },
    { id: "default_attr", description: "Definir como trilha padrão", test: "default" }
  ]
};
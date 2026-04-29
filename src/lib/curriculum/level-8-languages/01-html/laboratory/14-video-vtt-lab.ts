
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p14",
  language: "html",
  title: "Projeto Master: Legendas WebVTT",
  description: "Torne o conteúdo de vídeo indexável e acessível.",
  statement: "Adicione um elemento <track> com kind='subtitles' a um elemento <video> do seu projeto.",
  isProjectPart: true,
  youtubeVideoId: "8ME9u065vD4",
  template: ``,
  detailedExplanation: `
    <h3>🎬 Voz em Texto</h3>
    <p>Ficheiros <code>.vtt</code> permitem que o Google 'leia' o que é dito no seu vídeo, melhorando drasticamente o SEO de média.</p>
  `,
  objectives: [
    { id: "track", description: "Adicionar elemento <track>", test: "<track" },
    { id: "kind", description: "Definir kind='subtitles'", test: "kind=\"subtitles\"" }
  ]
};

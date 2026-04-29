
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p15",
  language: "html",
  title: "Projeto Master: Vetores e Acessibilidade",
  description: "Manipule gráficos XML nativamente.",
  statement: "Crie um ícone SVG acessível usando role='img' e uma tag <title> interna.",
  isProjectPart: true,
  youtubeVideoId: "u044iM9xsTM",
  template: ``,
  detailedExplanation: `
    <h3>📐 Matemática Visual</h3>
    <p>O SVG é código. No nível Master, deves garantir que ele seja legível tanto por olhos humanos quanto por motores de busca.</p>
  `,
  objectives: [
    { id: "role", description: "Definir role='img' no SVG", test: "role=\"img\"" },
    { id: "title", description: "Incluir tag <title> descritiva", test: "<title>" }
  ]
};

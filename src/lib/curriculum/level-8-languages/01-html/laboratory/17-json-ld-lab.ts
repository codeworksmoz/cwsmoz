
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p17",
  language: "html",
  title: "Projeto Master: Dados Estruturados JSON-LD",
  description: "Fale diretamente com os robôs do Google.",
  statement: "Adicione um bloco de script application/ld+json descrevendo o seu projeto como uma EducationalOrganization.",
  isProjectPart: true,
  youtubeVideoId: "v4cd1O4zkGw",
  template: ``,
  detailedExplanation: `
    <h3>🏷️ Semântica Profunda</h3>
    <p>O JSON-LD é o formato de dados estruturados mais moderno e limpo, gerando Rich Snippets na página de resultados.</p>
  `,
  objectives: [
    { id: "ldjson", description: "Tipo script='application/ld+json'", test: "application/ld+json" },
    { id: "context", description: "Contexto schema.org presente", test: "schema.org" }
  ]
};

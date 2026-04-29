
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p8",
  language: "html",
  title: "Projeto Master: Imagens Adaptáveis (srcset)",
  description: "Otimize a entrega de imagens para diferentes ecrãs.",
  statement: "Adicione uma imagem de destaque no seu projeto utilizando o atributo srcset para múltiplas resoluções.",
  isProjectPart: true,
  youtubeVideoId: "v4cd1O4zkGw",
  template: ``,
  detailedExplanation: `
    <h3>🖼️ Resolução Inteligente</h3>
    <p>Não envie imagens 4K para telemóveis. Use o <code>srcset</code> para dar opções ao browser baseadas na densidade de pixels (x descriptor).</p>
  `,
  objectives: [
    { id: "srcset", description: "Utilizar o atributo srcset", test: "srcset=" },
    { id: "alt", description: "Atributo alt obrigatório presente", test: "alt=" }
  ]
};

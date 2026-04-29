
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p8",
  language: "html",
  title: "Projeto Master: Variable Fonts Axes",
  description: "Controle o peso e a inclinação da fonte de forma granular.",
  statement: "Utilize a propriedade 'font-variation-settings' para ajustar o peso (wght) da sua fonte para 650.",
  isProjectPart: true,
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
<head>
  <style>
    @layer base {
      body { 
        background: #0f172a; 
        color: white;
        /* Supondo uma fonte variável carregada */
        font-family: sans-serif;
      }
      .master-text {
        /* Ação 1: Configure a variação de peso */
        font-variation-settings: "wght" 650;
      }
    }
  </style>
</head>
<body>
  <p class="master-text">Texto com Peso Variável</p>
</body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🖋️ Tipografia de Próxima Geração</h3>
      <p class="text-sm">Fontes Variáveis permitem carregar um único ficheiro e ter acesso a milhares de pesos e larguras.</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> No <code>.master-text</code>, adicione <code>font-variation-settings: "wght" 650;</code>.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "font_var", description: "Usar font-variation-settings", test: "font-variation-settings" }
  ]
};

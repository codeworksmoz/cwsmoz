import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p1",
  language: "html",
  title: "Projeto Master: Fundação do Documento",
  description: "Inicie a construção do esqueleto HTML5 seguindo as normas da W3C.",
  statement: "Siga as instruções para criar o arquivo base do seu portal de engenharia.",
  isProjectPart: true,
  youtubeVideoId: "8ME9u065vD4",
  template: `<!-- Inicie a construção na linha 1 -->\n`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Passo a Passo: A Fundação</h3>
      <p class="text-sm">Escreva o código exatamente nesta ordem para garantir a conformidade técnica:</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p>1. <code>&lt;!DOCTYPE html&gt;</code></p>
        <p>2. <code>&lt;html lang="pt-MZ"&gt;</code></p>
        <p>3. <code>&lt;head&gt;</code></p>
        <p>4. <code>&lt;meta charset="UTF-8"&gt;</code></p>
        <p>5. <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></p>
        <p>6. <code>&lt;title&gt;Codworks Master Studio&lt;/title&gt;</code></p>
        <p>7. <code>&lt;link rel="stylesheet" href="style.css"&gt;</code></p>
        <p>8. <code>&lt;/head&gt;</code></p>
        <p>9. <code>&lt;body&gt;</code></p>
        <p>10. <code>&lt;h1&gt;Bem-vindo ao Nível Master&lt;/h1&gt;</code></p>
        <p>11. <code>&lt;p&gt;A estrutura está validada.&lt;/p&gt;</code></p>
        <p>12. <code>&lt;/body&gt;</code></p>
        <p>13. <code>&lt;/html&gt;</code></p>
      </div>
    </div>
  `,
  objectives: [
    { id: "doctype", description: "Declarar <!DOCTYPE html>", test: "<!DOCTYPE html>" },
    { id: "html_lang", description: "Tag <html lang=\"pt-MZ\">", test: "<html lang=\"pt-MZ\">" },
    { id: "meta_viewport", description: "Meta viewport configurada", test: "name=\"viewport\"" },
    { id: "h1", description: "H1 de boas-vindas presente", test: "<h1>Bem-vindo ao Nível Master</h1>" }
  ]
};
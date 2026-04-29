
import type { PracticeExercise } from '../../../types';

export const exerciseHTML1: PracticeExercise = {
  id: "web-p1-html",
  language: "html",
  title: "Laboratório: Tags, Classes e IDs",
  description: "Cria a estrutura básica e define identificadores para estilização futura.",
  statement: "Cria um título h1 com o id 'titulo-principal' e um parágrafo p com a classe 'descricao'.",
  template: `<!-- Escreve o teu código HTML abaixo -->
<h1 id="">Codeworks</h1>
<p class="">Bem-vindos ao curso.</p>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-orange-500">🌐 Identificadores em HTML</h3>
      <p>Para o browser saber quem é quem na hora de pintar (CSS) ou dar inteligência (JS), usamos:</p>
      <ul class="list-disc ml-6 space-y-2">
        <li><code>id="..."</code>: Um nome <strong>único</strong> para um elemento específico.</li>
        <li><code>class="..."</code>: Um nome para um <strong>grupo</strong> de elementos que terão o mesmo estilo.</li>
      </ul>
      <div class="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20 text-xs">
        <strong>Nota:</strong> Guarda bem estes nomes! Nas próximas lições, vais usá-los no CSS para mudar as cores e no JavaScript para criar botões que funcionam.
      </div>
    </div>
  `,
  objectives: [
    {
      id: "h1_id",
      description: "Adiciona o id 'titulo-principal' à tag h1.",
      hint: "<h1 id=\"titulo-principal\">",
      test: "id=\"titulo-principal\""
    },
    {
      id: "p_class",
      description: "Adiciona a classe 'descricao' à tag p.",
      hint: "<p class=\"descricao\">",
      test: "class=\"descricao\""
    }
  ]
};

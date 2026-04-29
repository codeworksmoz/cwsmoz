import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p20",
  language: "html",
  title: "Projeto Master: Dados Estruturados de Elite",
  description: "Fale diretamente com os algoritmos de busca.",
  statement: "Adicione a descrição semântica do seu projeto via JSON-LD.",
  isProjectPart: true,
  template: `<!DOCTYPE html>
<html>
  <head>
    <!-- Ação 1: Adicione o script de dados estruturados aqui -->
  </head>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Passo a Passo: JSON-LD</h3>
      <p class="text-sm">Adicione o metadado que o Google ama:</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> Crie um <code>&lt;script type="application/ld+json"&gt;</code>.</p>
        <p><strong>Ação 2:</strong> Defina o objeto com <code>"@context": "https://schema.org"</code>.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "ld_json_type", description: "Tipo application/ld+json", test: "application/ld+json" },
    { id: "schema_context", description: "Contexto schema.org presente", test: "schema.org" }
  ]
};
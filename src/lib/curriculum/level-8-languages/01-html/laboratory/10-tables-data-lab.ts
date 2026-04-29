import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p10",
  language: "html",
  title: "Projeto Master: Auditoria de Dados com Tabelas",
  description: "Exiba informações estruturadas de forma acessível.",
  statement: "Crie uma tabela de 'Histórico de Treinos' abaixo do conteúdo do motor.",
  isProjectPart: true,
  youtubeVideoId: "8ME9u065vD4",
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Codworks Master Studio</title>
  </head>
  <body>
    <main role="main">
      <section>
        <h2>Histórico de Atividade</h2>
        <!-- Ação 1: Adicione a tabela aqui -->
      </section>
    </main>
  </body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Passo a Passo: Dados Tabulares</h3>
      <p class="text-sm">Implemente a tabela seguindo os padrões de acessibilidade:</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> Adicione <code>&lt;table&gt;</code> com <code>&lt;caption&gt;Treinos Recentes&lt;/caption&gt;</code>.</p>
        <p><strong>Ação 2:</strong> Use <code>&lt;thead&gt;</code> com <code>&lt;th scope="col"&gt;Data&lt;/th&gt;</code>.</p>
        <p><strong>Ação 3:</strong> No <code>&lt;tbody&gt;</code>, adicione uma linha <code>&lt;tr&gt;</code> com dados fictícios.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "caption", description: "Legenda da tabela com <caption>", test: "<caption>" },
    { id: "thead_check", description: "Uso correto de <thead>", test: "<thead>" },
    { id: "scope_col", description: "Atributo scope='col' presente", test: "scope=\"col\"" }
  ]
};
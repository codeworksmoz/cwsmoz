import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "db-t9",
  title: "Query Optimization: O Cérebro do SGBD",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">🧠 Como o Banco "Pensa"</h2>
        <p class="text-lg leading-relaxed">O teu SQL é declarativo (o que queres). O <strong>Query Optimizer</strong> decide o como: qual índice usar, em que ordem juntar as tabelas e se deve usar um Hash Join ou Nested Loop.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. O Plano de Execução (EXPLAIN)</h3>
        <p class="text-sm">Um engenheiro master nunca assume que o SQL é rápido. Ele usa o comando <code>EXPLAIN ANALYZE</code> para ver o custo estimado e real de cada etapa da consulta.</p>

        <h3 class="text-xl font-bold font-headline">2. Estatísticas de Tabela</h3>
        <p class="text-sm">O otimizador baseia-se em histogramas de distribuição de dados. Se o banco acha que a tabela tem 10 linhas mas ela tem 10 milhões, ele escolherá o algoritmo errado e travará o sistema.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">🚀 SARGability</h4>
          <p class="text-sm leading-relaxed">Significa "Search Argumentable". Se usares funções sobre colunas indexadas (ex: <code>WHERE year(data) = 2024</code>), o banco não consegue usar o índice. Otimize para: <code>WHERE data >= '2024-01-01'</code>.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "db-mq9"
};
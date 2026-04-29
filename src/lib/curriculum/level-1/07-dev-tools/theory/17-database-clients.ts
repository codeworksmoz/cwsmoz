import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "dt-t17",
  title: "Database Clients: GUI vs Terminal de Dados",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🗄️ Visualizando o Big Data
        </h2>
        <p class="text-lg">Trabalhar com bases de dados exige ferramentas que permitam navegar em tabelas, desenhar relações e otimizar queries SQL visualmente.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. Ferramentas de Elite</h3>
        <ul class="grid md:grid-cols-2 gap-4">
          <li class="p-4 bg-card border rounded-xl shadow-lg">
            <strong class="text-accent block mb-1">TablePlus / DBeaver:</strong> Clientes universais que suportam Postgres, MySQL, Redis e muito mais numa interface nativa rápida.
          </li>
          <li class="p-4 bg-card border rounded-xl shadow-lg">
            <strong class="text-accent block mb-1">VS Code Database:</strong> Extensões que permitem fazer queries sem sair do editor, mantendo o fluxo de código.
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline">2. O Poder do Terminal SQL</h3>
        <p class="text-sm">Um engenheiro Master não tem medo do terminal. Ferramentas como o <code>psql</code> ou <code>mysql-cli</code> são essenciais quando estás dentro de um servidor remoto via SSH onde não existe interface gráfica.</p>
      </div>
    </div>
  `,
  quizId: "dt-q17"
};
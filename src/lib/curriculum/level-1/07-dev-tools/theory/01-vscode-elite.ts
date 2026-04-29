import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "dt-t1",
  title: "VS Code Elite: Configuração e Produtividade",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          ⚡ O Teu Quartel-General de Engenharia
        </h2>
        <p class="text-lg">O VS Code não é apenas um editor de texto; é uma IDE modular. Um engenheiro de elite configura o seu ambiente para remover fricção e focar na lógica, utilizando o sistema de <strong>Extensions</strong> e <strong>Settings Sync</strong> para manter a consistência global.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. Extensões de Mission-Critical</h3>
        <ul class="grid md:grid-cols-2 gap-4">
          <li class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
            <strong class="text-accent block mb-1">ESLint & Prettier:</strong> A dupla sagrada. Garante que o teu código não tem erros de sintaxe e segue um padrão estético rigoroso automaticamente ao gravar.
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
            <strong class="text-accent block mb-1">GitLens:</strong> Transforma o Git numa ferramenta visual profunda. Permite ver o <i>Blame</i> linha a linha e navegar no histórico de commits sem sair do ficheiro.
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
            <strong class="text-accent block mb-1">Docker & Remote-SSH:</strong> Permite editar ficheiros dentro de contentores ou servidores em Londres como se estivessem no teu disco local.
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
            <strong class="text-accent block mb-1">Thunder Client:</strong> Testes de API rápidos sem precisar de abrir o Postman, mantendo o contexto de desenvolvimento.
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline">2. O Coração: Command Palette</h3>
        <p class="text-sm">O atalho <code>Ctrl+Shift+P</code> (ou <code>Cmd+Shift+P</code>) é a ferramenta mais potente do editor. Ele dá acesso a todos os comandos do sistema. Um engenheiro de elite raramente usa o rato nos menus de topo.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">🚀 Atalhos de Sobrevivência:</h4>
          <ul class="space-y-2 text-xs font-mono">
            <li><span class="text-accent">Ctrl + P</span> : Abrir ficheiro por nome instantaneamente.</li>
            <li><span class="text-accent">Ctrl + \` </span> : Abrir/Fechar o Terminal integrado (a tua ferramenta principal).</li>
            <li><span class="text-accent">Alt + Click</span> : Múltiplos cursores para edição em massa de dados repetitivos.</li>
            <li><span class="text-accent">F12</span> : Go to Definition. Salta para a implementação original de qualquer função.</li>
            <li><span class="text-accent">Ctrl + Shift + F</span> : Global Search. Pesquisa em todo o projeto usando Regex.</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  quizId: "dt-q1"
};
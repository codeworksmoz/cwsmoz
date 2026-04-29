import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t19",
  title: "Gestão de Pacotes e Bibliotecas: Reutilizando o Mundo",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          📦 O Ecossistema de Dependências
        </h2>
        <p class="text-lg leading-relaxed">
          Ninguém constrói um software moderno sozinho. Um Engenheiro de Elite sabe como utilizar o trabalho de outros engenheiros através de <strong>Gestores de Pacotes</strong> (NPM para JS, Pip para Python). Gerir estas dependências é vital para a segurança e estabilidade do projeto.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Manifesto do Projeto (package.json / requirements.txt)</h3>
        <p class="text-sm">Cada projeto tem um ficheiro que serve como a "lista de compras" do sistema. Ele define quais bibliotecas são necessárias e em que versões específicas.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-accent">
          { <br/>
          &nbsp;&nbsp;"dependencies": { <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;"react": "^18.2.0", <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;"axios": "~1.3.0" <br/>
          &nbsp;&nbsp;} <br/>
          }
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. SemVer: Versionamento Semântico</h3>
        <p class="text-sm">As versões não são números aleatórios. Elas seguem o padrão <strong>MAJOR.MINOR.PATCH</strong>:</p>
        <ul class="space-y-3">
          <li class="flex gap-4 p-3 bg-muted/20 rounded-xl">
            <span class="font-bold text-red-400">MAJOR:</span> Mudanças incompatíveis (quebram o código antigo).
          </li>
          <li class="flex gap-4 p-3 bg-muted/20 rounded-xl">
            <span class="font-bold text-blue-400">MINOR:</span> Novas funcionalidades que não quebram nada.
          </li>
          <li class="flex gap-4 p-3 bg-muted/20 rounded-xl">
            <span class="font-bold text-green-400">PATCH:</span> Apenas correções de bugs.
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🛡️ Ficheiros Lock: O Seguro de Vida</h3>
          <p class="text-sm leading-relaxed mb-4">
            O <code>package-lock.json</code> ou <code>poetry.lock</code> garante que toda a equipa e o servidor de produção usem <strong>exatamente</strong> os mesmos bits de código, evitando o erro clássico: "No meu computador funciona, mas no servidor falha".
          </p>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Visão Master: Supply Chain Security
          </h4>
          <p class="text-sm leading-relaxed">
            Ao instalar um pacote, podes estar a instalar centenas de dependências indiretas. Um engenheiro profissional audita estes pacotes usando ferramentas de segurança para garantir que não existem vulnerabilidades ocultas na cadeia de suprimentos.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "pf-t19-quiz"
};

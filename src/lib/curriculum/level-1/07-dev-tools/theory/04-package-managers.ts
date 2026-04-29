import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "dt-t4",
  title: "Gestores de Pacotes: NPM, PNPM e Segurança de Dependências",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          📦 O Ecossistema de Dependências
        </h2>
        <p class="text-lg leading-relaxed">Gerir bibliotecas de terceiros é um desafio de segurança e performance. No nível Master, escolhemos a ferramenta que oferece a melhor gestão de cache e resolução de conflitos, garantindo que o projeto seja reprodutível.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. PNPM: A Escolha de Performance</h3>
        <p class="text-sm">Ao contrário do NPM que duplica ficheiros em cada projeto, o <strong>PNPM</strong> usa links simbólicos (Hard Links). Se tens 10 projetos que usam o React, ele só existe uma vez no seu disco, economizando Gigabytes de espaço e acelerando a instalação.</p>
        
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">2. Semantic Versioning (SemVer)</h3>
        <p class="text-sm">As versões seguem o padrão <b>MAJOR.MINOR.PATCH</b>. O arquivo <code>package-lock.json</code> é o teu seguro de vida: ele "congela" a árvore exata para que o site não quebre sozinho no servidor de produção.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">🛡️ Auditoria de Segurança</h4>
          <p class="text-sm leading-relaxed">
            Use <code>npm audit</code> regularmente. Milhares de sites são comprometidos por vulnerabilidades em dependências profundas (transitivas). O Engenheiro de Elite automatiza esta verificação no pipeline de CI.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "dt-q4"
};
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "dt-t20",
  title: "Cloud CLIs: Gerindo a Infraestrutura via Terminal",
  content: `
    <div class="space-y-8">
      <div class="bg-blue-500/10 p-6 rounded-2xl border border-blue-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-blue-400">☁️ A Nuvem em Linha de Comando</h2>
        <p class="text-lg leading-relaxed">Não uses o rato no painel da AWS ou Google Cloud. Um Engenheiro Master usa as **CLIs (Command Line Interfaces)** para automatizar a criação de servidores, buckets de storage e bases de dados.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. Firebase e Vercel CLI</h3>
        <p class="text-sm">Comandos como <code>firebase deploy</code> ou <code>vercel env pull</code> permitem sincronizar o teu ambiente local com a nuvem em segundos, sem sair do terminal.</p>
        
        <h3 class="text-xl font-bold font-headline">2. AWS CLI e IaC</h3>
        <p class="text-sm">A CLI da Amazon permite gerir toda a infraestrutura global. É a base para a <strong>Infraestrutura como Código (IaC)</strong>, onde defines servidores usando scripts e não cliques manuais.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">🚀 Vantagem: Automação</h4>
          <p class="text-sm leading-relaxed">Ao usar CLIs, podes criar scripts de automação que configuram todo um ambiente de testes idêntico ao de produção para cada Pull Request novo.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "dt-q20"
};
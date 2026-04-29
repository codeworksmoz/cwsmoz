import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t15",
  title: "Estilo de Código e Linting: A Ética do Engenheiro",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🖋️ Código é para Humanos</h2>
        <p class="text-lg leading-relaxed">
          Escrever código que a máquina entende é fácil. Escrever código que <strong>outro humano</strong> consegue ler e manter daqui a dois anos é o que define um engenheiro sénior.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Princípio DRY (Don't Repeat Yourself)</h3>
        <p class="text-sm">Se vês o mesmo bloco de lógica repetido em três lugares, cria uma função. Duplicação de código é o maior gerador de bugs na história da computação.</p>
        
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. O Princípio KISS (Keep It Simple, Stupid)</h3>
        <p class="text-sm">Não tentes ser "esperto" ou criar soluções complexas para problemas simples. A solução mais simples é quase sempre a melhor e a mais segura.</p>

        <h3 class="text-xl font-bold font-headline">3. Nomenclatura Semântica</h3>
        <p class="text-sm">Nomes de variáveis devem explicar o seu propósito. Evite <code>let x = 10;</code>. Use <code>let maxLoginAttempts = 10;</code>.</p>
        <div class="grid grid-cols-2 gap-4">
          <div class="p-3 bg-card border rounded-lg border-white/10">
            <h4 class="font-bold text-accent text-xs">camelCase (JS/Java)</h4>
            <code class="text-[10px]">activeUserName</code>
          </div>
          <div class="p-3 bg-card border rounded-lg border-white/10">
            <h4 class="font-bold text-green-400 text-xs">snake_case (Python)</h4>
            <code class="text-[10px]">active_user_name</code>
          </div>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🤖 Linters: O Teu Corretor Automático</h3>
          <p class="text-sm leading-relaxed mb-4">
            Um <strong>Linter</strong> (como ESLint ou Pylint) é uma ferramenta que analisa o teu código sem o executar, procurando por erros de estilo, variáveis não utilizadas ou práticas perigosas.
          </p>
          <ul class="space-y-2 text-xs">
            <li>✅ Garante que toda a equipa escreve no mesmo estilo.</li>
            <li>✅ Encontra erros de sintaxe antes de rodares o código.</li>
            <li>✅ Formata o código automaticamente (Prettier).</li>
          </ul>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2">🚀 Visão Master: Clean Code</h4>
          <p class="text-sm leading-relaxed">
            Muitos acham que comentar o código é a solução. O Engenheiro Master escreve código tão limpo e bem nomeado que os comentários tornam-se quase desnecessários. Comente o "porquê" (a decisão), não o "o quê" (a lógica óbvia).
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "pf-t15-quiz"
};

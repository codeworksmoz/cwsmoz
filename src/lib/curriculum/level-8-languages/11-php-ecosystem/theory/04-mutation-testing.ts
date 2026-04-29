import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-eco-t4",
  title: "Fase 1: Mutation Testing: Auditoria com Infection",
  enableInteractive: true,
  youtubeVideoId: "u044iM9xsTM",
  quizId: "php-eco-mq4",
  content: `
    <div class="space-y-12">
      <div class="bg-red-500/5 p-8 rounded-[2.5rem] border border-red-500/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-red-400 flex items-center gap-3">
          🦠 Quem Testa os Testadores?
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Ter 100% de <button>Code Coverage</button> é uma métrica de vaidade se os teus testes não validarem a lógica real. O <strong>Mutation Testing</strong> introduz pequenos bugs (mutantes) no teu código e verifica se os teus testes falham. Se o teste continuar a passar, o mutante sobreviveu e o teu teste é frágil.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-red-500/20 pb-2 text-accent">1. A Mecânica do Infection PHP</h3>
        <p class="text-sm leading-relaxed">
          O <button>Infection</button> utiliza a <button>AST (Abstract Syntax Tree)</button> do PHP para realizar mutações cirúrgicas. Ele altera operadores matemáticos, inverte booleanos e remove chamadas de métodos para ver se os teus testes unitários percebem a sabotagem.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-4 bg-black/40 border border-white/5 rounded-xl shadow-lg">
             <h4 class="font-bold text-primary text-xs mb-2 uppercase">Código Original</h4>
             <pre><code class="language-php">
if ($balance >= $price) {
    return true;
}
             </code></pre>
          </div>
          <div class="p-4 bg-red-900/20 border border-red-500/30 rounded-xl shadow-lg">
             <h4 class="font-bold text-red-400 text-xs mb-2 uppercase">Mutante Gerado 🦠</h4>
             <pre><code class="language-php">
if ($balance > $price) {
    return true;
}
             </code></pre>
             <p class="text-[9px] mt-2 opacity-60">O sinal de igual foi removido. Se o teu teste não validar o valor exato, o mutante sobrevive.</p>
          </div>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-red-500/20 pb-2 text-accent">2. Métricas de Fidelidade: MSI</h3>
        <p class="text-sm leading-relaxed">A ferramenta reporta o estado da tua suite de testes através de indicadores industriais:</p>

        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">MSI (Mutation Score Indicator):</strong> A percentagem de mutantes detetados (mortos) em relação ao total gerado. No nível Master, visamos um MSI acima de 80%.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Killed (Morto):</strong> Um teste falhou ao detetar a mutação. Este é o objetivo!
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Escaped (Sobrevivente):</strong> O código mudou, mas todos os testes passaram. Indica uma lacuna grave na tua lógica de asserção.
          </li>
        </ul>
      </section>

      <div class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          🚀 Otimização: Mutation Initializing
        </h4>
        <p class="text-sm leading-relaxed">
          Correr mutações em todos os ficheiros é lento. O Engenheiro Master configura o <button>Infection</button> para rodar apenas nos ficheiros alterados no último commit via <button>--git-diff-filter</button>, mantendo o pipeline de CI rápido e eficiente.
        </p>
      </div>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 A Visão da Qualidade Total</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Mutation Testing é a auditoria definitiva. Ela prova que o seu investimento em testes não é apenas burocrático, mas uma barreira real contra falhas de produção. Se um mutante sobrevive, a sua segurança é uma ilusão."
        </p>
      </section>
    </div>
  `
};

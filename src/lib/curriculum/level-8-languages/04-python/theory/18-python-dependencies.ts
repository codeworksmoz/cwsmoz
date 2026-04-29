import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m18",
  title: "Fase 4: Gestão de Dependências com Poetry e Determinismo",
  youtubeVideoId: "8aGhZQkoFbQ",
  enableInteractive: true,
  quizId: "py-mq18",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          📦 O Fim do "Na minha máquina funciona"
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Gestão de pacotes com <code>pip</code> e <code>requirements.txt</code> é frágil para sistemas industriais. O <strong>Poetry</strong> introduz o determinismo absoluto através do ficheiro <code>poetry.lock</code>, garantindo que todo o ambiente da equipa e de produção seja 100% idêntico.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Arquivo pyproject.toml</h3>
        <p class="text-sm">O padrão moderno (PEP 518) unifica dependências, configurações de ferramentas (como Black e Pytest) e metadados do projeto num único local.</p>
        
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <pre><code class="language-toml">
[tool.poetry.dependencies]
python = "^3.11"
fastapi = "0.100.0"
numpy = {version = "^1.24", optional = true}
           </code></pre>
        </div>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Auditoria de Segurança Integrada</h3>
        <p class="text-sm leading-relaxed">
          O Poetry permite gerir dependências de desenvolvimento separadamente e auditar vulnerabilidades conhecidas (CVEs) em tempo real, garantindo que o seu **System Monitor** não carregue portas dos fundos em bibliotecas de terceiros.
        </p>
      </section>
    </div>
  `
};

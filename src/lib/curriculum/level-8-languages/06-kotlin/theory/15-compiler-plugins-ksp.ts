import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "kt-m15",
  title: "KSP (Kotlin Symbol Processing) e Geração de Código",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          ⚙️ Programando o Compilador
        </h2>
        <p class="text-lg leading-relaxed">
          KSP é a API moderna para criar plugins de compilador. Ela permite analisar o código-fonte Kotlin em tempo de compilação e gerar novos ficheiros (como adaptadores JSON ou injeção de dependência) sem o overhead do KAPT ou reflexão em runtime.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Porquê KSP e não KAPT?</h3>
        <p class="text-sm">O KAPT precisa de gerar "stubs" Java para funcionar, o que duplica o tempo de compilação. O KSP entende o Kotlin nativamente, resultando em builds até <strong>2x mais rápidos</strong>.</p>

        <h3 class="text-xl font-bold font-headline">2. O Fluxo de Processamento</h3>
        <ol class="space-y-3 text-xs">
          <li class="flex gap-2"><span class="text-accent font-bold">1. Scan:</span> O SymbolProcessor visita cada classe ou função anotada.</li>
          <li class="flex gap-2"><span class="text-accent font-bold">2. Analysis:</span> Verifica tipos, nomes e parâmetros.</li>
          <li class="flex gap-2"><span class="text-accent font-bold">3. Generation:</span> Cria novos ficheiros .kt usando o <i>CodeGenerator</i>.</li>
        </ol>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">💎 Uso em Design Systems</h4>
          <p class="text-sm leading-relaxed">Com KSP, podes anotar uma classe e ter todo o código de mapeamento para a base de dados gerado automaticamente. É a tecnologia por trás de bibliotecas de elite como <strong>Room</strong> e <strong>Moshi</strong>.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "kt-mq17"
};

import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t23",
  title: "Compiladores e Interpretadores: Do Código à Execução",
  youtubeVideoId: "E18Qv2bTkRU",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
          A Magia que Transforma Texto em Ação
        </h2>
        <p class="text-lg leading-relaxed">
          Como é que um ficheiro de texto com código se transforma em instruções que o processador executa? A resposta está nos <strong>compiladores</strong> e <strong>interpretadores</strong> — software que traduz linguagens de alto nível para código de máquina.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Compilador vs Interpretador vs JIT</h3>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-card p-4 rounded-xl border border-blue-500/20 text-center">
            <h4 class="font-bold text-blue-400">Compilador (AOT)</h4>
            <p class="text-xs text-gray-400 mt-2">Traduz TUDO antes de executar. Resultado: ficheiro binário executável. Ex: C, C++, Rust, Go.</p>
            <p class="text-[10px] text-green-400/70 mt-2">✓ Execução rápida<br/>✗ Compilação demorada</p>
          </div>
          <div class="bg-card p-4 rounded-xl border border-green-500/20 text-center">
            <h4 class="font-bold text-green-400">Interpretador</h4>
            <p class="text-xs text-gray-400 mt-2">Executa linha por linha diretamente. Ex: Python, Ruby, JavaScript (antigo), Bash.</p>
            <p class="text-[10px] text-green-400/70 mt-2">✓ Início instantâneo<br/>✗ Execução mais lenta</p>
          </div>
          <div class="bg-card p-4 rounded-xl border border-purple-500/20 text-center">
            <h4 class="font-bold text-purple-400">JIT (Just-In-Time)</h4>
            <p class="text-xs text-gray-400 mt-2">Compila partes "quentes" durante a execução. Ex: JVM (Java), V8 (JavaScript), .NET.</p>
            <p class="text-[10px] text-green-400/70 mt-2">✓ Performance adaptativa<br/>✗ Warm-up inicial</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">2. As 4 Fases de um Compilador</h3>
        <div class="bg-gray-900 p-6 rounded-2xl border border-primary/20">
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div class="bg-blue-500/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"><span class="text-blue-400 font-bold">1</span></div>
              <div class="bg-black/40 p-3 rounded-lg flex-1">
                <h5 class="text-blue-400 font-bold text-sm">Análise Léxica (Lexer/Tokenizer)</h5>
                <p class="text-xs text-gray-400 mt-1">Divide o código em tokens: <code>let x = 10;</code> → [LET, IDENT(x), ASSIGN, NUMBER(10), SEMICOLON]</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="bg-green-500/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"><span class="text-green-400 font-bold">2</span></div>
              <div class="bg-black/40 p-3 rounded-lg flex-1">
                <h5 class="text-green-400 font-bold text-sm">Análise Sintática (Parser)</h5>
                <p class="text-xs text-gray-400 mt-1">Constrói a <strong>AST (Abstract Syntax Tree)</strong> a partir dos tokens, verificando a gramática da linguagem.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="bg-yellow-500/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"><span class="text-yellow-400 font-bold">3</span></div>
              <div class="bg-black/40 p-3 rounded-lg flex-1">
                <h5 class="text-yellow-400 font-bold text-sm">Análise Semântica</h5>
                <p class="text-xs text-gray-400 mt-1">Verifica tipos, escopo, declarações. "Este identificador existe? O tipo é compatível?"</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="bg-purple-500/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"><span class="text-purple-400 font-bold">4</span></div>
              <div class="bg-black/40 p-3 rounded-lg flex-1">
                <h5 class="text-purple-400 font-bold text-sm">Geração de Código + Otimização</h5>
                <p class="text-xs text-gray-400 mt-1">Traduz a AST para código de máquina (assembly), aplicando otimizações como inlining, dead code elimination, loop unrolling.</p>
              </div>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">3. JIT na Prática: Como o V8 Executa JavaScript</h3>
        <p class="text-sm">O motor V8 do Chrome/Node.js tem dois compiladores JIT que trabalham em conjunto:</p>
        <div class="grid md:grid-cols-2 gap-4 mt-3">
          <div class="bg-yellow-500/10 p-4 rounded-xl border border-yellow-500/20">
            <h4 class="font-bold text-yellow-400 text-sm">Ignition (Interpreter)</h4>
            <p class="text-xs text-gray-400 mt-1">Executa o código imediatamente, gerando bytecode. Coleta métricas sobre funções "quentes".</p>
          </div>
          <div class="bg-red-500/10 p-4 rounded-xl border border-red-500/20">
            <h4 class="font-bold text-red-400 text-sm">TurboFan (Compiler)</h4>
            <p class="text-xs text-gray-400 mt-1">Compila funções muito usadas para código de máquina otimizado, baseado nos tipos observados.</p>
          </div>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2">Por que isso importa?</h4>
          <p class="text-sm">Escrever código "JIT-friendly" (ex: não mudar o tipo de uma variável) pode fazer o teu JavaScript rodar 10x mais rápido porque evita "deoptimizations" do TurboFan.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-q23"
};
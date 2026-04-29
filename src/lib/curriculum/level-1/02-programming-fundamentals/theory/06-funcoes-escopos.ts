import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t6",
  title: "Funções e Escopos: A Engenharia da Reutilização",
  youtubeVideoId: "mNst8vX-u8E",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🛠️ O Lego da Programação
        </h2>
        <p class="text-lg leading-relaxed">
          Uma <strong>Função</strong> é um bloco isolado de código desenhado para realizar uma tarefa específica. Em engenharia de software, as funções são os blocos de construção que nos permitem seguir o princípio <strong>DRY (Don't Repeat Yourself)</strong>: escreva a lógica uma vez e reutilize-a infinitamente.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Anatomia de uma Função de Elite</h3>
        <p>Independentemente da linguagem, uma função bem desenhada possui três partes críticas:</p>
        <ul class="space-y-4">
          <li class="flex gap-4">
            <div class="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 font-bold">1</div>
            <div>
              <p class="font-bold">Parâmetros (Input):</p>
              <p class="text-sm text-muted-foreground">São as variáveis de entrada que a função espera receber para trabalhar. Eles funcionam como "contratos" de dados.</p>
            </div>
          </li>
          <li class="flex gap-4">
            <div class="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 font-bold">2</div>
            <div>
              <p class="font-bold">Corpo (Lógica):</p>
              <p class="text-sm text-muted-foreground">O conjunto de instruções que processa os parâmetros. Fica sempre entre chavetas <code>{ }</code> ou definido por indentação.</p>
            </div>
          </li>
          <li class="flex gap-4">
            <div class="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 font-bold">3</div>
            <div>
              <p class="font-bold">Retorno (Output):</p>
              <p class="text-sm text-muted-foreground">A palavra-chave <code>return</code> envia o resultado final de volta para quem chamou a função e encerra a sua execução imediatamente.</p>
            </div>
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. O Conceito de Escopo (Scope)</h3>
        <p>O escopo determina a visibilidade de uma variável. É o sistema de segurança que impede que diferentes partes do programa causem efeitos colaterais umas nas outras.</p>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-5 bg-card border rounded-2xl border-primary/20 shadow-xl">
            <h4 class="font-bold text-primary mb-2">Escopo Global</h4>
            <p class="text-xs text-muted-foreground leading-relaxed">Variáveis declaradas fora de qualquer função. Estão visíveis para o programa inteiro. ⚠️ <strong>Uso perigoso:</strong> pode ser alterada por qualquer função, causando bugs difíceis de rastrear.</p>
          </div>
          <div class="p-5 bg-card border rounded-2xl border-accent/20 shadow-xl">
            <h4 class="font-bold text-accent mb-2">Escopo Local</h4>
            <p class="text-xs text-muted-foreground leading-relaxed">Variáveis declaradas dentro de uma função. Elas "nascem" quando a função inicia e "morrem" quando ela termina. Ninguém fora da função consegue vê-las.</p>
          </div>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">💎 Pure Functions (Funções Puras)</h3>
          <p class="text-sm leading-relaxed">
            Na engenharia de elite, o objetivo é escrever <strong>Funções Puras</strong>. Uma função é pura quando:
          </p>
          <ul class="list-disc ml-6 mt-2 space-y-1 text-xs text-muted-foreground">
            <li>Dada a mesma entrada, retorna sempre a mesma saída.</li>
            <li>Não causa "efeitos secundários" (não altera variáveis globais ou ficheiros).</li>
          </ul>
          <p class="text-xs mt-4 italic">Porquê? Porque são fáceis de testar, de mover e não quebram o resto do sistema.</p>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Visão de Futuro: Modularização
          </h4>
          <p class="text-sm leading-relaxed">
            Dominar funções é o primeiro passo para entender <strong>Classes</strong> e <strong>Módulos</strong>. Se souberes dividir a tua lógica em pequenas funções independentes, serás capaz de construir sistemas gigantescos mantendo o controlo total sobre a qualidade do código.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "pf-t6-quiz"
};

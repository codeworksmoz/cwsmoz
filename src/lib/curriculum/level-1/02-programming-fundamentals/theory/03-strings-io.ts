import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t3",
  title: "Strings e Input/Output: A Voz do Software",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          💬 O que são Strings?
        </h2>
        <p class="text-lg leading-relaxed">
          Uma <strong>String</strong> é uma sequência de caracteres tratada como um único dado. Na memória, cada caractere possui um índice numérico, e a manipulação correta destas cadeias é o que permite ao software comunicar com humanos.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Indexação: A Regra do Zero</h3>
        <p>Em programação, a contagem começa sempre no <strong>0</strong>. A primeira letra de uma string está no índice 0, a segunda no 1, e assim por diante.</p>
        <div class="bg-black/40 p-4 rounded-xl border font-code text-center text-accent tracking-[0.5em]">
          C O D E W O R K S <br/>
          0 1 2 3 4 5 6 7 8
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Interpolação vs Concatenação</h3>
        <p>Como juntar texto e variáveis? O Engenheiro Master evita o sinal de mais (+) e prefere a interpolação, que é mais legível e performática.</p>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-primary mb-2">JS (Template Literals)</h4>
            <code class="text-[10px] text-accent">\`Olá, \${user}!\`</code>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-green-400 mb-2">Python (F-Strings)</h4>
            <code class="text-[10px] text-green-400">f"Olá, {user}!"</code>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">3. Métodos Essenciais (Tratamento de Dados)</h3>
        <p>Muitas vezes, os dados vêm "sujos" ou em formatos errados. Usamos métodos nativos para limpar e normalizar o texto:</p>
        <ul class="space-y-4">
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 font-mono">()</div>
            <div>
              <p class="font-bold text-sm">.trim()</p>
              <p class="text-xs text-muted-foreground leading-relaxed">Remove espaços em branco inúteis no início e no fim da string. Fundamental para processar emails e passwords de formulários.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 font-mono">Aa</div>
            <div>
              <p class="font-bold text-sm">.toUpperCase() / .toLowerCase()</p>
              <p class="text-xs text-muted-foreground leading-relaxed">Normaliza a caixa do texto. Útil para comparar dados sem que a diferença entre maiúsculas e minúsculas quebre a lógica.</p>
            </div>
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">⌨️ Caracteres de Escape</h3>
          <p class="text-sm mb-4">Como colocar comandos dentro de um texto? Usamos a barra invertida <code>\\</code>:</p>
          <ul class="space-y-2 text-xs font-mono">
            <li><span class="text-accent">\\n</span> : New Line (Enter/Nova Linha)</li>
            <li><span class="text-accent">\\t</span> : Tab (Espaçamento longo)</li>
            <li><span class="text-accent">\\"</span> : Aspas Literais (Para o texto não fechar antes do tempo)</li>
          </ul>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Dica de Engenharia: I/O e Buffers
          </h4>
          <p class="text-sm leading-relaxed">
            Sempre que usas <code>console.log</code> ou <code>print</code>, o sistema envia dados para o <strong>Standard Output (stdout)</strong>. Em sistemas de alta escala, imprimir milhões de linhas no terminal pode abrandar a aplicação devido ao custo de I/O. Use logs apenas para o necessário em produção!
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "pf-t3-quiz"
};

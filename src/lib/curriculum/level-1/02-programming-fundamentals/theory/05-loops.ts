import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t5",
  title: "Loops e Iteração: O Poder da Escala",
  youtubeVideoId: "8hly31xKli0",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🔄 O Motor da Automação
        </h2>
        <p class="text-lg leading-relaxed">
          Loops (laços de repetição) permitem executar o mesmo bloco de código repetidamente enquanto uma condição for verdadeira. Sem loops, tarefas como processar 1 milhão de transações seriam impossíveis.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Loop FOR: O Contador Determinístico</h3>
        <p>Utilizado quando sabemos <strong>exatamente</strong> quantas vezes queremos repetir a tarefa. Ele agrupa inicialização, condição e incremento numa única linha.</p>
        <div class="bg-black/40 p-5 rounded-xl border font-code text-xs space-y-2">
          <p class="text-muted-foreground">// (Início; Condição; Passo)</p>
          <p><span class="text-accent">for</span> (let i = 0; i < 10; i++) {</p>
          <p>&nbsp;&nbsp;console.log("Execução nº", i);</p>
          <p>}</p>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Loop WHILE: O Vigilante</h3>
        <p>Ideal para quando o fim da repetição depende de um evento externo (ex: esperar que um ficheiro seja descarregado ou que o utilizador acerte na senha).</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-primary">
          <span class="text-accent">while</span> (conexao.ativa == true) { <br/>
          &nbsp;&nbsp;receberDados(); <br/>
          }
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">3. Controlo de Fluxo: Break e Continue</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-red-500/20">
            <h4 class="font-bold text-red-400 mb-1">Break</h4>
            <p class="text-xs">Para o loop IMEDIATAMENTE. Útil para interromper uma busca assim que o item é encontrado.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-yellow-500/20">
            <h4 class="font-bold text-yellow-500 mb-1">Continue</h4>
            <p class="text-xs">Salta apenas a volta atual e vai direto para a próxima. Útil para ignorar itens inválidos numa lista.</p>
          </div>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🧩 Loops Aninhados (Nested Loops)</h3>
          <p class="text-sm leading-relaxed mb-4">
            Podes colocar um loop dentro de outro para percorrer estruturas multidimensionais (como uma grelha de Excel ou pixels de uma imagem).
          </p>
          <p class="text-xs text-red-400 font-bold">⚠️ Atenção à Complexidade:</p>
          <p class="text-xs text-muted-foreground">Loops aninhados aumentam o custo computacional para O(n²). Use-os apenas quando necessário!</p>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2">🚀 Visão de Engenheiro</h4>
          <p class="text-sm leading-relaxed">
            A escolha entre <code>for</code> e <code>while</code> é uma questão de semântica e clareza. Um loop infinito não é apenas um erro; em sistemas embarcados, um loop infinito controlado é o que mantém o sistema operativo a correr à espera de comandos.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "pf-t5-quiz"
};
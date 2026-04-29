import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t16",
  title: "Assincronia: O Tempo e a Espera no Código",
  youtubeVideoId: "8aGhZQkoFbQ",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          ⏳ Não Trave o Sistema
        </h2>
        <p class="text-lg leading-relaxed">
          No mundo real, o software precisa de esperar por coisas: o download de uma imagem, uma resposta de base de dados ou o clique de um utilizador. Se o código fosse apenas síncrono, o site ficaria "congelado" até que a tarefa terminasse. A <strong>Assincronia</strong> permite que o código continue a correr enquanto espera.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Síncrono vs Assíncrono</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-red-500/20">
            <h4 class="font-bold text-red-400 mb-1">Síncrono (Blocking)</h4>
            <p class="text-xs text-muted-foreground">O programa executa a linha 1, espera terminar, e só depois vai para a linha 2. Se a linha 1 demorar 10 segundos, o utilizador não consegue fazer nada durante esse tempo.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-green-500/20">
            <h4 class="font-bold text-green-400 mb-1">Assíncrono (Non-blocking)</h4>
            <p class="text-xs text-muted-foreground">O programa dispara a tarefa da linha 1 e segue imediatamente para a linha 2. Quando a linha 1 terminar, o sistema avisa o código através de um callback ou evento.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Promessas de Futuro (Promises/Futures)</h3>
        <p class="text-sm">Uma <strong>Promise</strong> é um objeto que representa um valor que ainda não existe, mas que existirá no futuro. Ela pode estar em três estados:</p>
        <ul class="space-y-2 text-xs">
          <li>🟡 <strong>Pending:</strong> A tarefa ainda está a correr (ex: descarregando).</li>
          <li>✅ <strong>Fulfilled:</strong> A tarefa terminou com sucesso.</li>
          <li>❌ <strong>Rejected:</strong> Algo correu mal (ex: internet caiu).</li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🤖 A Sintaxe Moderna: Async / Await</h3>
          <p class="text-sm mb-4">Escrever callbacks pode tornar-se confuso (Callback Hell). O padrão <strong>Async/Await</strong> permite escrever código assíncrono que PARECE síncrono e fácil de ler.</p>
          <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-accent">
            <span class="text-primary">async</span> function carregarDados() { <br/>
            &nbsp;&nbsp;const dados = <span class="text-primary">await</span> fetch('https://api.cwm.mz'); <br/>
            &nbsp;&nbsp;console.log(dados); <br/>
            }
          </div>
          <p class="text-[10px] mt-4 italic opacity-60">Nota: O 'await' pausa a função atual, mas o resto do programa continua livre para processar cliques e animações.</p>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Impacto na Engenharia
          </h4>
          <p class="text-sm leading-relaxed">
            Dominar a assincronia é o que te permite construir aplicações fluidas. Numa arquitetura de elite, evitamos operações pesadas na thread principal. No Nível 2, verás como o <strong>Event Loop</strong> do JavaScript gere esta mágica nos bastidores.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "pf-t16-quiz"
};

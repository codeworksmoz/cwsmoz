import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t4",
  title: "Kanban e Lean: Gestão de Fluxo e Eficiência Operacional",
  youtubeVideoId: "R8dYLbJiTUE",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🌊 Fluindo como um Rio
        </h2>
        <p class="text-lg leading-relaxed">
          Kanban não é apenas um "quadro com colunas". É um sistema visual de gestão de trabalho que foca na <strong>entrega contínua</strong> e na redução do desperdício, herdando princípios do <i>Lean Manufacturing</i> da Toyota.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Visualização e Limites de WIP</h3>
        <p class="text-sm">A regra de ouro do Kanban é o <strong>WIP Limit (Work In Progress)</strong>. Ao limitar o número de tarefas que podem estar "Em Execução" ao mesmo tempo, forçamos o foco na conclusão e não no início de novas tarefas.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">💎 O Mantra Kanban:</h4>
          <p class="text-xl text-center font-headline font-bold italic">"Stop Starting, Start Finishing!"</p>
        </div>

        <h3 class="text-xl font-bold font-headline">2. Métricas de Fluxo (Flow Metrics)</h3>
        <p class="text-sm">Um Engenheiro Master gere o processo através de dados estatísticos:</p>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block">Lead Time:</strong> O tempo total desde que um pedido nasce até ser entregue. É o que o cliente sente.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block">Cycle Time:</strong> O tempo que a tarefa demora a ser feita uma vez iniciada. É o que a equipa controla.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block">Throughput:</strong> Quantas tarefas terminamos por semana/mês. Mede a vazão real do sistema.
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">3. Gestão de Gargalos (Bottlenecks)</h3>
        <p class="text-sm leading-relaxed">
          O Kanban revela onde o trabalho se acumula. Se a coluna de "Code Review" está sempre cheia e com o limite de WIP estourado, o sistema avisa-te de que precisas de mais revisores, e não de mais programadores a escrever código novo.
        </p>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2">🚀 Lean Thinking: Eliminar o Mudá</h4>
          <p class="text-sm leading-relaxed">
            <i>Mudá</i> é desperdício. No software, desperdício é código feito que nunca vai para produção, burocracia excessiva, bugs que poderiam ter sido evitados com testes e reuniões inúteis. Kanban foca em manter o fluxo o mais "seco" (Lean) possível.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "se-q4-master"
};
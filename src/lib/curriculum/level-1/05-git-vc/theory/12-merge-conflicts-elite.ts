import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "git-t12",
  title: "Resolvendo Merge Conflicts de Elite",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/10 p-6 rounded-2xl border border-red-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400">⚔️ Quando o Código Colide</h2>
        <p class="text-lg">Conflitos ocorrem quando dois programadores editam as mesmas linhas no mesmo ficheiro em ramos diferentes. O Git não consegue decidir qual versão é a correta sozinho.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Anatomia do Conflito</h3>
        <p>O Git marca os ficheiros com indicadores visuais:</p>
        <div class="bg-black/40 p-5 rounded-xl border font-code text-xs text-accent">
          <<<<<<< HEAD (Teu código atual)<br/>
          Versão A<br/>
          =======<br/>
          Versão B<br/>
          >>>>>>> feature (Código vindo do merge)
        </div>

        <h3 class="text-xl font-bold font-headline text-primary">Processo de Resolução:</h3>
        <ol class="list-decimal ml-6 space-y-2 text-sm">
          <li>Identificar os ficheiros conflituosos com <code>git status</code>.</li>
          <li>Abrir os ficheiros e escolher manualmente qual código manter (ou misturar ambos).</li>
          <li>Remover os marcadores (<<<, ===, >>>).</li>
          <li>Usar <code>git add</code> para marcar o conflito como resolvido.</li>
          <li>Finalizar com <code>git commit</code>.</li>
        </ol>
      </div>
    </div>
  `,
  quizId: "git-q12"
};
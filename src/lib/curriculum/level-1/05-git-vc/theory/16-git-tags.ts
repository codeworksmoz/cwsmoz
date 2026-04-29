import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "git-t16",
  title: "Tags e Versionamento Semântico (SemVer)",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🏷️ Marcando Momentos Históricos</h2>
        <p class="text-lg">Enquanto um commit é um registo diário, uma <strong>Tag</strong> é um marco. Usamos tags para identificar versões lançadas (ex: v1.0.0, v2.5.4).</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">Versionamento Semântico (SemVer)</h3>
        <p class="text-sm">Seguimos o padrão <strong>MAJOR . MINOR . PATCH</strong>:</p>
        <ul class="grid md:grid-cols-3 gap-4">
          <li class="p-4 bg-card border rounded-xl border-red-500/20 text-center">
            <strong class="text-red-400 block">MAJOR</strong>
            <span class="text-[10px]">Quebra de compatibilidade.</span>
          </li>
          <li class="p-4 bg-card border rounded-xl border-blue-500/20 text-center">
            <strong class="text-blue-400 block">MINOR</strong>
            <span class="text-[10px]">Nova funcionalidade estável.</span>
          </li>
          <li class="p-4 bg-card border rounded-xl border-green-500/20 text-center">
            <strong class="text-green-400 block">PATCH</strong>
            <span class="text-[10px]">Apenas correção de bugs.</span>
          </li>
        </ul>

        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm">
          git tag -a v1.0.0 -m "Lançamento oficial v1"<br/>
          git push origin v1.0.0
        </div>
      </div>
    </div>
  `,
  quizId: "git-q16"
};
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "git-t11",
  title: "Git Stash: Guardando Trabalho Temporário",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          📦 O "Bolso" do Git
        </h2>
        <p class="text-lg leading-relaxed">
          Muitas vezes precisas de mudar de branch para corrigir um bug urgente, mas ainda não terminaste a tua tarefa atual e não queres fazer um commit "sujo". O <strong>git stash</strong> permite guardar as tuas alterações temporariamente e limpar o diretório de trabalho.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">Comandos de Elite</h3>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl">
            <code class="text-accent">git stash push -m "mensagem"</code>: Guarda as alterações com uma etiqueta para fácil identificação.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl">
            <code class="text-accent">git stash list</code>: Lista todos os itens guardados no teu "bolso".
          </li>
          <li class="p-4 bg-muted/20 rounded-xl">
            <code class="text-accent">git stash pop</code>: Recupera as últimas alterações guardadas e remove-as da lista.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl">
            <code class="text-accent">git stash apply</code>: Recupera as alterações mas mantém uma cópia na lista de stash.
          </li>
        </ul>
      </div>
    </div>
  `,
  quizId: "git-q11"
};
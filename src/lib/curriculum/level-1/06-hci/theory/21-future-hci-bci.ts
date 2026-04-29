import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t21",
  title: "O Futuro do HCI: BCI e a Interface Invisível",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl text-center">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🔮 Além do Ecrã de Vidro</h2>
        <p class="text-lg leading-relaxed">Chegaste ao fim da jornada de HCI. O futuro aponta para interfaces invisíveis (BCI - Brain Computer Interface) onde o pensamento dita a ação direta no computador, sem necessidade de gestos ou voz.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-xl">
          <h4 class="font-bold text-accent mb-2">BCI (Cérebro-Computador)</h4>
          <p class="text-xs opacity-70 leading-relaxed">Sinais cerebrais convertidos em comandos binários. O fim do hardware de input para utilizadores com paralisia severa ou profissionais de alta performance.</p>
        </div>
        <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-xl">
          <h4 class="font-bold text-accent mb-2">Interfaces Calmas</h4>
          <p class="text-xs opacity-70 leading-relaxed">Sistemas que antecipam as necessidades humanas e desaparecem no ambiente, reduzindo a carga mental e o tempo de ecrã.</p>
        </div>
      </div>

      <div class="bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/20 text-center">
          <p class="text-primary font-bold text-2xl animate-pulse uppercase tracking-tighter">🎓 Parabéns, Engenheiro!</p>
          <p class="text-muted-foreground mt-2">Completaste o Módulo de HCI. Agora dominas a ciência de criar sistemas que os humanos amam usar.</p>
      </div>
    </div>
  `,
  quizId: "hci-q21"
};
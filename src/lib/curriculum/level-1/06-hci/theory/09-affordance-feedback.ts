import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t9",
  title: "Feedback e Affordance: O Diálogo Silencioso",
  content: `
    <div class="space-y-8">
      <div class="bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-yellow-500">👂 O Sistema está a Ouvir?</h2>
        <p class="text-lg">Feedback é a resposta do sistema a uma ação. Affordance é a pista visual que diz como um objeto pode ser usado.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-xl">
          <h4 class="font-bold text-accent mb-3 flex items-center gap-2">🕹️ Affordance</h4>
          <p class="text-xs leading-relaxed">Um botão que parece "clicável" (tem sombra ou relevo). Uma barra de scroll que indica a possibilidade de movimento vertical.</p>
        </div>
        <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-xl">
          <h4 class="font-bold text-accent mb-3 flex items-center gap-2">⚡ Feedback</h4>
          <p class="text-xs leading-relaxed">O botão muda de cor ao ser clicado. Um spinner aparece enquanto os dados carregam. Um som de "sucesso" ao enviar um email.</p>
        </div>
      </div>
      <p class="text-sm italic text-muted-foreground border-l-4 border-primary pl-4">"A pior interface é aquela que não reage a uma ação do utilizador, deixando-o na dúvida."</p>
    </div>
  `,
  quizId: "hci-q9"
};
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t1",
  title: "Fundamentos de HCI: O Engenheiro e o Utilizador",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-primary font-headline">
          🤝 A Ponte entre Homem e Máquina
        </h2>
        <p class="text-lg leading-relaxed">
          HCI (Human-Computer Interaction) é a disciplina que estuda como as pessoas interagem com computadores e como desenhar sistemas que sejam fáceis, eficientes e seguros de usar. Para um engenheiro, o HCI é a ciência que evita que o utilizador cometa erros fatais.
        </p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>Os Três Pilares do HCI:</h3>
        <ul class="space-y-4">
          <li class="flex gap-4">
            <div class="w-10 h-10 rounded-lg bg-accent/20 text-accent flex items-center justify-center shrink-0 font-bold">1</div>
            <div>
              <p class="font-bold">O Humano:</p>
              <p class="text-sm text-muted-foreground">Capacidades cognitivas, visão, memória e modelos mentais.</p>
            </div>
          </li>
          <li class="flex gap-4">
            <div class="w-10 h-10 rounded-lg bg-accent/20 text-accent flex items-center justify-center shrink-0 font-bold">2</div>
            <div>
              <p class="font-bold">O Computador:</p>
              <p class="text-sm text-muted-foreground">Dispositivos de input (teclado, voz) e output (ecrãs, haptics).</p>
            </div>
          </li>
          <li class="flex gap-4">
            <div class="w-10 h-10 rounded-lg bg-accent/20 text-accent flex items-center justify-center shrink-0 font-bold">3</div>
            <div>
              <p class="font-bold">A Interação:</p>
              <p class="text-sm text-muted-foreground">O diálogo entre ambos: como as ordens são dadas e como o feedback é recebido.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  `,
  quizId: "hci-q1"
};
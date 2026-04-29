import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "go-m4",
  title: "Select e Multiplexação de Sinais Assíncronos",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🚦 O Semáforo de Comunicação</h2>
        <p class="text-lg leading-relaxed">
          A instrução <code>select</code> é o que torna a concorrência em Go verdadeiramente poderosa. Ela permite que uma goroutine espere por múltiplas operações de canais simultaneamente, processando a primeira que estiver pronta.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Funcionalidades Críticas</h3>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Timeouts Nativo:</strong> Use <code>time.After()</code> num case para abortar operações que demoram demais.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Non-blocking Operations:</strong> O uso de um <code>default</code> case permite tentar ler de um canal sem nunca bloquear a goroutine se ele estiver vazio.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Escolha Aleatória:</strong> Se múltiplos cases estiverem prontos ao mesmo tempo, o Go escolhe um <strong>aleatoriamente</strong>, garantindo justiça e prevenindo <i>starvation</i>.
          </li>
        </ul>
      </div>
    </div>
  `,
};

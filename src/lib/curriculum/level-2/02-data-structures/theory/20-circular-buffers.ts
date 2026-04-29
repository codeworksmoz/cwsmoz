import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "ds-t20",
  title: "Circular Buffers e Gestão de I/O em Tempo Real",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">♻️ O Ciclo Infinito de Dados</h2>
        <p class="text-lg leading-relaxed">
          Um **Circular Buffer** (Ring Buffer) utiliza um array fixo como se as pontas estivessem ligadas. É a estrutura de eleição para streaming de áudio, vídeo e comunicação de rede de alta velocidade.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">1. Ponteiros Head e Tail</h3>
        <p class="text-sm">Os dados são escritos no Tail e lidos no Head. Quando um ponteiro chega ao fim do array, volta para o índice 0. Zero alocações de memória após o arranque!</p>

        <h3 class="text-xl font-bold font-headline text-accent">2. Lock-Free Single Producer Single Consumer (SPSC)</h3>
        <p class="text-sm">Em sistemas de tempo real, o Ring Buffer permite que um produtor e um consumidor troquem dados sem nunca precisarem de um Mutex (Lock), evitando pausas indesejadas no áudio ou rede.</p>
      </div>
    </div>
  `,
  quizId: "ds-mq20"
};

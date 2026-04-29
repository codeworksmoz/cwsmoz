import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "ds-t21",
  title: "Data Locality: Por que a RAM é o novo Disco",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl text-center">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🏎️ Performance a Nível de Hardware</h2>
        <p class="text-lg leading-relaxed">Chegaste ao fim do módulo. A lição final não é sobre lógica, mas sobre **Física**. O custo de um <i>Cache Miss</i> é centenas de vezes superior a qualquer instrução de CPU.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2 text-accent">O Fenómeno da Localidade</h3>
        <p class="text-sm">CPUs modernos não puxam 1 byte da RAM; eles puxam uma <strong>Cache Line</strong> de 64 bytes. Se os teus dados estão juntos (Arrays), o próximo dado já estará no CPU. Se estão espalhados (Linked Lists), o CPU terá de esperar pela RAM em cada passo.</p>
        
        <h3 class="text-xl font-bold font-headline text-primary">Software de Elite vs Software Comum</h3>
        <p class="text-sm leading-relaxed">
          Um engenheiro Master desenha estruturas de dados que respeitam o <strong>Spatial Prefeching</strong> do hardware. Prefira arrays de structs planos a structs com ponteiros para outros objetos.
        </p>
        
        <div class="bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/20 text-center mt-10">
           <p class="text-primary font-bold text-2xl animate-pulse">🎓 Módulo de Estruturas de Dados Concluído!</p>
           <p class="text-muted-foreground mt-2">Você agora entende não apenas a lógica, mas como os dados fluem fisicamente através do computador.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "ds-mq21"
};

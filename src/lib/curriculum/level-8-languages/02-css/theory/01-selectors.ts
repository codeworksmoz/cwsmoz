import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m1",
  title: "Fase 1: Seletores de Elite, Especificidade e :has()",
  enableInteractive: true,
  youtubeVideoId: "u044iM9xsTM",
  quizId: "css-mq1",
  content: `<div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🎯 O Algoritmo da Seleção
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Dominar o CSS Master exige que pare de "tentar" seletores e passe a <strong>desenhar a especificidade</strong>. O browser não escolhe estilos aleatoriamente; ele segue um cálculo matemático rigoroso. Esta lição explora como manipular esse peso e como usar o seletor relacional <code>:has()</code> para criar lógicas complexas.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Sistema de Pontuação Industrial</h3>
        <p class="text-sm leading-relaxed">
          Sempre que há um conflito de estilos, o browser calcula a especificidade baseando-se em três categorias principais:
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-xl">
             <span class="block text-4xl font-black text-accent mb-2">100</span>
             <h4 class="font-bold text-xs uppercase tracking-widest text-primary mb-2">IDs (#id)</h4>
             <p class="text-[10px] opacity-60">Poder máximo. Deve ser usado com cautela em Design Systems.</p>
          </div>
          <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-xl">
             <span class="block text-4xl font-black text-primary mb-2">10</span>
             <h4 class="font-bold text-xs uppercase tracking-widest text-primary mb-2">Classes, Atrib. e Pseudo</h4>
             <p class="text-[10px] opacity-60">O padrão de ouro da modularidade: .class, :hover, [type].</p>
          </div>
          <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-xl">
             <span class="block text-4xl font-black text-muted-foreground mb-2">1</span>
             <h4 class="font-bold text-xs uppercase tracking-widest text-primary mb-2">Elementos (h1, p)</h4>
             <p class="text-[10px] opacity-60">A base semântica da hierarquia.</p>
          </div>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. :has() - O Seletor Relacional</h3>
        <p class="text-sm leading-relaxed">
          O <code>:has()</code> permite selecionar um elemento pai baseado nos seus descendentes ou irmãos. É a solução nativa para evitar dependências excessivas de classes no HTML.
        </p>

        <div class="space-y-4">
           <pre><code class="language-css">
/* Seleciona o card apenas se ele contiver uma imagem de erro */
.card:has(.error-icon) {
  border: 2px solid var(--error-red);
  background: var(--error-bg);
}

/* Seleciona o label apenas se o input seguinte estiver focado */
label:has(+ input:focus) {
  color: var(--primary);
  font-weight: bold;
}
           </code></pre>
        </div>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 A Regra do Arquiteto</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Utilize <code>:is()</code> e <code>:where()</code> para agrupar seletores. Lembre-se que <code>:where()</code> tem especificidade zero, sendo ideal para estilos de base que devem ser facilmente sobrescritos por componentes."
        </p>
      </section>
    </div>`
};
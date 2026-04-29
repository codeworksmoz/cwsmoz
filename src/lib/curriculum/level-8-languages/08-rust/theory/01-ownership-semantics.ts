
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "rs-m1",
  title: "Semântica de Ownership e Movimentação",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🛡️ Segurança de Memória sem GC
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <strong>Ownership</strong> é a inovação central do Rust. Ele permite que o compilador garanta a segurança da memória e a ausência de fugas (leaks) sem a necessidade de um Garbage Collector pausando a sua aplicação. Cada pedaço de dado tem um único dono (Owner) por vez.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. As Três Regras Sagradas</h3>
        <ul class="space-y-4">
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 font-bold">1</div>
            <p class="text-sm">Cada valor em Rust tem uma variável que é chamada de seu <strong>Owner</strong>.</p>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 font-bold">2</div>
            <p class="text-sm">Pode haver apenas <strong>um owner por vez</strong>.</p>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 font-bold">3</div>
            <p class="text-sm">Quando o owner sai do escopo (scope), o valor é <strong>dropped</strong> (libertado da RAM) automaticamente.</p>
          </li>
        </ul>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Move Semantics: O Fim do Double-Free</h3>
        <p class="text-sm">Ao atribuir uma <code>String</code> a outra variável, o Rust <strong>move</strong> o ponteiro da stack. A variável original torna-se inválida instantaneamente, impedindo que dois donos tentem libertar a mesma memória no fim.</p>
        
        <div class="space-y-4">
           <pre><code class="language-rust">
let s1 = String::from("CWM");
let s2 = s1; // O ownership de "CWM" foi MOVIDO para s2.

// println!("{}", s1); // ❌ ERRO DE COMPILAÇÃO: s1 não é mais dona de nada!
           </code></pre>
        </div>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Performance de Custo Zero</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Em Rust, 'Mover' é uma cópia barata de 24 bytes na Stack (ponteiro, tamanho, capacidade). O dado real no Heap (que pode ter Gigabytes) nunca é tocado. É a fusão perfeita entre segurança e velocidade extrema."
        </p>
      </section>
    </div>
  `
};

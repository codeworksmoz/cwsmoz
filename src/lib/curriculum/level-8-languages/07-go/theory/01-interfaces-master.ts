import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "go-m1",
  title: "Interfaces Implícitas e o Desacoplamento de Elite",
  content: `
    <div class="space-y-12">
      <div class="bg-cyan-500/10 p-8 rounded-[2.5rem] border border-cyan-500/20 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-cyan-400 flex items-center gap-3">
          🐹 O Segredo da Flexibilidade em Go
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Em Go, as interfaces são satisfeitas <strong>implicitamente</strong>. Não existe a palavra-chave <code>implements</code>. Se o teu tipo possui os métodos necessários, ele JÁ É aquela interface. Isto é a base da interoperabilidade e testabilidade de alta escala.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-cyan-500/20 pb-2 text-accent">1. Duck Typing Estático</h3>
        <p class="text-sm">"Se anda como um pato e quacka como um pato, então é um pato." Diferente de Python, Go valida isto em tempo de compilação.</p>
        
        <div class="space-y-4">
           <pre><code class="language-go">
type Reader interface {
    Read(p []byte) (n int, err error)
}

// Qualquer struct que tenha o método Read() satisfaz Reader.
// Podes definir a interface NO CONSUMIDOR, não no fornecedor.
           </code></pre>
        </div>
      </section>

      <section class="bg-cyan-500/5 p-8 rounded-[2rem] border-2 border-dashed border-cyan-500/20 text-center">
        <h4 class="text-xl font-bold text-cyan-400 mb-4">🏆 Regra do Arquiteto Cloud</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "As interfaces em Go devem ser pequenas. 'The bigger the interface, the weaker the abstraction'. Prefira interfaces de 1 ou 2 métodos para garantir que o seu motor de tarefas seja verdadeiramente modular."
        </p>
      </section>
    </div>
  `
};

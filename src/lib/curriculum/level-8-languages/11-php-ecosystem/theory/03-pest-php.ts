import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-eco-t3",
  title: "Fase 1: Pest PHP: O Futuro dos Testes Funcionais",
  youtubeVideoId: "raf_id_pest",
  enableInteractive: true,
  quizId: "php-eco-mq3",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🐝 Testes com Prazer e Velocidade</h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <button>Pest PHP</button> é uma framework de testes construída sobre o PHPUnit, mas focada na <strong>Elegância</strong>. No nível Master, utilizamos o Pest para criar suites de testes que parecem documentação em linguagem natural, utilizando <button>Higher-Order Tests</button> para reduzir drasticamente a verbosidade.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Sintaxe Funcional</h3>
        <p class="text-sm">Abandone o <code>public function test_something()</code>. O Pest utiliza funções globais como <code>it()</code> e <code>test()</code> para definir expectativas de forma limpa.</p>
        <pre><code class="language-php">
it('valida que um evento master tem ID único', function () {
    $event = new Event();
    expect($event->id)->not->toBeEmpty();
});
        </code></pre>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Expectations API</h3>
        <p class="text-sm">Em vez de <code>$this->assertEquals()</code>, o Pest oferece uma API fluida que se lê como inglês, aumentando a velocidade de escrita dos testes no nosso <button>Event Server</button>.</p>
        <pre><code class="language-php">
expect($processed)->toBeTrue()
    ->and($result)->toBeInstanceOf(Success::class)
    ->not->toBeNull();
        </code></pre>
      </section>
    </div>
  `
};

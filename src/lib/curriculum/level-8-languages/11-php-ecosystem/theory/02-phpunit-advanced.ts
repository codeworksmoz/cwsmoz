import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-eco-t2",
  title: "Fase 1: PHPUnit Avançado: Mocks, Stubs e Data Providers",
  enableInteractive: true,
  youtubeVideoId: "dQw4w9WgXcQ",
  quizId: "php-eco-mq2",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🧪 Engenharia de Testes de Alta Fidelidade
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Garantir a integridade de um sistema de alta escala como o nosso <button>Event Server</button> exige mais do que testes simples. No nível Master, utilizamos <button>Test Doubles</button> para isolar a lógica de negócio de dependências lentas ou imprevisíveis (Bases de Dados, APIs, Sistema de Ficheiros).
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Test Doubles: Stubs vs. Mocks</h3>
        <p class="text-sm leading-relaxed">
          Embora pareçam iguais, a intenção técnica é diferente. Um engenheiro master sabe exatamente qual usar para não criar testes frágeis.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">Stubs (Estado)</h4>
             <p class="text-xs opacity-70 leading-relaxed">
               Fornece respostas fixas ("enlatadas") para chamadas feitas durante o teste. Usamos <button>Stubs</button> para simular o retorno de uma base de dados ou um status de API.
               <br><br><i>"Sempre que pedirem o saldo, diga que é 1000."</i>
             </p>
          </div>
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">Mocks (Comportamento)</h4>
             <p class="text-xs opacity-70 leading-relaxed">
               Verifica se um método foi chamado, quantas vezes e com quais argumentos. Usamos <button>Mocks</button> para garantir que o sistema disparou um alerta ou salvou um log.
               <br><br><i>"Garanta que o método 'send' foi chamado exatamente 1 vez com o email correto."</i>
             </p>
          </div>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Injeção e Double Creation</h3>
        <p class="text-sm leading-relaxed">
          Para que o <button>PHPUnit</button> consiga substituir uma classe real, o seu código deve respeitar a <button>Injeção de Dependência</button>. No motor, usamos o método <button>createMock()</button> para gerar estes objetos dinâmicos.
        </p>

        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <pre><code class="language-php">
public function test_event_is_dispatched_successfully() {
    // 1. Criar o Mock da interface de rede
    $network = $this->createMock(NetworkInterface::class);

    // 2. Configurar a expectativa (Expectation)
    $network->expects($this->once())
            ->method('send')
            ->with($this->equalTo('user.signup'))
            ->willReturn(true);

    $dispatcher = new EventDispatcher($network);
    $dispatcher->dispatch('user.signup', ['id' => 1]);
}
           </code></pre>
        </div>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Data Providers: Testes em Massa</h3>
        <p class="text-sm leading-relaxed">
          Nunca repita o mesmo teste para valores diferentes. Use o atributo <button>#[DataProvider]</button>. Isto permite que passes uma matriz de dados (casos de sucesso e falha) para um único método de teste, aumentando a cobertura com o mínimo de código.
        </p>
        
        <pre><code class="language-php">
public static function provideInvalidEmails(): array {
    return [
        ['email-sem-at.com'],
        ['@sem-usuario.com'],
        ['espaço no@email.com'],
    ];
}

#[DataProvider('provideInvalidEmails')]
public function test_validation_fails_for_invalid_emails(string $email): void {
    $this->expectException(InvalidEmailException::class);
    $validator->validate($email);
}
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 A Visão do Engenheiro de QA</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Testar é projetar. Se uma classe é impossível de 'mockar', é sinal de que ela está demasiado acoplada ou faz coisas demais (<button>Single Responsibility Principle</button>). O <button>PHPUnit Avançado</button> é o teu melhor arquiteto: ele força-te a escrever código modular e resiliente."
        </p>
      </section>
    </div>
  `
};

import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m13",
  title: "Metaclasses e Abstract Base Classes (ABCs)",
  youtubeVideoId: "v4cd1O4zkGw",
  content: `
    <div class="space-y-12">
      <div class="bg-purple-500/10 p-8 rounded-[2.5rem] border border-purple-500/20 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-purple-400 flex items-center gap-3">
          🏗️ Construindo Moldes de Classes
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Metaclasses são as "fábricas" de classes. Se uma classe cria objetos, uma metaclasse cria classes. No nível Master, utilizamos <strong>Metaclasses</strong> para validar a arquitetura do sistema no momento em que o código é importado, garantindo que as regras de design sejam seguidas.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Método __new__</h3>
        <p class="text-sm">O <code>__new__</code> da metaclasse é executado quando a classe está a ser definida. Podes alterar nomes de métodos, injetar atributos ou lançar erros se a classe não cumprir um requisito.</p>
        <pre><code class="language-python">
class AuditMeta(type):
    def __new__(cls, name, bases, attrs):
        if "process" not in attrs:
            raise TypeError(f"A classe {name} deve implementar o método 'process'")
        return super().__new__(cls, name, bases, attrs)
        </code></pre>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. ABCs e Contratos Reais</h3>
        <p class="text-sm">As <strong>Abstract Base Classes</strong> permitem definir interfaces que não podem ser instanciadas e forçam a implementação de métodos específicos nas filhas.</p>
        <pre><code class="language-python">
from abc import ABC, abstractmethod

class BaseWorker(ABC):
    @abstractmethod
    def run(self):
        pass
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 A Visão do Arquiteto de Frameworks</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Metaclasses são uma ferramenta de 'magia negra'. 99% dos casos podem ser resolvidos com herança simples ou decoradores. Use-as apenas quando precisar de ditar as leis fundamentais de como outras classes devem se comportar no seu sistema."
        </p>
      </section>
    </div>
  `
};

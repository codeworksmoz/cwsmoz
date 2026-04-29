import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m12",
  title: "Descriptors e Data Validation Internals",
  youtubeVideoId: "u044iM9xsTM",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🏷️ Por trás das @properties
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O protocolo de <strong>Descriptors</strong> é a mecânica de baixo nível que permite ao Python interceptar o acesso a atributos. É a tecnologia que sustenta decoradores como <code>@property</code>, <code>@staticmethod</code> e os ORMs modernos (como Django e SQLAlchemy).
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Protocolo do Descritor</h3>
        <p class="text-sm leading-relaxed">
          Um descritor é um objeto que define pelo menos um dos métodos: <code>__get__</code>, <code>__set__</code> ou <code>__delete__</code>.
        </p>
        
        <pre><code class="language-python">
class Validator:
    def __set__(self, obj, value):
        if value < 0:
            raise ValueError("Valor não pode ser negativo")
        obj.__dict__[self.name] = value

class Product:
    price = Validator() # Atributo gerido pelo descritor
        </code></pre>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          🚀 Data vs Non-data Descriptors
        </h4>
        <p class="text-sm leading-relaxed">
          Se definires o <code>__set__</code>, tens um <strong>Data Descriptor</strong>, que sempre terá precedência sobre o dicionário de instância do objeto. Isto permite criar regras de validação imutáveis que nem o próprio objeto pode contornar facilmente.
        </p>
      </section>
    </div>
  `
};

import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m2",
  title: "Metaprogramação: Decoradores e Metaclasses",
  youtubeVideoId: "dQw4w9WgXcQ",
  enableInteractive: true,
  quizId: "py-mq2",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🎭 Código que Manipula Código
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Metaprogramação é a arte de criar abstrações que operam sobre outras partes do sistema em tempo de execução. Em Python, isto é atingido através de <strong>Decoradores</strong> para funções e <strong>Metaclasses</strong> para o controle da criação de classes.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Decoradores de Alta Fidelidade</h3>
        <p class="text-sm leading-relaxed">
          Um decorador master utiliza <code>functools.wraps</code> para garantir que a função "embrulhada" não perca a sua identidade (nome, docstring, assinatura).
        </p>
        <pre><code class="language-python">
from functools import wraps

def audit_log(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print(f"Executando {func.__name__}")
        return func(*args, **kwargs)
    return wrapper
        </code></pre>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Metaclasses: O Molde dos Moldes</h3>
        <p class="text-sm leading-relaxed">Uma <strong>Metaclasse</strong> é a classe de uma classe. Ela permite intercetar a criação de novas classes para validar a sua estrutura, injetar métodos ou aplicar padrões de projeto automaticamente.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">Uso em Frameworks:</h4>
          <p class="text-xs leading-relaxed">É assim que o Django ou o SQLAlchemy sabem quais campos existem na sua classe sem que precises de os listar manualmente num construtor.</p>
        </div>
      </section>
    </div>
  `
};

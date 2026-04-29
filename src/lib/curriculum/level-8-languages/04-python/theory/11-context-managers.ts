import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m11",
  title: "Context Managers e o Protocolo 'with'",
  youtubeVideoId: "dQw4w9WgXcQ",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🛡️ Gestão Segura de Recursos
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Garantir que ficheiros, sockets e conexões de base de dados sejam fechados corretamente é vital para a resiliência de sistemas. O protocolo <strong>with</strong> em Python abstrai a lógica de "setup" e "teardown", garantindo que a limpeza ocorra mesmo em caso de exceções fatais.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Os Métodos Mágicos: __enter__ e __exit__</h3>
        <p class="text-sm leading-relaxed">
          Qualquer classe pode tornar-se um Context Manager implementando estes dois métodos. O <code>__exit__</code> recebe informações sobre qualquer erro que tenha ocorrido no bloco, permitindo decidir se o erro deve ser suprimido ou propagado.
        </p>
        
        <pre><code class="language-python">
class DatabaseConnection:
    def __enter__(self):
        self.conn = connect_db()
        return self.conn
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.conn.close()
        # Se retornar True, a exceção é silenciada.
        return False 
        </code></pre>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. A Conveniência do contextlib</h3>
        <p class="text-sm leading-relaxed">Para casos simples, a biblioteca padrão oferece o decorador <code>@contextmanager</code>, transformando um gerador numa estrutura robusta de contexto.</p>

        <pre><code class="language-python">
from contextlib import contextmanager

@contextmanager
def temp_file():
    f = open("test.txt", "w")
    try:
        yield f
    finally:
        f.close()
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Engenheiro</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Em Python Master, nunca abra um recurso manualmente sem um bloco <code>with</code>. A gestão determinística de recursos é o que separa um script amador de um motor industrial que pode rodar por meses sem memory leaks."
        </p>
      </section>
    </div>
  `
};

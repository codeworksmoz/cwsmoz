import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m13",
  title: "Decoradores Avançados e Context Managers",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🎭 Metaprogramação e Limpeza</h2>
        <p class="text-lg leading-relaxed">
          Masterizar o protocolo <strong>Context Manager</strong> (<code>with</code>) e criar decoradores que aceitam argumentos é vital para gerir recursos de sistema e logs de forma elegante.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Decoradores com Estado</h3>
        <p>Utilizar classes ou Closures para criar decoradores que mantêm memória entre execuções (ex: Rate Limiters ou Caches customizados).</p>
        
        <h3 class="text-xl font-bold font-headline">@contextmanager</h3>
        <p>A forma mais rápida e legível de criar gestores de contexto usando geradores. Garanta que ficheiros e conexões são fechados mesmo em caso de erro.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-accent">
          from contextlib import contextmanager<br/><br/>
          @contextmanager<br/>
          def database_session():<br/>
          &nbsp;&nbsp;conn = connect()<br/>
          &nbsp;&nbsp;try: yield conn<br/>
          &nbsp;&nbsp;finally: conn.close()
        </div>
      </div>
    </div>
  `,
  quizId: "py-mq13"
};

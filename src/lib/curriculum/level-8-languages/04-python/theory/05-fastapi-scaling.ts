import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m5",
  title: "FastAPI: Escalabilidade e Tipagem Forte",
  youtubeVideoId: "R8dYLbJiTUE",
  enableInteractive: true,
  quizId: "py-mq5",
  content: `
    <div class="space-y-12">
      <div class="bg-green-500/5 p-8 rounded-[2.5rem] border border-green-500/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-green-400 flex items-center gap-3">
          🚀 APIs de Alta Performance
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <strong>FastAPI</strong> revolucionou o desenvolvimento web em Python. Baseado no <strong>Starlette</strong> e no <strong>Pydantic</strong>, ele oferece performance comparável a Node.js e Go, utilizando tipagem estática (Type Hints) para validação e documentação automática.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Pydantic e a Segurança de Dados</h3>
        <p class="text-sm">Nunca confie no input do utilizador. O Pydantic valida os dados antes de chegarem à sua lógica de negócio, garantindo que o seu <strong>System Monitor</strong> nunca receba valores corrompidos.</p>
        
        <pre><code class="language-python">
from pydantic import BaseModel

class Metric(BaseModel):
    cpu_usage: float
    is_active: bool = True
        </code></pre>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner text-center">
        <h4 class="text-xl font-bold text-indigo-400 mb-4">🏁 Concorrência Nativa</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Ao usar <code>async def</code>, o FastAPI gere o pool de conexões de forma não-bloqueante, permitindo que um único servidor suporte milhares de requisições por segundo."
        </p>
      </section>
    </div>
  `
};

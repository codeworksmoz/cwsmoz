
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "des-t6",
  title: "Domain Driven Design (DDD): A Linguagem do Negócio",
  quizId: "des-q6-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🧩 Modelagem Focada no Domínio
        </h2>
        <p class="text-lg leading-relaxed">
          O DDD não é sobre tecnologia, é sobre <strong>complexidade</strong>. Ele propõe que a estrutura do software deve espelhar o domínio de negócio através de uma linguagem comum entre engenheiros e especialistas.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Design Estratégico</h3>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Ubiquitous Language (Linguagem Ubíqua):</strong> O vocabulário deve ser o mesmo no código, no banco e na reunião com o cliente. Se o negócio diz "Apólice", o código deve ter a classe <code>Policy</code>.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Bounded Contexts (Contextos Delimitados):</strong> Dividir um sistema grande em áreas independentes. O conceito de "Produto" no contexto de Vendas é diferente do "Produto" no contexto de Logística.
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">2. Design Tático (Building Blocks)</h3>
        <div class="grid md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 bg-card border rounded-xl shadow-lg">
            <h4 class="font-bold text-green-400 mb-1">Entities vs Value Objects</h4>
            <p>Entidades têm identidade única (ex: ID). Value Objects são definidos pelos seus atributos (ex: uma cor ou um endereço).</p>
          </div>
          <div class="p-4 bg-card border rounded-xl shadow-lg">
            <h4 class="font-bold text-green-400 mb-1">Aggregates & Roots</h4>
            <p>Grupos de objetos que são tratados como uma unidade única para garantir a consistência dos dados.</p>
          </div>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">🚀 Vantagem Master</h4>
          <p class="text-sm leading-relaxed">
            DDD permite que o software evolua sem se tornar um "Big Ball of Mud". Ao definir fronteiras claras entre contextos, podes migrar partes do sistema para microserviços de forma segura e isolada.
          </p>
        </div>
      </div>
    </div>
  `
};

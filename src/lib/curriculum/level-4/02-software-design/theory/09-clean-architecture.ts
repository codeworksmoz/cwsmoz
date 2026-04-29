
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "des-t9",
  title: "Clean Architecture: As Camadas de Cebola do Uncle Bob",
  quizId: "des-q9-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🧅 A Regra da Dependência
        </h2>
        <p class="text-lg leading-relaxed">
          A Clean Architecture foca na separação de interesses. A regra fundamental é: <strong>as dependências de código só podem apontar para dentro</strong>, em direção às regras de negócio e entidades.
        </p>
      </div>

      <div class="space-y-6 text-sm">
        <div class="space-y-2">
           <p class="font-bold text-blue-400">1. Entities (Coração):</p>
           <p class="opacity-70">Regras de negócio críticas e globais da empresa. São as menos propensas a mudar.</p>
        </div>
        <div class="space-y-2">
           <p class="font-bold text-green-400">2. Use Cases (Casos de Uso):</p>
           <p class="opacity-70">Regras de negócio específicas da aplicação. Orquestram o fluxo de dados de e para as entidades.</p>
        </div>
        <div class="space-y-2">
           <p class="font-bold text-yellow-400">3. Interface Adapters:</p>
           <p class="opacity-70">Tradutores entre o formato dos casos de uso e o formato de agências externas (ex: Presenters, Gateways).</p>
        </div>
        <div class="space-y-2">
           <p class="font-bold text-red-400">4. Frameworks & Drivers (Exterior):</p>
           <p class="opacity-70">Onde vivem as ferramentas: Web, DB, UI, Dispositivos. Devem ser tratados como detalhes irrelevantes para o negócio.</p>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">💎 O Objetivo Final</h4>
          <p class="text-xs leading-relaxed">Um sistema Clean é independente de frameworks, testável sem UI e independente de base de dados. O teu negócio sobrevive mesmo que o React ou o Oracle morram amanhã.</p>
        </div>
      </div>
    </div>
  `
};


import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m10",
  title: "Security: Sanitização e Proteção contra XSS",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/10 p-6 rounded-2xl border border-red-500/20 text-red-100">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400">🛡️ Defesa Cibernética</h2>
        <p class="text-lg">O Cross-Site Scripting (XSS) ocorre quando um atacante consegue injetar scripts maliciosos no teu site através de inputs de utilizador não tratados.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Regra de Ouro: Nunca confies no input</h3>
        <p>Dados vindos de formulários ou URLs devem ser sempre escapados ou limpos antes de serem inseridos no DOM.</p>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-red-500/5 p-4 rounded-xl border border-red-500/20">
            <h4 class="font-bold text-red-400 mb-2">Vulnerável ❌</h4>
            <code class="text-[10px]">el.innerHTML = userInput;</code>
          </div>
          <div class="bg-green-500/5 p-4 rounded-xl border border-green-500/20">
            <h4 class="font-bold text-green-400 mb-2">Seguro ✅</h4>
            <code class="text-[10px]">el.textContent = userInput;</code>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline text-primary">Sanitizer API (2024+)</h3>
        <p>O browser agora possui uma API nativa para limpar HTML de forma segura, removendo atributos perigosos como <code>onerror</code> ou <code>javascript:</code>.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs">
          const sanitizer = <span class="text-primary">new Sanitizer</span>();<br/>
          element.<span class="text-accent">setHTML</span>(dirtyString, { sanitizer });
        </div>
      </div>
    </div>
  `,
  quizId: "js-mq10"
};

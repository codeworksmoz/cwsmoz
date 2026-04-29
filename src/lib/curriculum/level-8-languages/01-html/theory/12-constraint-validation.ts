
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m12",
  title: "Constraint Validation API: Lógica Nativa",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline">🛡️ Validando na Camada de Renderização</h2>
        <p class="text-lg leading-relaxed">
          A API de Validação de Restrições permite que o browser trate a lógica de erro antes mesmo do seu código JavaScript ser executado, reduzindo o tempo de CPU e garantindo uma experiência de utilizador fluida.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">O Objeto 'ValidityState'</h3>
        <p>Todo o elemento de input possui uma propriedade <code>validity</code>. Este objeto contém booleanos que explicam EXATAMENTE porque um campo falhou.</p>
        <ul class="grid grid-cols-2 gap-4 text-xs font-code">
          <li class="p-3 bg-card border rounded">valueMissing: True se o campo required estiver vazio.</li>
          <li class="p-3 bg-card border rounded">typeMismatch: True se o formato (email/url) for inválido.</li>
          <li class="p-3 bg-card border rounded">patternMismatch: True se falhar na Regex do atributo pattern.</li>
          <li class="p-3 bg-card border rounded">tooLong / tooShort: Falha de contagem de caracteres.</li>
        </ul>

        <h3 class="text-xl font-bold font-headline">setCustomValidity(): A Mensagem é Tua</h3>
        <p>Podes mudar o texto do "balão" de erro do browser para algo mais humano ou localizado para o contexto moçambicano.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-accent border border-white/10">
          input.setCustomValidity('Este campo é obrigatório para registar na Codworks!');
        </div>

        <h3 class="text-xl font-bold font-headline text-primary">Pseudo-classes CSS de Estado</h3>
        <p>Estilize o feedback visual sem uma linha de JS usando <code>:invalid</code>, <code>:valid</code> e <code>:placeholder-shown</code>.</p>
      </div>
    </div>
  `,
  quizId: "html-mq12"
};

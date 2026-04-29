import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m9",
  title: "Fase 2: Constraint Validation API e UX de Erros",
  enableInteractive: true,
  quizId: "html-mq9",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🛡️ Validando na Camada de Runtime
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          A <strong>Constraint Validation API</strong> permite-te intercetar a lógica de erro do browser antes mesmo do envio dos dados. Um Engenheiro Master utiliza esta API para criar interfaces resilientes que guiam o utilizador através de mensagens claras, localizadas e acessíveis.
        </p>
      </div>

      <!-- 1. O OBJETO VALIDITYSTATE -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Objeto ValidityState</h3>
        <p class="text-sm">Todo o elemento de input possui uma propriedade <code>validity</code>. Este objeto contém booleanos que explicam <strong>EXATAMENTE</strong> porque um campo falhou.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
            <h4 class="font-bold text-primary mb-2 text-xs">Propriedades Críticas</h4>
            <ul class="text-[10px] space-y-2 opacity-80 font-mono">
              <li><strong>valueMissing:</strong> True se required e vazio.</li>
              <li><strong>typeMismatch:</strong> True se email/url inválido.</li>
              <li><strong>patternMismatch:</strong> True se violar o Regex.</li>
              <li><strong>tooLong / tooShort:</strong> Limites de caracteres.</li>
              <li><strong>customError:</strong> True se setCustomValidity foi usado.</li>
            </ul>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
            <h4 class="font-bold text-primary mb-2 text-xs">Uso em Script</h4>
            <pre><code class="language-javascript">
const input = document.querySelector('#email');
if (input.validity.typeMismatch) {
  console.log("Formato de email inválido!");
}
            </code></pre>
          </div>
        </div>
      </section>

      <!-- 2. SETCUSTOMVALIDITY -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. setCustomValidity: Mensagens Localizadas</h3>
        <p class="text-sm leading-relaxed">Podes mudar o texto do "balão" de erro do browser. <strong>Importante:</strong> Se definires uma mensagem, o campo é considerado INVÁLIDO até que limpes a mensagem com uma string vazia.</p>

        <div class="space-y-4">
           <h4 class="font-bold text-primary text-xs uppercase tracking-widest">Exemplo Interativo: Validação Personalizada</h4>
           <pre><code class="language-html">
&lt;form id="master-form"&gt;
  &lt;label for="username"&gt;Nome de Engenheiro (deve conter 'Master'):&lt;/label&gt;&lt;br&gt;
  &lt;input type="text" id="username" required style="padding:10px; border-radius:8px; border:1px solid #ccc;"&gt;
  &lt;button type="submit" style="padding:10px 20px; background:#3b82f6; color:white; border:none; border-radius:8px; cursor:pointer;"&gt;Validar&lt;/button&gt;
&lt;/form&gt;

&lt;script&gt;
  const input = document.querySelector('#username');
  input.addEventListener('input', () => {
    if (!input.value.includes('Master')) {
      input.setCustomValidity('O nome deve obrigatoriamente conter a palavra Master!');
    } else {
      input.setCustomValidity(''); // Limpa o erro para permitir o envio
    }
  });
&lt;/script&gt;
           </code></pre>
        </div>
      </section>

      <!-- 3. CSS DE ESTADO -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. CSS Master: Feedback Visual sem Script</h3>
        <p class="text-sm">Utilize pseudo-classes para dar feedback instantâneo enquanto o utilizador escreve.</p>
        
        <pre><code class="language-html">
&lt;style&gt;
  input:invalid {
    border-color: #ef4444 !important;
    background-color: #fef2f2;
  }

  /* :user-invalid aplica apenas APÓS o utilizador interagir */
  input:user-invalid {
    outline: 2px solid #ef4444;
  }

  input:valid {
    border-color: #22c55e !important;
  }
&lt;/style&gt;

&lt;input type="email" required placeholder="Digite um email válido"&gt;
        </code></pre>
      </section>

      <!-- 4. CONTROLO DE BUBBLES -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. Prevenindo o Comportamento Padrão</h3>
        <p class="text-sm">Se queres criar a tua própria UI de erros (ex: um toast ou texto em baixo do campo), deves desativar as bolhas nativas.</p>
        
        <pre><code class="language-html">
&lt;form novalidate id="custom-form"&gt;
  &lt;!-- O atributo 'novalidate' impede que o browser mostre as bolhas de erro --&gt;
  &lt;input type="text" required&gt;
  &lt;span class="error-area" aria-live="polite"&gt;&lt;/span&gt;
&lt;/form&gt;

&lt;script&gt;
  const form = document.querySelector('#custom-form');
  form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      document.querySelector('.error-area').textContent = "Dados inválidos detectados!";
    }
  });
&lt;/script&gt;
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Engenheiro de UX</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Validação de cliente é para UX (ajudar o utilizador); validação de servidor é para Segurança. Nunca confie apenas na Constraint Validation para proteger a sua base de dados, mas nunca a ignore se quiser um site profissional."
        </p>
      </section>
    </div>
  `
};

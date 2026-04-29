import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m19",
  title: "Fase 4: Segurança Avançada: RCE e Desserialização Insegura",
  enableInteractive: true,
  quizId: "php-mq19",
  content: `
    <div class="space-y-12">
      <div class="bg-red-500/10 p-8 rounded-[2.5rem] border border-red-500/20 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-red-400 flex items-center gap-3">
          🛡️ Blindagem Cibernética de Alta Fidelidade
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          No nível Master, a segurança não é uma camada extra; ela é integrada no design do motor. Um Engenheiro de Elite deve ser capaz de identificar e neutralizar vetores de ataque que tentam executar código arbitrário ou corromper a memória do servidor através de falhas lógicas na gestão de dados persistentes.
        </p>
      </div>

      <!-- 1. REMOTE CODE EXECUTION (RCE) -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-red-500/20 pb-2 text-accent">1. Remote Code Execution: O Fim do Servidor</h3>
        <p class="text-sm leading-relaxed">
          O <button>RCE</button> ocorre quando um atacante consegue forçar o PHP a executar comandos no nível do Sistema Operativo. Isto acontece frequentemente quando o desenvolvedor utiliza funções de execução dinâmica com dados vindos do utilizador (<button>$_GET</button>, <button>$_POST</button>).
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-4 bg-red-600/10 border border-red-600/20 rounded-xl">
             <h4 class="font-bold text-red-400 text-xs mb-2">Funções Proibidas em Produção ❌</h4>
             <ul class="text-[10px] space-y-1 font-mono opacity-80">
               <li><button>eval()</button>: Interpreta string como PHP.</li>
               <li><button>exec()</button> / <button>shell_exec()</button>: Roda binários no SO.</li>
               <li><button>passthru()</button> / <button>system()</button>: Saída direta para o browser.</li>
               <li><button>create_function()</button>: Deprecated e insegura.</li>
             </ul>
          </div>
          <div class="p-4 bg-green-600/10 border border-green-600/20 rounded-xl">
             <h4 class="font-bold text-green-400 text-xs mb-2">Alternativas de Engenharia ✅</h4>
             <p class="text-[10px] opacity-70 leading-relaxed">
               Se precisas de lógica dinâmica, use um <button>Strategy Pattern</button> ou um mapa de funções (Allow-list). Se precisas de rodar um binário, use o componente <button>Symfony Process</button> que limpa os argumentos automaticamente via <button>escapeshellarg()</button>.
             </p>
          </div>
        </div>
      </section>

      <!-- 2. INSECURE DESERIALIZATION -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-red-500/20 pb-2 text-accent">2. PHP Object Injection e unserialize()</h3>
        <p class="text-sm leading-relaxed">
          A função <button>unserialize()</button> é um dos vetores mais perigosos do PHP. Ela não apenas restaura dados; ela <strong>instancia objetos</strong>. Um atacante pode enviar uma string serializada que, ao ser processada, dispara <button>Magic Methods</button> como <button>__wakeup()</button> ou <button>__destruct()</button>, permitindo apagar ficheiros ou escalar privilégios.
        </p>

        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <h4 class="font-bold text-red-400 text-xs mb-4 uppercase">Exemplo de Exploit Lógico</h4>
           <pre><code class="language-php">
// ⚠️ PERIGO: Receber dados serializados da rede
$data = unserialize($_COOKIE['session_data']);

// Se a classe Logger estiver no projeto, o atacante pode enviar 
// uma string que instancia o Logger e muda o path para '/etc/passwd'
           </code></pre>
           <p class="text-[10px] mt-4 text-green-400 font-bold">
             A Solução Master: Use SEMPRE <button>json_decode()</button>. O JSON é um formato de dados inerte e não consegue instanciar classes ou disparar lógica de destruição.
           </p>
        </div>
      </section>

      <!-- 3. BREADCRUMBS DE SEGURANÇA -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-red-500/20 pb-2 text-accent">3. Proteção de Sessão e Cookies</h3>
        <p class="text-sm leading-relaxed">
          Para o nosso **Event Server**, o roubo de sessão é um risco inaceitável. Devemos configurar as flags de segurança no nível do motor <button>Zend Engine</button>.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
            <h5 class="font-bold text-primary text-xs mb-1">HttpOnly</h5>
            <p class="text-[9px] opacity-70">Impede que o JavaScript aceda ao cookie (defesa contra XSS).</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
            <h5 class="font-bold text-primary text-xs mb-1">Secure</h5>
            <p class="text-[9px] opacity-70">O cookie só viaja por conexões HTTPS encriptadas.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
            <h5 class="font-bold text-primary text-xs mb-1">SameSite=Strict</h5>
            <p class="text-[9px] opacity-70">Bloqueia o envio do cookie em pedidos vindos de outros sites (defesa contra CSRF).</p>
          </div>
        </div>
      </section>

      <div class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          🚀 Auditoria da Cadeia de Suprimentos
        </h4>
        <p class="text-sm leading-relaxed">
          Mesmo o seu código sendo perfeito, uma dependência no <button>vendor/</button> pode estar vulnerável. Como engenheiro master, deves integrar o comando <button>composer audit</button> no teu pipeline de CI/CD. Ele verifica o ficheiro <button>composer.lock</button> contra bases de dados de vulnerabilidades conhecidas (<button>CVEs</button>) em tempo real.
        </p>
      </div>

      <section class="bg-red-500/5 p-8 rounded-[2rem] border-2 border-dashed border-red-500/20 text-center">
        <h4 class="text-xl font-bold text-red-400 mb-4">🏆 O Juramento de Segurança</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Em engenharia de alta escala, não existe confiança implícita. Todo o dado vindo do exterior é considerado 'sujo'. A minha missão é higienizar a entrada, isolar a execução e auditar a saída, garantindo que o motor PHP permaneça uma fortaleza inexpugnável."
        </p>
      </section>
    </div>
  `,
};

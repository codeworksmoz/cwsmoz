
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m21",
  title: "Fase 3: Capstone: Auditoria de Segurança e Cookies",
  enableInteractive: true,
  quizId: "html-mq21",
  content: `
    <div class="space-y-12">
      <div class="bg-red-500/10 p-8 rounded-[2.5rem] border border-red-500/20 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-red-400 flex items-center gap-3">
          🔒 A Última Linha de Defesa
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Chegaste ao topo da engenharia HTML. A lição final foca na <strong>Segurança de Estado</strong>. No nível Master, entendemos que onde e como guardas os dados do utilizador define a resiliência do sistema contra ataques cibernéticos globais.
        </p>
      </div>

      <!-- 1. COOKIE SECURITY FLAGS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Cookies de Nível Bancário</h3>
        <p class="text-sm leading-relaxed">Cookies não são apenas ficheiros de texto; são tokens de identidade. Para evitar o roubo de sessão, deves utilizar as três bandeiras de segurança obrigatórias em produção.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-lg">
            <h4 class="font-bold text-red-400 mb-2">HttpOnly</h4>
            <p class="text-[10px] opacity-70 leading-relaxed">Impede que o JavaScript aceda ao cookie. Se um atacante injetar um script (XSS), ele não conseguirá ler o seu token de sessão via <code>document.cookie</code>. <strong>É a sua maior defesa contra roubo de contas.</strong></p>
          </div>
          <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-lg">
            <h4 class="font-bold text-red-400 mb-2">Secure</h4>
            <p class="text-[10px] opacity-70 leading-relaxed">Garante que o cookie só viaja em ligações encriptadas (HTTPS). <strong>⚠️ Comportamento em HTTP:</strong> Se o seu site for apenas HTTP, o browser <strong>descarta</strong> o cookie com flag Secure, impedindo que seja guardado.</p>
          </div>
          <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-lg">
            <h4 class="font-bold text-red-400 mb-2">SameSite=Strict</h4>
            <p class="text-[10px] opacity-70 leading-relaxed">O cookie nunca é enviado em pedidos vindos de outros sites. A defesa definitiva contra ataques <strong>CSRF</strong> (Cross-Site Request Forgery), impedindo que sites maliciosos façam ações em seu nome.</p>
          </div>
        </div>
      </section>

      <!-- 2. PERSISTÊNCIA DURÁVEL -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Durable Storage: Protegendo o IndexedDB</h3>
        <p class="text-sm leading-relaxed">Por padrão, o browser apaga dados locais se o disco encher (<i>Best-effort storage</i>). No nível Master, usamos a API de Persistência para evitar que dados críticos desapareçam.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">API navigator.storage.persist()</h4>
          <p class="text-xs mb-4">Esta técnica garante que os dados do <strong>IndexedDB</strong> e <strong>LocalStorage</strong> não sejam descartados automaticamente sob pressão de disco. O browser pede permissão ao utilizador ou decide baseado no uso do site.</p>
          <pre><code class="language-javascript">
if (navigator.storage && navigator.storage.persist) {
  const isPersisted = await navigator.storage.persist();
  console.log("Persistência Durável: " + (isPersisted ? "ATIVA" : "NÃO"));
}
          </code></pre>
        </div>
      </section>

      <!-- 3. COOKIES PARTICIONADOS (CHIPS) -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. CHIPS: Cookies Particionados para o Futuro</h3>
        <p class="text-sm leading-relaxed">Com o fim dos cookies de terceiros, o Google introduziu o <strong>CHIPS (Cookies Having Independent Partitioned State)</strong>. O atributo <code>Partitioned</code> permite carregar cookies em frames de forma segura e privada, isolando o estado por site de origem.</p>
        <pre><code class="language-html">
Set-Cookie: __Host-cwm-session=123; Secure; HttpOnly; SameSite=None; Partitioned;
        </code></pre>
      </section>

      <!-- 4. MATRIZ DE AUDITORIA FINAL -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. Matriz de Auditoria de Dados</h3>
        <p class="text-sm mb-4">Escolha a tecnologia correta baseada no risco e volume:</p>
        <div class="overflow-x-auto rounded-xl border border-white/10">
          <table class="w-full border-collapse text-xs">
            <thead>
              <tr class="bg-muted/50">
                <th class="p-3 text-left">Tipo de Dado</th>
                <th class="p-3 text-left">Tecnologia</th>
                <th class="p-3 text-left">Flags Obrigatórias</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-white/5">
                <td class="p-3 font-bold">Tokens de Sessão (JWT)</td>
                <td class="p-3 text-green-400">Cookies</td>
                <td class="p-3">HttpOnly, Secure, SameSite=Strict</td>
              </tr>
              <tr class="border-t border-white/5">
                <td class="p-3 font-bold">Preferências (Tema, UI)</td>
                <td class="p-3 text-blue-400">LocalStorage</td>
                <td class="p-3">Nenhuma (Dados não sensíveis)</td>
              </tr>
              <tr class="border-t border-white/5">
                <td class="p-3 font-bold">Dados Offline / Assets</td>
                <td class="p-3 text-yellow-400">IndexedDB / Cache API</td>
                <td class="p-3">Durable Storage (navigator.storage)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Graduação HTML Master</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Parabéns, Engenheiro! Você completou a trilha definitiva de HTML Master. Dominou da estrutura base à segurança bancária. O seu Projeto Master é agora um testemunho da sua excelência técnica e ética profissional."
        </p>
      </section>
    </div>
  `,
};

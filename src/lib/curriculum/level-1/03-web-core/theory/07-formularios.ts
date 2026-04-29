import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "web-t7",
  title: "Formulários: A Engenharia da Captura de Dados",
  youtubeVideoId: "u044iM9xsTM",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          📝 A Ponte entre Utilizador e Dados
        </h2>
        <p class="text-lg leading-relaxed">
          O formulário é o componente mais crítico de uma aplicação web. É através dele que o utilizador envia informações para o servidor. Um Engenheiro de Elite foca em três pilares: <strong>Acessibilidade</strong>, <strong>Validação Nativa</strong> e <strong>Otimização Mobile</strong>.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Semântica e Acessibilidade</h3>
        <p>Nunca use texto solto ao lado de um input. Use a tag <code>&lt;label&gt;</code> ligada ao input pelo atributo <code>for</code>. Isto permite que utilizadores de leitores de ecrã saibam o que digitar e aumenta a área de clique para todos.</p>
        <div class="bg-black/40 p-4 rounded-xl border font-code text-sm text-accent">
          &lt;label <span class="text-primary">for</span>="user-email"&gt;Email:&lt;/label&gt;<br/>
          &lt;input <span class="text-primary">id</span>="user-email" <span class="text-primary">type</span>="email"&gt;
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Validação Nativa (HTML5)</h3>
        <p>O browser consegue validar dados sem JavaScript. Use atributos para garantir a qualidade dos dados desde a origem:</p>
        <ul class="grid md:grid-cols-2 gap-4">
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent">required:</strong> Torna o campo obrigatório.
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent">pattern:</strong> Valida o texto usando uma Expressão Regular (Regex).
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent">min/max:</strong> Define limites para números ou datas.
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent">type:</strong> email, url, tel, number (ativa teclados específicos no mobile).
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">📱 Dica Master: inputmode</h3>
          <p class="text-sm leading-relaxed mb-4">
            Em Moçambique, onde o acesso é maioritariamente móvel, deves ditar qual teclado o utilizador vê. O atributo <code>inputmode</code> é o teu melhor amigo:
          </p>
          <ul class="space-y-2 text-xs font-mono">
            <li><span class="text-accent">inputmode="numeric"</span>: Teclado de calculadora.</li>
            <li><span class="text-accent">inputmode="tel"</span>: Teclado telefónico.</li>
            <li><span class="text-accent">inputmode="decimal"</span>: Teclado numérico com vírgula.</li>
          </ul>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Segurança: CSRF e Honeypots
          </h4>
          <p class="text-sm leading-relaxed">
            No Nível 5 (Segurança), aprenderás sobre proteção de formulários. Por agora, lembra-te: formulários que enviam dados sensíveis devem sempre usar o método <code>POST</code> e ser transmitidos via HTTPS para evitar interceção de dados.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "web-q7"
};

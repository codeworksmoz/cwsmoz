import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t13",
  title: "Fase 3: Expressões Regulares (RegEx) - O Poder do Padrão",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🔍 Detetando Padrões em Massa
        </h2>
        <p class="text-lg leading-relaxed">
          <strong>RegEx</strong> (Regular Expressions) é uma linguagem minúscula dentro da programação usada para encontrar, validar ou substituir partes de um texto baseando-se em padrões matemáticos.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Os Tijolos do RegEx</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-2">Âncoras</h4>
            <p class="text-xs"><code>^</code> Início do texto. <br/><code>$</code> Fim do texto.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-2">Quantificadores</h4>
            <p class="text-xs"><code>+</code> 1 ou mais vezes. <br/><code>*</code> 0 ou mais vezes. <br/><code>{3}</code> Exatamente 3 vezes.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Classes de Caracteres</h3>
        <p>Em vez de listar todas as letras, usamos atalhos universais:</p>
        <ul class="space-y-3 font-mono text-sm">
          <li><span class="text-primary">\\d</span> : Qualquer dígito (0-9).</li>
          <li><span class="text-primary">\\w</span> : Qualquer caractere alfanumérico (A-Z, 0-9, _).</li>
          <li><span class="text-primary">\\s</span> : Espaço em branco ou Tab.</li>
          <li><span class="text-primary">[A-Z]</span> : Apenas letras maiúsculas.</li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🏦 Exemplo: Validando um Código de Banco</h3>
          <p class="text-sm mb-4">Suponha que um código deve ter 2 letras e 4 números (ex: MZ1234):</p>
          <div class="bg-black/40 p-4 rounded-xl font-code text-accent text-center text-lg">
            /^[A-Z]{2}\\d{4}$/
          </div>
          <p class="text-[10px] mt-4 text-center opacity-60">"Início, duas letras maiúsculas, quatro números, fim."</p>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Dica de Engenharia
          </h4>
          <p class="text-sm leading-relaxed">
            RegEx é extremamente potente mas pode tornar-se ilegível se for demasiado complexo. Se a tua expressão regular parecer "ruído de rádio", comenta-a ou divide a validação em partes menores. Um código legível é sempre melhor que um código "esperto".
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "pf-t13-quiz"
};
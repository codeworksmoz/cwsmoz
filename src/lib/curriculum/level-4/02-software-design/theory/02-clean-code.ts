import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "des-t2",
  title: "Clean Code & Refactoring: A Arte da Legibilidade",
  quizId: "des-q2-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🧹 Escrevendo para Humanos</h2>
        <p class="text-lg leading-relaxed">
          Código limpo é código que parece ter sido escrito por alguém que se importa. Na engenharia master, a manutenção consome 80% do custo de um projeto. Escrever código legível é uma decisão financeira estratégica.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Regras de Ouro da Nomenclatura</h3>
        <ul class="list-disc ml-6 space-y-2 text-sm">
          <li><strong>Seja Descritivo:</strong> Evite <code>let d; // dias passados</code>. Use <code>let daysSinceCreation;</code>.</li>
          <li><strong>Evite Ruído:</strong> Se tens um objeto <code>User</code>, não chames o atributo de <code>userName</code>, chama apenas de <code>name</code>. O contexto já diz que é do user.</li>
          <li><strong>Funções são Verbos:</strong> <code>calculateTotal()</code>, <code>validateEmail()</code>.</li>
        </ul>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Funções de Elite (O Poder do Um)</h3>
        <p class="text-sm">Funções devem ser pequenas e fazer <strong>apenas uma coisa</strong>. Se uma função tem mais de 20 linhas ou 3 níveis de indentação, ela deve ser dividida.</p>
        <div class="bg-black/40 p-4 rounded-xl border border-indigo-500/20 shadow-inner">
          <h4 class="text-xs font-bold text-indigo-400 mb-2">O Princípio da Transparência:</h4>
          <p class="text-xs opacity-70">Deve ser possível ler o código como um artigo de jornal: as funções de alto nível no topo e os detalhes técnicos escondidos em funções menores em baixo.</p>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-accent">3. Refatoração: O Pagar da Dívida</h3>
        <p class="text-sm leading-relaxed">
          Refatorar não é mudar o que o código faz, mas sim como ele é estruturado. Técnicas Master:
          <br/>- <b>Extract Method:</b> Mover um bloco de código complexo para uma função com nome claro.
          <br/>- <b>Replace Conditional with Polymorphism:</b> Eliminar <code>if/else</code> gigantes usando classes derivadas ou o Strategy Pattern.
          <br/>- <b>Guard Clauses:</b> Retornar cedo (Early Return) para evitar aninhamento profundo de <code>if</code>.
        </p>
      </div>
    </div>
  `,
  quizId: "des-q2-master"
};

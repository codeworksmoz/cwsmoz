import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m10",
  title: "Security: SQLi, XSS e Injeção de Código em Python",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/10 p-6 rounded-2xl border border-red-500/20 text-red-100">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400">🛡️ Blindagem de Aplicações</h2>
        <p class="text-lg">Python facilita a produtividade, mas pode expor falhas críticas se funções como <code>eval()</code>, <code>exec()</code> ou queries SQL em string pura forem utilizadas.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">O Perigo do eval()</h3>
        <p>Executar strings como código permite que um atacante tome o controlo total do servidor. No nível Master, usamos dicionários de mapeamento ou a biblioteca <code>ast.literal_eval()</code> para segurança.</p>
        
        <h3 class="text-xl font-bold font-headline">Prevenindo SQL Injection</h3>
        <p>Nunca use F-strings em queries SQL. Utilize sempre <strong>Parameterized Queries</strong> fornecidas pelo driver do banco de dados.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs">
          cursor.execute("SELECT * FROM users WHERE id = %s", (user_id,)) <span class="text-muted-foreground">// Correto</span>
        </div>
      </div>
    </div>
  `,
  quizId: "py-mq10"
};

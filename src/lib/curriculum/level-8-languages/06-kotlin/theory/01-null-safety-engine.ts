
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "kt-m1",
  title: "Null Safety Engine: O Erro de Bilhão de Dólares",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">🛡️ Segurança em Tempo de Compilação</h2>
        <p class="text-lg">Kotlin resolve o NullPointerException (NPE) integrando o sistema de tipos com a nulabilidade. O compilador rastreia fluxos de dados para garantir segurança.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Safe Calls e Elvis Operator</h3>
        <p>Utilizamos <code>?.</code> para chamadas seguras e <code>?:</code> para valores padrão. O operador <code>!!</code> deve ser evitado, pois força a nulabilidade e pode causar crashes.</p>
        <div class="bg-card p-4 rounded-xl border font-code text-primary">
          val length = name?.length ?: 0
        </div>
      </div>
    </div>
  `,
  quizId: "kt-mq1"
};

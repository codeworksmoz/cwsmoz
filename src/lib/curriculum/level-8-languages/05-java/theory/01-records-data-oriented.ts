
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "jv-m1",
  title: "Records e Programação Orientada a Dados",
  content: `
    <div class="space-y-6">
      <div class="bg-orange-500/10 p-6 rounded-2xl border border-orange-500/20">
        <h2 class="text-2xl font-bold mb-4">📦 A Morte do Boilerplate</h2>
        <p class="text-lg leading-relaxed">
          Java Records (JEP 395) introduziram uma forma concisa de criar classes que são portadoras transparentes de dados imutáveis.
        </p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Características de um Record:</h3>
        <ul>
          <li><strong>Imutabilidade:</strong> Campos são final por padrão.</li>
          <li><strong>Componentes:</strong> Construtor canónico, acessores, equals, hashCode e toString gerados automaticamente.</li>
          <li><strong>Sem Herança:</strong> Records não podem estender outras classes (estendem java.lang.Record).</li>
        </ul>
        <div class="bg-card p-4 rounded-xl border font-code text-orange-400">
          public record User(String name, int age) {}
        </div>
      </div>
    </div>
  `,
  quizId: "jv-mq1"
};

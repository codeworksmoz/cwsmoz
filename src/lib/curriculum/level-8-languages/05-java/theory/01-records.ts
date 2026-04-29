
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "jv-m1",
  title: "Records e Programação Orientada a Dados",
  content: `
    <div class="space-y-6">
      <div class="bg-orange-500/10 p-6 rounded-2xl border border-orange-500/20">
        <h2 class="text-2xl font-bold mb-4">📦 Pilar 1: Paradigma - Imutabilidade Nativa</h2>
        <p class="text-lg">Java Records (JEP 395) introduziram uma forma concisa de criar classes que são portadoras transparentes de dados imutáveis.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Porquê usar Records?</h3>
        <ul>
          <li><strong>Eliminação de Boilerplate:</strong> Construtor, acessores, equals, hashCode e toString são gerados pelo compilador.</li>
          <li><strong>Imutabilidade:</strong> Os campos são final por padrão, incentivando o design de software mais seguro.</li>
          <li><strong>Semântica Clara:</strong> Um Record diz ao mundo: "Eu sou apenas dados".</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "jv-mq1"
};

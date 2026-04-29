import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "rs-m2",
  title: "Borrow Checker e a Gestão de Lifetimes",
  content: `
    <div class="space-y-6">
      <div class="bg-orange-500/10 p-6 rounded-2xl border border-orange-500/20">
        <h2 class="text-2xl font-bold mb-4 text-orange-400">🔍 O Vigilante Sem Piedade</h2>
        <p class="text-lg leading-relaxed">
          O <strong>Borrow Checker</strong> é o componente do compilador que garante que referências são sempre válidas e que não existem corridas de dados (data races) em tempo de execução.
        </p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>As Regras do Empréstimo</h3>
        <p>Podes ter num dado momento:</p>
        <ul>
          <li>Qualquer número de referências imutáveis (<code>&T</code>).</li>
          <li><strong>OU</strong> exatamente uma referência mutável (<code>&mut T</code>).</li>
        </ul>
        <p>Isto garante que se alguém está a ler dados, ninguém os pode mudar. Se alguém está a mudar, ninguém os pode ler. Segurança total garantida na compilação.</p>
      </div>
    </div>
  `,
  quizId: "rs-mq2"
};
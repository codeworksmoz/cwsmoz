import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "kt-m1",
  title: "Null Safety Internals: Eliminando o Erro de Bilhão de Dólares",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-primary">
          🛡️ Segurança no Sistema de Tipos
        </h2>
        <p class="text-lg leading-relaxed">
          O Kotlin não apenas "trata" nulos; ele integra a nulabilidade no seu sistema de tipos. No nível master, entendemos como o compilador utiliza o <strong>Data Flow Analysis</strong> para garantir que uma referência é segura antes de permitires o acesso.
        </p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>1. Safe Calls (?.) e Elvis Operator (?:)</h3>
        <p>Entenda como estas operações são compiladas em instruções de verificação de nulo altamente eficientes, evitando o overhead de exceções tradicionais.</p>
        
        <h3>2. Interoperabilidade com Java</h3>
        <p>Como o Kotlin lida com <strong>Platform Types (String!)</strong> vindos do Java, onde a nulabilidade é desconhecida, e como usar as anotações JSR-305 para manter a segurança entre linguagens.</p>
      </div>
    </div>
  `,
  quizId: "kt-mq1"
};

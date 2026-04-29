
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m5",
  title: "Zend Engine: Opcodes, AST e o Ciclo de Vida da Execução",
  quizId: "php-mq5",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">⚙️ Como o PHP Executa Realmente</h2>
        <p class="text-lg">O PHP não é compilado diretamente para código de máquina, mas sim para <strong>Opcodes</strong> (Operation Codes) que a Zend Virtual Machine interpreta. Entender este fluxo é vital para otimizar o tempo de resposta do servidor.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">O Pipeline de Execução</h3>
        <ol class="space-y-4">
          <li class="flex gap-4">
            <div class="w-10 h-10 rounded-lg bg-accent/20 text-accent flex items-center justify-center font-bold">1</div>
            <div>
              <p class="font-bold">Lexing & Parsing:</p>
              <p class="text-sm opacity-70">O código-fonte é transformado em Tokens e depois numa <strong>AST (Abstract Syntax Tree)</strong>.</p>
            </div>
          </li>
          <li class="flex gap-4">
            <div class="w-10 h-10 rounded-lg bg-accent/20 text-accent flex items-center justify-center font-bold">2</div>
            <div>
              <p class="font-bold">Compilation:</p>
              <p class="text-sm opacity-70">A AST é convertida em <strong>Opcodes</strong>.</p>
            </div>
          </li>
          <li class="flex gap-4">
            <div class="w-10 h-10 rounded-lg bg-accent/20 text-accent flex items-center justify-center font-bold">3</div>
            <div>
              <p class="font-bold">Execution:</p>
              <p class="text-sm opacity-70">A Zend VM executa os Opcodes. Se o <strong>OpCache</strong> estiver ativo, este passo é acelerado saltando a fase de compilação repetida.</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  `
};

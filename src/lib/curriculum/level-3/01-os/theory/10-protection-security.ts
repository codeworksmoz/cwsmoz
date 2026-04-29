import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "os-t10",
  title: "Segurança de Sistema: Modos de CPU e ACLs",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/5 p-6 rounded-2xl border border-red-500/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400 flex items-center gap-2">🛡️ Blindando a Máquina</h2>
        <p class="text-lg">Segurança de SO é sobre garantir que processos correm apenas no seu espaço e utilizam apenas os recursos autorizados.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Dual-mode Execution</h3>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong class="text-accent block">User Mode:</strong> Onde as tuas apps correm. Não podem tocar no hardware nem na memória alheia.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong class="text-accent block">Kernel Mode:</strong> Onde o SO tem poder total. Ativado apenas via System Calls seguras.
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline">2. ACLs vs Capabilities</h3>
        <p class="text-sm">Como o SO decide se podes ler um ficheiro? <br/><strong>ACL (Access Control List):</strong> Uma lista ligada a cada ficheiro com "quem pode fazer o quê". <br/><strong>Capabilities:</strong> O utilizador carrega "chaves" (tokens) que apresentam ao sistema para ganhar acesso.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">💎 Princípio do Menor Privilégio</h4>
          <p class="text-sm leading-relaxed">A regra de ouro: cada processo ou utilizador deve ter apenas os privilégios mínimos necessários para realizar a sua função. Se uma app de calculadora pede acesso aos teus contactos, o SO deve bloquear por design.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "os-q10"
};
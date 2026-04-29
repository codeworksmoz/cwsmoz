import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m19",
  title: "Gestão de Dependências: Poetry vs Pip",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📦 Determinismo de Ambiente</h2>
        <p class="text-lg">"Na minha máquina funciona" não é aceitável na engenharia de elite. <strong>Poetry</strong> garante builds reprodutíveis através de ficheiros <code>lock</code> rigorosos.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">O problema do Pip e Requirements.txt</h3>
        <p>O pip tradicional não resolve conflitos de dependências de segundo nível. O Poetry utiliza um resolvedor SAT para garantir que todas as versões são compatíveis antes de instalar.</p>
        
        <h3 class="text-xl font-bold font-headline text-accent">Virtualenvs e Isolamento</h3>
        <p>Aprenda a gerir múltiplos ambientes sem poluir o Python do sistema, utilizando o padrão moderno de <code>pyproject.toml</code> definido na PEP 518.</p>
      </div>
    </div>
  `,
  quizId: "py-mq19"
};

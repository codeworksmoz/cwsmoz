import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t21",
  title: "Princípios de Design: Escrevendo Código Imortal",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          💎 A Filosofia da Excelência
        </h2>
        <p class="text-lg leading-relaxed">
          Chegaste ao fim dos fundamentos. Mas o que separa um codificador de um <strong>Engenheiro de Software</strong> não é a sintaxe, mas sim a aplicação de princípios de design que tornam o código escalável, testável e legível.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. DRY: Don't Repeat Yourself</h3>
        <p class="text-sm">Cada peça de conhecimento ou lógica deve ter uma representação única e inequívoca dentro do sistema. Se repetires lógica, vais criar bugs em duplicado.</p>
        
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. KISS: Keep It Simple, Stupid</h3>
        <p class="text-sm">A maioria dos sistemas funciona melhor se forem mantidos simples em vez de complicados. A simplicidade deve ser um objetivo fundamental no design; a complexidade desnecessária deve ser evitada.</p>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">3. YAGNI: You Ain't Gonna Need It</h3>
        <p class="text-sm">Não escrevas código para funcionalidades que "podes precisar no futuro". Implementa apenas o que é necessário AGORA. Isto mantém a base de código leve e focada.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🏆 Introdução ao SOLID</h3>
          <p class="text-sm leading-relaxed mb-2">No Nível 4, mergulharás profundamente nestes 5 pilares, mas lembra-te já do primeiro:</p>
          <p class="p-3 bg-card border rounded-xl text-xs">
            <strong>Single Responsibility Principle:</strong> Uma classe ou função deve ter apenas uma, e apenas uma, razão para mudar. Se a tua função faz 10 coisas, ela está errada.
          </p>
        </div>

        <div class="text-center py-10">
          <p class="text-primary font-bold text-2xl animate-pulse">🎓 Parabéns, Engenheiro! Completaste os 21 temas de Programação Fundamental.</p>
          <p class="text-muted-foreground mt-2">Estás agora pronto para os desafios de algoritmos do Nível 2.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "pf-t21-quiz"
};

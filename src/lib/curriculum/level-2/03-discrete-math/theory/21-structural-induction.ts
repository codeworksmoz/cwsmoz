import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "math-t21",
  title: "Indução Estrutural e Correção de Programas",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl text-center">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🎓 A Prova da Verdade</h2>
        <p class="text-lg leading-relaxed">Chegaste ao fim do módulo de Matemática Discreta. A Indução Estrutural é a técnica usada para provar que algoritmos que operam sobre árvores, listas e grafos estão 100% corretos para qualquer entrada.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2 text-accent">Formal Verification</h3>
        <p class="text-sm">Em sistemas críticos (aviacão, medicina, bancos), não basta testar; é preciso <strong>provar matematicamente</strong> que o software não tem bugs de lógica. A indução estrutural valida as definições recursivas que aprendeste no módulo de Algoritmos.</p>
        
        <div class="bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/20 text-center mt-10">
           <p class="text-primary font-bold text-2xl animate-pulse">🎓 Módulo de Matemática Discreta Concluído!</p>
           <p class="text-muted-foreground mt-2">Dominas agora a linguagem universal da lógica e da estrutura que sustenta toda a engenharia de software.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "math-q21"
};
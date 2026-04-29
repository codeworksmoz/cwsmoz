import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "os-t21",
  title: "Fase 3: O Futuro dos SO: Unikernels e Cloud-Native OS",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl text-center">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🔮 A Próxima Fronteira</h2>
        <p class="text-lg">Chegaste ao fim do módulo de Sistemas Operativos. O futuro da engenharia aponta para sistemas que eliminam as camadas desnecessárias para atingir performance de silício puro na nuvem.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. Unikernels</h3>
        <p class="text-sm leading-relaxed">Em vez de um SO completo com 50 serviços inúteis, o Unikernel compila apenas a tua aplicação e os drivers mínimos necessários num único binário bootável. O resultado é um "SO" de 5MB que sobe em milissegundos e tem uma superfície de ataque minúscula.</p>

        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2 text-accent">2. eBPF: O Super-Poder do Linux</h3>
        <p class="text-sm leading-relaxed">Permite injetar código dinâmico dentro do Kernel sem reiniciar ou recompilar. É o futuro da monitorização, segurança de rede e performance em tempo real na nuvem.</p>
        
        <div class="bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/20 text-center mt-10">
           <p class="text-primary font-bold text-2xl animate-pulse">🎓 Nível 3 - Módulo de Sistemas Operativos Concluído!</p>
           <p class="text-muted-foreground mt-2">Você agora domina as entranhas do computador. Próxima paragem: <strong>Networking</strong>.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "os-q21"
};
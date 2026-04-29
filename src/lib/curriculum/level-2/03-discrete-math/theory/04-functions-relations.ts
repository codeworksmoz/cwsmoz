import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "math-t4",
  title: "Funções e Relações: Mapeamentos e Equivalência",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🔗 Conectando Domínios</h2>
        <p class="text-lg leading-relaxed">
          Relações e Funções definem como os dados se transformam e se ligam. Na engenharia, isto traduz-se em chaves estrangeiras, assinaturas de métodos e transformações funcionais (Map).
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Tipologia de Funções</h3>
        <ul class="space-y-4">
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 font-bold">Inj</div>
            <div>
              <p class="font-bold text-sm">Injetora (One-to-One):</p>
              <p class="text-xs text-muted-foreground">Elementos diferentes do domínio mapeiam para elementos diferentes no contradomínio. Vital para funções Hash sem colisões perfeitas.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5">
            <div class="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 font-bold">Bij</div>
            <div>
              <p class="font-bold text-sm">Bijetora (Invertível):</p>
              <p class="text-xs text-muted-foreground">É injetora e sobrejetora ao mesmo tempo. Permite a <strong>Criptografia Simétrica</strong>: podes codificar e descodificar de volta à forma original sem perda.</p>
            </div>
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline">2. Relações de Equivalência</h3>
        <p class="text-sm">Uma relação é de equivalência se for Reflexiva, Simétrica e Transitiva. Na computação, usamos isto para agrupar utilizadores por categorias ou para otimização de compiladores através de análise de alias.</p>
      </div>
    </div>
  `,
  quizId: "math-q4"
};

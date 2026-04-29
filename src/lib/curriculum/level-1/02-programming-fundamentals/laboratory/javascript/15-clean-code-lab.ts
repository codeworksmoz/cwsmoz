import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p15-js",
  language: "javascript",
  title: "Missão: Refatoração de Elite",
  description: "Transforme um código confuso em código de nível sénior usando princípios DRY e semântica.",
  statement: "Refatorize a função para usar nomes semânticos e remover repetições.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "8hly31xKli0",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🧹 Operação Clean Code</h3>
      <p>O código abaixo é funcional, mas amador. A tua missão é limpá-lo.</p>
      
      <div class="bg-red-500/10 p-3 rounded border border-red-500/20 mb-4">
        <p class="text-[10px] font-mono leading-tight">
          // CÓDIGO AMADOR:<br/>
          let a = 10;<br/>
          let b = 20;<br/>
          console.log(a + b);<br/>
          console.log(a + b + 5);
        </p>
      </div>

      <p class="text-xs leading-relaxed">
        <strong>Instruções de Limpeza (JS):</strong>
        <br/>1. Substitui <code>a</code> e <code>b</code> por nomes semânticos: <code>precoBase</code> e <code>imposto</code>.
        <br/>2. Cria uma variável <code>total</code> para guardar <code>precoBase + imposto</code> (Princípio DRY).
        <br/>3. Mostra o <code>total</code> no terminal.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Usar nome precoBase", test: "const precoBase =" },
    { id: "obj2", description: "Usar nome imposto", test: "const imposto =" },
    { id: "obj3", description: "Criar variável total (DRY)", test: "const total =" }
  ]
};

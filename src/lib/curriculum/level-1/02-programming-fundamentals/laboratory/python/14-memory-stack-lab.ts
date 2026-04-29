import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p14-py",
  language: "python",
  title: "Missão: Gestão de Referências Pythonic",
  description: "Entenda como o Python gere a memória através de referências a objetos.",
  statement: "Declare um dado simples e uma lista complexa, e imprima os seus tipos.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "TQvD-Uq86oY",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🐍 Referências em Python</h3>
      <p>Em Python, "tudo é um objeto", mas a forma como os dados são guardados segue a lógica de eficiência de Stack vs Heap.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          valor = 42 <span class="text-muted-foreground"># Imutável</span><br/>
          lista = [1, 2, 3] <span class="text-muted-foreground"># Mutável (Heap)</span><br/>
          print(type(valor))
        </p>
      </div>

      <p class="text-xs">
        <strong>Instruções de Construção:</strong>
        <br/>1. Cria <code>xp = 500</code>.
        <br/>2. Cria <code>skills = ["Python", "Git"]</code>.
        <br/>3. Usa <code>print(xp)</code> e <code>print(skills)</code> para validar no terminal.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Definir valor simples", test: "xp = 500" },
    { id: "obj2", description: "Definir lista (Heap)", test: "skills = [" },
    { id: "obj3", description: "Usar print() para validar", test: "print" }
  ]
};

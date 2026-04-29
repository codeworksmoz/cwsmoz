import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p4-py",
  language: "python",
  title: "Missão: Filtro de Acesso Pythonic",
  description: "Use a sintaxe limpa do Python para tomar decisões de segurança.",
  statement: "Crie um sistema que valide se um utilizador pode aceder a uma área VIP.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "gI-qXk7XojA",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🐍 Decisão em Python</h3>
      <p>Em Python, a lógica é escrita como se fosse inglês. Usamos <code>if</code> e a palavra <code>and</code> para combinar condições.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia (Cuidado com a Indentação!):</p>
        <p class="text-[11px] font-mono leading-relaxed">
          <span class="text-primary">if</span> idade >= 18 <span class="text-accent">and</span> tem_convite:<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-primary">print</span>("Acesso Autorizado")<br/>
          <span class="text-primary">else</span>:<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-primary">print</span>("Acesso Negado")
        </p>
      </div>

      <p class="text-xs">
        <strong>Instruções de Construção:</strong>
        <br/>1. Cria <code>idade = 20</code>.
        <br/>2. Cria <code>tem_convite = True</code> (T maiúsculo!).
        <br/>3. Usa o <code>if</code> com <code>and</code> para validar.
        <br/>4. Não esqueças os <code>:</code> no final das linhas de condição.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Usar if/else com and", test: "if" },
    { id: "obj2", description: "Respeitar os dois pontos (:)", test: ":" },
    { id: "obj3", description: "Usar print() para o resultado", test: "print" }
  ]
};

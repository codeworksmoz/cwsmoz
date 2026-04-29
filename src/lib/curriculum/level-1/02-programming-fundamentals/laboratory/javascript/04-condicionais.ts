import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p4-js",
  language: "javascript",
  title: "Missão: Controle de Fronteira Digital",
  description: "Aprenda a criar filtros de segurança baseados em condições múltiplas.",
  statement: "Crie um sistema que valide se um utilizador pode aceder a uma área VIP.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "gI-qXk7XojA",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🚦 Lógica de Decisão</h3>
      <p>Num sistema real, as permissões dependem de vários fatores. Vamos usar o <code>if</code> com o operador <code>&&</code> (AND) para verificar duas condições ao mesmo tempo.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          <span class="text-primary">if</span> (idade >= 18 <span class="text-accent">&&</span> temConvite) { <br/>
          &nbsp;&nbsp;<span class="text-primary">console.log</span>("Acesso Autorizado"); <br/>
          } <span class="text-primary">else</span> { <br/>
          &nbsp;&nbsp;<span class="text-primary">console.log</span>("Acesso Negado"); <br/>
          }
        </p>
      </div>

      <p class="text-xs">
        <strong>Instruções de Construção:</strong>
        <br/>1. Cria a variável <code>idade</code> com valor 20.
        <br/>2. Cria a variável <code>temConvite</code> com valor verdadeiro (true).
        <br/>3. Usa o <code>if</code> para verificar se a idade é maior ou igual a 18 E se tem convite.
        <br/>4. Se for verdade, exibe "Acesso Autorizado", senão exibe "Acesso Negado".
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Usar if/else com &&", test: "if" },
    { id: "obj2", description: "Validar idade e convite", test: "&&" },
    { id: "obj3", description: "Exibir 'Acesso Autorizado' no terminal", test: "console.log" }
  ]
};

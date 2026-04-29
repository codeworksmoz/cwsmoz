import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p3-js",
  language: "javascript",
  title: "Missão: Limpeza e Mensagens de Elite",
  description: "Aprenda a limpar dados do usuário e criar mensagens elegantes.",
  statement: "Limpe os espaços extras de um nome e crie uma saudação profissional.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "v4cd1O4zkGw",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">📝 Higienização e Interpolação</h3>
      <p>Muitas vezes, os utilizadores deixam espaços sem querer ao digitar nomes. Vamos limpar isso e criar uma mensagem usando a técnica de <b>Backticks (crases)</b>.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          <span class="text-primary">const</span> entrada = "  MozDev  "; <br/>
          <span class="text-primary">const</span> limpo = entrada.<span class="text-accent">trim()</span>; <br/>
          <span class="text-primary">const</span> msg = <span class="text-green-400">\`Bem-vindo, \${limpo}!\`</span>;
        </p>
      </div>

      <p class="text-xs">
        <strong>Instruções de Construção:</strong>
        <br/>1. Cria a variável <code>entrada</code> com o valor "  MozDev  " (com espaços).
        <br/>2. Cria a variável <code>user</code> usando <code>entrada.trim()</code>.
        <br/>3. Cria a <code>mensagem</code> usando as crases ( \` ) e injeta o \${user}.
        <br/>4. Usa <code>console.log(mensagem)</code> para ver o resultado limpo.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Usar .trim() para limpar a entrada", test: ".trim()" },
    { id: "obj2", description: "Usar backticks e ${user}", test: "${" },
    { id: "obj3", description: "Mostrar mensagem no terminal", test: "console.log(mensagem)" }
  ]
};

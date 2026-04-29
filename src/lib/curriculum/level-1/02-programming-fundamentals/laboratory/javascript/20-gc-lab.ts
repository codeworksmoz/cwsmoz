import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p20-js",
  language: "javascript",
  title: "Missão: Detetor de Fugas de Memória",
  description: "Aprenda a libertar memória limpando referências a objetos massivos.",
  statement: "Simule a limpeza de uma cache de dados definindo a variável como nula para permitir a ação do Garbage Collector.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "TQvD-Uq86oY",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🧹 Ajudando o Faxineiro</h3>
      <p>O Garbage Collector só apaga o que não é mais "alcançável". Se tens uma variável global a segurar um dado, ele nunca será apagado.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          let cache = { data: "Gigas de info" }; <br/>
          <span class="text-muted-foreground">// ... uso o cache ...</span> <br/>
          cache = <span class="text-accent">null</span>; <span class="text-muted-foreground">// Agora o GC pode agir!</span>
        </p>
      </div>

      <p class="text-xs">
        <strong>Instruções de Construção:</strong>
        <br/>1. Cria a variável <code>dadosPesados</code> com um objeto contendo <code>conteudo: "..."</code>.
        <br/>2. Simula o processamento com um <code>console.log</code>.
        <br/>3. Atribui <code>null</code> à variável <code>dadosPesados</code> para sinalizar ao sistema que a memória pode ser libertada.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Criar variável com let", test: "let dadosPesados =" },
    { id: "obj2", description: "Atribuir null no final", test: "dadosPesados = null" },
    { id: "obj3", description: "Validar a intenção de limpeza", test: "null" }
  ]
};

import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p16-py",
  language: "python",
  title: "Missão: Corrotinas Pythonic",
  description: "Aprenda a orquestrar tarefas assíncronas no Python.",
  statement: "Crie uma corrotina que simule o processamento de um ficheiro em background.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "8aGhZQkoFbQ",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🐍 AsyncIO no Python</h3>
      <p>No Python, funções assíncronas são chamadas de <strong>Corrotinas</strong>. Usamos o pacote <code>asyncio</code> para lidar com o loop de eventos.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          <span class="text-primary">import</span> asyncio <br/><br/>
          <span class="text-primary">async def</span> principal(): <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;print("Aguardando...") <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-primary">await</span> asyncio.sleep(1) <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;print("Pronto!")
        </p>
      </div>

      <p class="text-xs">
        <strong>Instruções de Construção (Python):</strong>
        <br/>1. Importa o módulo <code>asyncio</code>.
        <br/>2. Define a corrotina com <code>async def processar():</code>.
        <br/>3. Dentro dela, usa <code>print("Processando...")</code>.
        <br/>4. Usa <code>await asyncio.sleep(0)</code> para simular a pausa assíncrona.
        <br/>5. Imprime <code>"Sucesso"</code>.
        <br/>6. No final, executa a corrotina com <code>asyncio.run(processar())</code>.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Importar o módulo asyncio", test: "import asyncio" },
    { id: "obj2", description: "Definir async def processar()", test: "async def processar" },
    { id: "obj3", description: "Executar com asyncio.run()", test: "asyncio.run" }
  ]
};

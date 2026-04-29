import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p7-py",
  language: "python",
  title: "Missão: Inventário Pythonic",
  description: "Domine as listas em Python para gestão de dados.",
  statement: "Crie uma lista de produtos e manipule o seu conteúdo.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "v4cd1O4zkGw",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🐍 Listas em Python</h3>
      <p>Em Python, as listas são dinâmicas e muito poderosas. Vamos organizar os equipamentos da nossa startup.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          produtos = ["Teclado", "Rato"] <br/>
          produtos.<span class="text-accent">append</span>("Monitor") <span class="text-muted-foreground"># Adiciona ao fim</span><br/>
          <span class="text-primary">print</span>(len(produtos)) <span class="text-muted-foreground"># Mostra o tamanho</span>
        </p>
      </div>

      <p class="text-xs">
        <strong>Instruções de Construção:</strong>
        <br/>1. Cria a lista <code>produtos</code> com "Laptop" e "Mouse".
        <br/>2. Usa o método <code>.append()</code> para adicionar "Monitor".
        <br/>3. Usa <code>print()</code> para exibir o <strong>primeiro</strong> item da lista.
        <br/>4. Exibe o tamanho total usando a função <code>len(produtos)</code>.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Criar lista com Laptop e Mouse", test: "[\"Laptop\", \"Mouse\"]" },
    { id: "obj2", description: "Usar .append('Monitor')", test: ".append(\"Monitor\")" },
    { id: "obj3", description: "Aceder ao índice 0", test: "produtos[0]" },
    { id: "obj4", description: "Usar len(produtos)", test: "len(produtos)" }
  ]
};

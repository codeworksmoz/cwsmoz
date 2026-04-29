import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p7-js",
  language: "javascript",
  title: "Missão: Gestor de Inventário de Elite",
  description: "Aprenda a organizar e manipular coleções de dados em massa.",
  statement: "Crie um sistema de inventário, adicione itens e valide o estado da coleção.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "v4cd1O4zkGw",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">📦 Manipulando Listas</h3>
      <p>Um engenheiro raramente trabalha com um único dado. Trabalhamos com listas. Vamos construir um inventário para a Codworks Moz.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          <span class="text-primary">const</span> lista = ["Teclado", "Rato"]; <br/>
          lista.<span class="text-accent">push</span>("Monitor"); <span class="text-muted-foreground">// Adiciona ao fim</span><br/>
          <span class="text-primary">console.log</span>(lista.length); <span class="text-muted-foreground">// Mostra o tamanho</span>
        </p>
      </div>

      <p class="text-xs">
        <strong>Instruções de Construção:</strong>
        <br/>1. Cria um array <code>produtos</code> com "Laptop" e "Mouse".
        <br/>2. Usa o método <code>.push()</code> para adicionar "Monitor" ao final da lista.
        <br/>3. Usa <code>console.log()</code> para exibir o <strong>primeiro</strong> item da lista (índice 0).
        <br/>4. Exibe no terminal o tamanho total da lista usando <code>produtos.length</code>.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Criar array com Laptop e Mouse", test: "[\"Laptop\", \"Mouse\"]" },
    { id: "obj2", description: "Usar .push('Monitor')", test: ".push(\"Monitor\")" },
    { id: "obj3", description: "Exibir o primeiro item (índice 0)", test: "produtos[0]" },
    { id: "obj4", description: "Exibir o tamanho da lista", test: "produtos.length" }
  ]
};

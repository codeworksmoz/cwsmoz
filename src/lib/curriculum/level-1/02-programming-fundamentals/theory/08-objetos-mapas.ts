import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t8",
  title: "Objetos e Dicionários: Estruturando a Realidade",
  youtubeVideoId: "Z5JC9Ve1sfI",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🏷️ O Poder da Chave e Valor
        </h2>
        <p class="text-lg leading-relaxed">
          Enquanto os arrays organizam dados por <strong>posição</strong> (onde o índice é um número), os <strong>Objetos</strong> (ou Dicionários em Python) organizam os dados por <strong>nome</strong>. Esta é a estrutura fundamental para representar entidades do mundo real, como utilizadores, produtos ou transações bancárias.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Modelagem Semântica</h3>
        <p>Imagina representar um carro. Num array, seria apenas <code>["Toyota", "Azul", 2023]</code>. Sem contexto, o índice 1 pode significar qualquer coisa. Num objeto, a semântica é clara:</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm shadow-inner space-y-2">
          <p class="text-accent">{</p>
          <p>&nbsp;&nbsp;marca: <span class="text-green-400">"Toyota"</span>,</p>
          <p>&nbsp;&nbsp;cor: <span class="text-green-400">"Azul"</span>,</p>
          <p>&nbsp;&nbsp;ano: <span class="text-green-400">2023</span></p>
          <p class="text-accent">}</p>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Acesso a Dados: Ponto vs Parênteses</h3>
        <p>Existem duas formas principais de extrair informação de um objeto:</p>
        <ul class="space-y-4">
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5">
            <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 font-bold">.</div>
            <div>
              <p class="font-bold text-sm">Notação de Ponto (Dot Notation):</p>
              <p class="text-xs text-muted-foreground">A mais comum e legível. <code>carro.marca</code>. Usada quando já sabes o nome da chave.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5">
            <div class="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 font-bold">[]</div>
            <div>
              <p class="font-bold text-sm">Notação de Colchetes (Bracket Notation):</p>
              <p class="text-xs text-muted-foreground">Permite usar variáveis para aceder a chaves dinamicamente. <code>carro["marca"]</code>.</p>
            </div>
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🚀 Performance: Tabelas Hash</h3>
          <p class="text-sm leading-relaxed">
            Por baixo do capô, os objetos funcionam como <strong>Tabelas Hash</strong>. O computador não precisa de "percorrer" o objeto para encontrar um valor; ele calcula a posição exata da chave. Isto torna a busca num objeto extremamente rápida (O(1)), independentemente do número de propriedades.
          </p>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            💎 Dica de Engenharia: JSON
          </h4>
          <p class="text-sm leading-relaxed">
            O formato <strong>JSON</strong> (JavaScript Object Notation), que é o padrão universal de comunicação na internet, baseia-se exatamente nesta estrutura de objetos. Dominar objetos é dominar a troca de dados entre sistemas modernos.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "pf-t8-quiz"
};

import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m20",
  title: "Microdata, JSON-LD e SEO de Dados",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🏷️ A Web de Dados Estruturados</h2>
        <p class="text-lg">Dados estruturados permitem que fales diretamente com os robôs do Google. É assim que obténs as "estrelas", "preços" e "instruções" diretamente nos resultados de busca.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">JSON-LD: O Padrão de Elite</h3>
        <p>Diferente do Microdata (que polui o HTML com atributos), o JSON-LD é um bloco de script separado que descreve os dados seguindo o vocabulário da <strong>Schema.org</strong>.</p>
        <div class="bg-black/40 p-6 rounded-xl border font-code text-xs text-accent space-y-1">
          <p><span class="text-primary">&lt;script</span> <span class="text-accent">type</span>=<span class="text-green-400">"application/ld+json"</span><span class="text-primary">&gt;</span></p>
          <p>{</p>
          <p>&nbsp;&nbsp;<span class="text-green-400">"@context"</span>: <span class="text-green-400">"https://schema.org"</span>,</p>
          <p>&nbsp;&nbsp;<span class="text-green-400">"@type"</span>: <span class="text-green-400">"Course"</span>,</p>
          <p>&nbsp;&nbsp;<span class="text-green-400">"name"</span>: <span class="text-green-400">"Formação de Engenharia Master"</span></p>
          <p>}</p>
          <p><span class="text-primary">&lt;/script&gt;</span></p>
        </div>

        <h3 class="text-xl font-bold font-headline">Rich Snippets e Grafo de Conhecimento</h3>
        <p>Ao implementar dados estruturados corretamente, o seu site pode aparecer no painel lateral do Google (Knowledge Graph), aumentando a autoridade da sua marca digital.</p>
      </div>
    </div>
  `,
  quizId: "html-mq20"
};

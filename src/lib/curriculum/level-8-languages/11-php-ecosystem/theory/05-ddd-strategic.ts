import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-eco-t5",
  title: "Fase 2: DDD Estratégico: Bounded Contexts e Linguagem Ubíqua",
  youtubeVideoId: "fS_O7U47M6c",
  enableInteractive: true,
  quizId: "php-eco-mq5",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          ⬢ O Domínio como Centro da Verdade
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <strong>Domain-Driven Design (DDD)</strong>, introduzido por Eric Evans, é uma abordagem de design de software focada em problemas complexos, onde a estrutura e a linguagem do código devem coincidir com o domínio de negócio. No nível Master, utilizamos o design estratégico para evitar que o sistema se transforme num <button>Big Ball of Mud</button>.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Ubiquitous Language (Linguagem Ubíqua)</h3>
        <p class="text-sm leading-relaxed">
          A falha número 1 em projetos de larga escala é a tradução errada entre o que o cliente quer e o que o engenheiro constrói. A <button>Linguagem Ubíqua</button> exige que o vocabulário usado nas reuniões de negócio seja o <strong>exatamente o mesmo</strong> usado nos nomes de classes, métodos e tabelas da base de dados.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
             <h4 class="font-bold text-red-400 text-xs mb-2">Amador ❌</h4>
             <p class="text-[10px] opacity-70">O cliente diz "Despachar Encomenda", mas no código temos <code>updateStatus(2)</code> ou <code>setFlag(true)</code>.</p>
          </div>
          <div class="p-4 bg-green-500/5 border border-green-500/20 rounded-xl">
             <h4 class="font-bold text-green-400 text-xs mb-2">Elite ✅</h4>
             <p class="text-[10px] opacity-70">O código reflete a intenção: <code>$order->dispatch()</code>. O código torna-se auto-documentado.</p>
          </div>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Bounded Contexts (Contextos Delimitados)</h3>
        <p class="text-sm leading-relaxed">
          Tentar criar um modelo único para toda a empresa é um erro fatal. Um "Produto" no contexto de <strong>Vendas</strong> (preço, desconto, stock) é diferente de um "Produto" no contexto de <strong>Logística</strong> (peso, dimensões, armazém). No nível Master, dividimos o hexágono em contextos isolados com as suas próprias linguagens e modelos.
        </p>

        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <h4 class="font-bold text-primary text-xs mb-4 uppercase text-center">Context Mapping</h4>
           <p class="text-xs leading-relaxed text-center italic opacity-70">
             "Cada contexto é um reino independente. Para eles comunicarem, utilizamos <button>Context Mapping</button> através de <button>Shared Kernels</button> ou <button>Anti-Corruption Layers</button>."
           </p>
        </div>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          🚀 Porquê é vital para o nosso Event Server?
        </h4>
        <p class="text-sm leading-relaxed">
          O nosso servidor processa eventos de diferentes origens. Aplicar o DDD estratégico permite-nos isolar o contexto de <strong>Ingestão de Dados</strong> do contexto de <strong>Audit Log</strong>, garantindo que mudanças num não quebrem a integridade do outro.
        </p>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 O Papel do Arquiteto Master</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "O seu trabalho não é apenas escrever código eficiente, mas garantir que o código seja uma tradução fiel do negócio. Se o domínio muda e o seu código não muda o nome, você está a criar <button>Débito Técnico</button> cognitivo."
        </p>
      </section>
    </div>
  `
};

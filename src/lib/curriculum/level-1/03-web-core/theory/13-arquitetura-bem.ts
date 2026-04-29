import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "web-t13",
  title: "Arquitetura BEM e CSS Limpo: Escala e Manutenibilidade",
  youtubeVideoId: "u044iM9xsTM",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🏗️ Organizando o Caos
        </h2>
        <p class="text-lg leading-relaxed">
          Num projeto profissional com milhares de linhas de CSS, a maior ameaça é a especificidade e os nomes de classes genéricos que colidem. A metodologia <strong>BEM (Block, Element, Modifier)</strong> é a solução padrão da indústria para criar componentes isolados e escaláveis.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. A Anatomia do BEM</h3>
        <p>A nomenclatura segue um padrão rigoroso que explica a função de cada classe no DOM:</p>
        <ul class="space-y-4">
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent">Block (Bloco):</strong> A entidade independente. <br/>Ex: <code>.card</code>, <code>.navbar</code>, <code>.footer</code>.
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent">Element (Elemento):</strong> Uma parte do bloco que não tem significado sozinha. Usa-se double underscore <code>__</code>. <br/>Ex: <code>.card__title</code>, <code>.navbar__item</code>.
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent">Modifier (Modificador):</strong> Uma variação de estado ou aparência. Usa-se double dash <code>--</code>. <br/>Ex: <code>.card--featured</code>, <code>.btn--loading</code>.
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">💎 Por que funciona?</h3>
          <p class="text-sm leading-relaxed mb-4">
            BEM força o uso de seletores de classe única (especificidade baixa). Isto significa que nunca precisas de usar <code>!important</code> e podes mover um bloco para qualquer parte do site sem que o seu estilo mude ou quebre.
          </p>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2">🚀 Regra de Ouro: CSS Append-only</h4>
          <p class="text-sm leading-relaxed">
            Muitas empresas têm medo de apagar CSS antigo. Usando BEM, tu sabes exatamente a que componente cada classe pertence. Se o bloco <code>.card</code> for removido do HTML, podes apagar todas as classes que começam por <code>.card</code> no CSS com segurança total.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "web-q13"
};

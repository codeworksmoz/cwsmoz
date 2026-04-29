import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t8",
  title: "Arquitetura de Informação: Organizando o Conteúdo",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">🗺️ O Mapa do Site</h2>
        <p class="text-lg leading-relaxed">A Arquitetura de Informação (IA) foca em organizar o conteúdo de forma a que os utilizadores o encontrem facilmente. É sobre rotulagem, navegação e sistemas de busca.</p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>Componentes da IA:</h3>
        <ul>
          <li><strong>Sistemas de Organização:</strong> Como agrupamos a informação (ex: cronológico, alfabético, tópico).</li>
          <li><strong>Sistemas de Rotulagem:</strong> Como chamamos às coisas para serem claras para o utilizador.</li>
          <li><strong>Sistemas de Navegação:</strong> Menus, breadcrumbs e footers que guiam o utilizador.</li>
          <li><strong>Sistemas de Busca:</strong> Como o utilizador pesquisa dentro do produto.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "hci-q8"
};
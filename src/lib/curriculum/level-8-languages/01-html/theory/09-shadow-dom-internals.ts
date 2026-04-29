
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m9",
  title: "Shadow DOM Internals e Encapsulamento de Elite",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 font-headline">
          🌑 O Escudo do Componente
        </h2>
        <p class="text-lg leading-relaxed">
          O Shadow DOM cria uma barreira de renderização que impede o vazamento de estilos e scripts. É a tecnologia que permite que o seu componente tenha um CSS <code>p { color: red; }</code> sem afetar nenhum outro parágrafo do site.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Shadow Root: Open vs Closed</h3>
        <p>Ao criar uma sombra, decides o nível de isolamento. O modo <strong>Open</strong> permite acesso via JS exterior através da propriedade <code>shadowRoot</code>. O modo <strong>Closed</strong> é raramente usado mas oferece blindagem total.</p>
        <div class="bg-black/40 p-5 rounded-xl font-code text-xs border border-white/5 space-y-2">
          <p><span class="text-muted-foreground">// Modo Open: Padrão para Design Systems</span></p>
          <p><span class="text-accent">this</span>.<span class="text-primary">attachShadow</span>({ mode: <span class="text-green-400">'open'</span> });</p>
        </div>

        <h3 class="text-xl font-bold font-headline">Encapsulamento de Estilo e Eventos</h3>
        <ul class="list-disc ml-6 space-y-2">
          <li><strong>Isolamento de ID:</strong> Podes ter múltiplos elementos com <code>id="header"</code> se cada um estiver na sua própria sombra.</li>
          <li><strong>Event Retargeting:</strong> Eventos que ocorrem dentro da sombra parecem vir do componente pai quando vistos de fora, preservando o encapsulamento.</li>
        </ul>
        
        <h3 class="text-xl font-bold font-headline text-accent">Estilização Externa (CSS Parts)</h3>
        <p>Como permitir que o utilizador do seu componente mude a cor de um botão interno? Use o atributo <code>part</code> no HTML interno e o pseudo-elemento <code>::part()</code> no CSS externo.</p>
      </div>
    </div>
  `,
  quizId: "html-mq9"
};

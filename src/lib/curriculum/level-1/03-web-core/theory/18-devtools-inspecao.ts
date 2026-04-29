import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "web-t18",
  title: "Browser DevTools: A Oficina do Engenheiro",
  youtubeVideoId: "Z5JC9Ve1sfI",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🔍 Olhando através das Paredes
        </h2>
        <p class="text-lg leading-relaxed">
          As **DevTools** (Ferramentas do Desenvolvedor) integradas nos browsers modernos (Chrome, Firefox, Edge) são o laboratório onde debugamos estilos, monitorizamos a rede e testamos a performance em tempo real.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Painel Elements</h3>
        <p>Permite visualizar a árvore DOM e mudar o CSS "ao vivo". É vital para ajustar margens e cores sem precisar de atualizar o código no editor em cada teste.</p>
        
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. A Console: O Diário de Bordo</h3>
        <p>Onde vês erros de JavaScript e interages diretamente com a memória da página. Se algo não funciona, a consola é o primeiro lugar onde deves olhar.</p>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">3. Network Tab: O Radar de Tráfego</h3>
        <p>Monitoriza cada ficheiro que o site descarrega. Podes ver quanto tempo cada imagem demora a chegar e identificar se o servidor está lento (TTFB).</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">🛠️ Atalhos de Sobrevivência:</h4>
          <ul class="space-y-2 text-xs font-mono">
            <li><span class="text-accent">F12</span> ou <span class="text-accent">Ctrl+Shift+I</span>: Abre as DevTools.</li>
            <li><span class="text-accent">Ctrl+Shift+C</span>: Ativa o seletor de elementos.</li>
            <li><span class="text-accent">Ctrl+Shift+M</span>: Ativa o modo de visualização mobile.</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  quizId: "web-q18"
};

import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "dt-t14",
  title: "NPM Scripts: O Motor de Automação do Projeto",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          ⚡ Comandos Personalizados
        </h2>
        <p class="text-lg">O campo <code>scripts</code> no seu package.json é onde defines os super-poderes do teu projeto. Ele permite criar atalhos para tarefas complexas de build, teste e deploy.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">1. Comandos de Ciclo de Vida</h3>
        <p class="text-sm">Existem scripts especiais como <code>preinstall</code> ou <code>postbuild</code> que correm sozinhos antes ou depois de certas ações, garantindo que a casa está sempre arrumada.</p>
        
        <div class="bg-black/40 p-4 rounded-xl border font-code text-xs text-accent">
          "scripts": { <br/>
          &nbsp;&nbsp;"dev": "vite", <br/>
          &nbsp;&nbsp;"test:ci": "jest --coverage", <br/>
          &nbsp;&nbsp;"lint": "eslint . --fix" <br/>
          }
        </div>

        <h3 class="text-xl font-bold font-headline">2. Encadeamento de Comandos</h3>
        <p class="text-sm">Usa <code>&&</code> para correr comandos em sequência (se um falhar, o próximo não corre) ou <code>&</code> para os correr em paralelo. É o segredo para pipelines locais eficientes.</p>
      </div>
    </div>
  `,
  quizId: "dt-q14"
};
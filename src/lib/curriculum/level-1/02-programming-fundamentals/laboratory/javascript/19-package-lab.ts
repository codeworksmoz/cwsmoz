import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p19-js",
  language: "javascript",
  title: "Missão: O Arquiteto de Dependências",
  description: "Configure o manifesto do seu projeto e garanta a estabilidade de versões.",
  statement: "Crie um objeto que simule a secção 'dependencies' de um package.json, definindo uma versão exata para uma biblioteca fictícia.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "8aGhZQkoFbQ",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">📦 Gestão de Manifesto</h3>
      <p>Num projeto real, tu dizes ao motor do NPM quais ferramentas precisas. Vamos simular a configuração de um sistema de logs.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia (JSON Config):</p>
        <p class="text-[11px] font-mono leading-relaxed">
          { <br/>
          &nbsp;&nbsp;"name": "meu-app", <br/>
          &nbsp;&nbsp;"dependencies": { <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;"cwm-logger": "1.5.0" <br/>
          &nbsp;&nbsp;} <br/>
          }
        </p>
      </div>

      <p class="text-xs">
        <strong>Instruções de Construção:</strong>
        <br/>1. Cria a constante <code>manifesto</code>.
        <br/>2. Atribui um objeto com a chave <code>dependencies</code>.
        <br/>3. Dentro de dependencies, adiciona o pacote <code>"moz-auth"</code> com a versão exata <code>"2.0.0"</code>.
        <br/>4. Exibe o manifesto no terminal.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Criar chave 'dependencies'", test: "\"dependencies\":" },
    { id: "obj2", description: "Definir versão exata '2.0.0'", test: "\"2.0.0\"" },
    { id: "obj3", description: "Exibir o objeto completo", test: "console.log" }
  ]
};

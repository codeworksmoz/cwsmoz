import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "dt-t19",
  title: "RegEx Mastery: Ferramentas de Validação Visual",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🕵️ Caçando Padrões com Precisão
        </h2>
        <p class="text-lg">Escrever Expressões Regulares (RegEx) complexas pode ser frustrante. Engenheiros de elite usam ferramentas de visualização para testar e explicar os seus padrões em tempo real.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">1. Regex101 e RegExr</h3>
        <p class="text-sm">Estes sites permitem-te colar um texto e ver exatamente qual parte da RegEx está a capturar qual parte da string, oferecendo explicações detalhadas de cada símbolo (token) usado.</p>
        
        <h3 class="text-xl font-bold font-headline">2. Debugging de RegEx no VS Code</h3>
        <p class="text-sm">O motor de pesquisa do VS Code suporta RegEx nativamente. Podes usá-lo para encontrar e substituir padrões em milhares de ficheiros de uma só vez (ex: mudar o formato de todas as datas no projeto).</p>

        <div class="bg-black/40 p-4 rounded-xl border font-code text-xs text-accent">
          ^([a-z0-9_\\.-]+)@([\\da-z\\.-]+)\\.([a-z\\.]{2,6})$ <br/>
          # Validação universal de Email: um desafio clássico de RegEx.
        </div>
      </div>
    </div>
  `,
  quizId: "dt-q19"
};
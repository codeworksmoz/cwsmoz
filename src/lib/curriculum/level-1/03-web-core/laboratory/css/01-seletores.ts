import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "web-p2-css",
  language: "css",
  title: "Missão Arquiteto: Estilizando a Fundação",
  description: "Aprenda a aplicar a lógica de seletores e herança no projeto real.",
  statement: "Estilize os parágrafos e o título do seu projeto usando variáveis e seletores de elite.",
  isProjectPart: true,
  template: `/* O Editor começa limpo. Defina os estilos do zero. */\n`,
  youtubeVideoId: "v4cd1O4zkGw",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🎨 A Ferramenta do Dia: Custom Properties</h3>
      <p>Um engenheiro master não repete cores. Ele cria variáveis no <code>:root</code> para que o tema do site possa mudar num segundo.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">Exemplo de Elite:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          :root { --primary-color: #3b82f6; } <br/>
          p { color: var(--primary-color); }
        </p>
      </div>

      <p class="text-xs">
        <strong>Instruções de Construção:</strong>
        <br/>1. Cria a variável <code>--primary-color</code> no <code>:root</code> com o valor <code>#3b82f6</code>.
        <br/>2. Aplica essa cor a todos os parágrafos <code>p</code>.
        <br/>3. Muda o tamanho da fonte (font-size) do <code>h1</code> para <code>48px</code>.
      </p>
    </div>
  `,
  objectives: [
    {
      id: "root_var",
      description: "Definir --primary-color no :root",
      test: "--primary-color"
    },
    {
      id: "apply_var",
      description: "Usar var(--primary-color) nos parágrafos",
      test: "var(--primary-color)"
    },
    {
      id: "h1_size",
      description: "Definir font-size: 48px para o h1",
      test: "48px"
    }
  ]
};
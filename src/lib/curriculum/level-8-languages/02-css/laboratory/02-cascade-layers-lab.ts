import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p2",
  language: "html",
  title: "Projeto Master: Arquitetura de Camadas CSS",
  description: "Organize o seu Design System utilizando Cascade Layers para gerir a prioridade de estilos.",
  statement: "Implemente a hierarquia de camadas 'reset, base, components' e garanta que o estilo do botão não seja sobrescrito pelo reset.",
  isProjectPart: true,
  youtubeVideoId: "u044iM9xsTM",
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
<head>
  <style>
    /* 1. Declare a ordem das camadas no topo: reset, base, components */
    
    /* 2. Crie a camada 'reset' com seletor universal mudando a margem para 50px (simulação de conflito) */

    /* 3. Crie a camada 'components' e estilize o .btn com margin: 0 e background blue */

  </style>
</head>
<body>
  <button class="btn">Executar Missão</button>
</body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🏗️ Engenharia de Camadas</h3>
      <p class="text-sm">A sua missão é provar que as <strong>Cascade Layers</strong> conseguem vencer a especificidade. Mesmo que um seletor de reset seja muito agressivo, as camadas garantem que os teus componentes mantenham a integridade.</p>
      
      <div class="bg-black/40 p-4 rounded-xl border border-primary/20 space-y-2">
        <p class="text-xs font-bold text-yellow-500">Manual de Construção:</p>
        <ul class="text-[10px] space-y-1 list-disc ml-4">
          <li><strong>Hierarquia:</strong> No topo, escreva <code>@layer reset, base, components;</code>.</li>
          <li><strong>Conflito Deliberado:</strong> Na camada <code>reset</code>, coloque <code>* { margin: 50px !important; }</code> (não, espere, sem important para testar a layer real). Use <code>* { margin: 50px; }</code>.</li>
          <li><strong>Vitória:</strong> Na camada <code>components</code>, coloque <code>.btn { margin: 0; background: #3b82f6; color: white; }</code>.</li>
          <li><strong>Observação:</strong> Verifique no preview que o botão ignora a margem de 50px do reset porque a camada <code>components</code> tem maior prioridade na lista inicial.</li>
        </ul>
      </div>
    </div>
  `,
  objectives: [
    {
      id: "layer_order",
      description: "Declarar a ordem das camadas no topo do CSS.",
      test: "@layer reset, base, components"
    },
    {
      id: "reset_layer",
      description: "Implementar a camada @layer reset.",
      test: "@layer reset {"
    },
    {
      id: "comp_layer",
      description: "Implementar a camada @layer components.",
      test: "@layer components {"
    }
  ]
};
import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'webadv-ex-1', 
    title: 'React: Criando um Hook Customizado', 
    statement: 'Crie um hook customizado `useLocalStorage` que se comporta como `useState`, mas que também persiste o valor no `localStorage` do navegador. A função deve receber uma chave e um valor inicial.', 
    template: `import { useState, useEffect } from 'react';

function useLocalStorage(chave, valorInicial) {
  // 1. Crie um estado para armazenar o valor.
  //    A inicialização deve tentar ler do localStorage primeiro.
  //    Se não houver nada, use o valorInicial.

  // 2. Use useEffect para salvar o valor no localStorage
  //    sempre que ele mudar.

  // 3. Retorne o valor e a função para atualizá-lo, 
  //    assim como o useState.
  
  return [valor, setValor];
}
`,
    youtubeVideoId: 'N-KaLp2T_iU',
    detailedExplanation: `
        <h2>Reutilizando Lógica de Estado</h2>
        <p>Hooks customizados são uma das funcionalidades mais poderosas do React. Eles permitem extrair a lógica de um componente para uma função reutilizável.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li><strong>Estado Inicial:</strong> Use <code>useState</code>. A lógica para o valor inicial deve ser uma função para que ela só execute uma vez. Dentro dela, tente ler o valor de <code>localStorage.getItem(chave)</code>. Se existir, use-o (após um <code>JSON.parse</code>). Caso contrário, use o <code>valorInicial</code>.</li>
            <li><strong>Efeito Colateral:</strong> Use <code>useEffect</code>. Configure-o para rodar sempre que a variável de estado mudar (adicione-a ao array de dependências). Dentro do efeito, salve o novo valor no localStorage: <code>localStorage.setItem(chave, JSON.stringify(valor))</code>.</li>
            <li><strong>Retorno:</strong> A assinatura do seu hook deve ser idêntica à do <code>useState</code>, retornando um array com o valor atual e a função para atualizá-lo.</li>
        </ol>
    `
};

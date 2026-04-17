import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t6-react-hooks",
    title: "React Hooks: useState, useEffect, useContext e Hooks Customizados",
    youtubeVideoId: "N-KaLp2T_iU",
    content: `
        <h2>Adicionando Estado e Lógica a Componentes de Função</h2>
        <p>Hooks são funções que permitem que você "engate" (hook into) o estado do React e o ciclo de vida de componentes de função. Eles não funcionam dentro de classes.</p>
        
        <h3>useState</h3>
        <p>Permite adicionar estado a componentes de função. O React irá preservar esse estado entre re-renderizações.</p>
        <pre><code class="language-jsx">import { useState } from 'react';

function Exemplo() {
  // Declara uma nova variável de estado, que chamaremos de "contagem"
  const [contagem, setContagem] = useState(0);

  return (
    <div>
      <p>Você clicou {contagem} vezes</p>
      <button onClick={() => setContagem(contagem + 1)}>
        Clique aqui
      </button>
    </div>
  );
}
        </code></pre>

        <h3>useEffect</h3>
        <p>Permite executar efeitos colaterais (side effects) em componentes de função. Efeitos colaterais podem ser buscas de dados (data fetching), subscrições, ou manipulação manual do DOM.</p>
        <pre><code class="language-jsx">// Executa após cada renderização
useEffect(() => {
  document.title = \`Você clicou \${contagem} vezes\`;
});

// Executa apenas uma vez, após a montagem do componente (como componentDidMount)
useEffect(() => {
  // buscar dados da API
}, []); // O array de dependências vazio é crucial
        </code></pre>

        <h3>useContext</h3>
        <p>Permite acessar um valor de um Contexto React sem a necessidade de passar props através de múltiplos níveis de componentes (evitando "prop drilling").</p>
        
        <h3>Hooks Customizados (Custom Hooks)</h3>
        <p>Um Hook Customizado é uma função JavaScript cujo nome começa com "use" e que pode chamar outros Hooks. É uma forma de reutilizar lógica de estado entre diferentes componentes.</p>
         <pre><code class="language-jsx">function useAmigoStatus(amigoID) {
  const [estaOnline, setEstaOnline] = useState(null);
  // ... lógica para verificar status ...
  return estaOnline;
}
        </code></pre>
    `
};

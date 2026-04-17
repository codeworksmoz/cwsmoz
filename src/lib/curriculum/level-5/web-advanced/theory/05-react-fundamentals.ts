import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t5-react-fundamentals",
    title: "Fundamentos de React: Componentes, JSX e Virtual DOM",
    youtubeVideoId: "HyIui2AnU2E",
    content: `
        <h2>Construindo Interfaces com Componentes</h2>
        <p>React é uma biblioteca JavaScript para construir interfaces de usuário. Sua principal ideia é permitir que você construa interfaces complexas a partir de pequenas e isoladas peças de código chamadas “componentes”.</p>
        
        <h3>Componentes</h3>
        <p>Componentes são como funções JavaScript. Eles aceitam entradas arbitrárias (chamadas “props”) e retornam elementos React descrevendo o que deve aparecer na tela.</p>
        <pre><code class="language-jsx">// Um componente de função simples
function BemVindo(props) {
  return <h1>Olá, {props.nome}</h1>;
}
        </code></pre>

        <h3>JSX (JavaScript XML)</h3>
        <p>JSX é uma extensão de sintaxe para JavaScript que se parece muito com HTML. Ela permite que você escreva a estrutura da sua UI dentro do seu código JavaScript. Não é HTML, mas é compilado pelo Babel para chamadas de função <code>React.createElement()</code>.</p>
        <pre><code class="language-jsx">const elemento = <h1>Olá, mundo!</h1>;
        </code></pre>

        <h3>Virtual DOM</h3>
        <p>O Virtual DOM (VDOM) é um conceito de programação onde uma representação virtual da UI é mantida na memória e sincronizada com o DOM "real". Em vez de manipular o DOM do navegador diretamente (que é lento), o React manipula o VDOM. Quando o estado de um objeto muda, o React atualiza o VDOM, compara-o com a versão anterior (um processo chamado "diffing"), e então calcula a maneira mais eficiente de atualizar o DOM real para corresponder ao novo estado. Isso torna as atualizações de UI muito mais performáticas.</p>
    `
};

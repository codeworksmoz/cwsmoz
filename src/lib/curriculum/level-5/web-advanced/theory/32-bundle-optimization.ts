import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t32-bundle-optimization",
    title: "Otimização de Bundle: Code Splitting e Tree Shaking",
    youtubeVideoId: "2a6yeK0p2jU",
    content: `
        <h2>Enviando Menos JavaScript para o Cliente</h2>
        <p>O tamanho do seu "bundle" de JavaScript (o arquivo final que o navegador baixa) tem um impacto direto no tempo de carregamento e interatividade da sua página. Otimizar esse bundle é crucial.</p>
        
        <h3>Code Splitting (Divisão de Código)</h3>
        <p>Em vez de gerar um único e enorme arquivo JavaScript para toda a sua aplicação, o code splitting divide seu bundle em "pedaços" (chunks) menores que podem ser carregados sob demanda.</p>
        <p>Por exemplo, o código para a página de perfil do usuário só é carregado quando o usuário de fato navega para essa página. Frameworks como Next.js e Vite fazem isso automaticamente com base nas rotas.</p>
        <p>Você também pode implementar code splitting dinâmico usando a sintaxe <code>import()</code>.</p>
        <pre><code class="language-jsx">const MinhaBibliotecaPesada = React.lazy(() => import('./MinhaBibliotecaPesada'));

function MeuComponente() {
  return (
    <React.Suspense fallback={<div>Carregando...</div>}>
      <MinhaBibliotecaPesada />
    </React.Suspense>
  );
}
</code></pre>

        <h3>Tree Shaking</h3>
        <p>Tree shaking é um processo de eliminação de código morto. Durante o processo de build, o bundler (como Webpack ou Rollup) analisa as declarações <code>import</code> e <code>export</code> e remove do bundle final qualquer código que não está sendo usado. Por exemplo, se você importa apenas uma função de uma biblioteca grande, o tree shaking garante que apenas o código daquela função (e suas dependências) seja incluído no bundle final, e não a biblioteca inteira.</p>
        <p>Para que o tree shaking funcione, você precisa usar a sintaxe de ES Modules (<code>import</code>/<code>export</code>).</p>
    `
};

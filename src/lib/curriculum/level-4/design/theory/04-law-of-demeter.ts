import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-law-of-demeter",
    title: "Lei de Demeter (Princípio do Mínimo Conhecimento)",
    youtubeVideoId: "iR2ke-jr-i5I",
    content: `
        <h2>Não Fale com Estranhos</h2>
        <p>A Lei de Demeter é uma diretriz de design para desenvolver software, particularmente software orientado a objetos. Em sua forma geral, a Lei de Demeter é um caso específico de acoplamento fraco.</p>
        <p>A diretriz pode ser resumida como <strong>"fale apenas com seus amigos imediatos"</strong>.</p>

        <h3>As Regras</h3>
        <p>Um método de um objeto <code>O</code> só deve invocar métodos de:</p>
        <ol>
            <li>Do próprio objeto <code>O</code>.</li>
            <li>Dos parâmetros do método.</li>
            <li>De quaisquer objetos que ele crie/instancie.</li>
            <li>Dos seus componentes diretos (objetos de instância).</li>
        </ol>
        <p>Crucialmente, um método não deve invocar métodos em um objeto que foi retornado por outra chamada de método. Em outras palavras, evite "cadeias de chamadas" como <code>a.getB().getC().fazerAlgo()</code>.</p>

        <h3>Violação da Lei</h3>
        <pre><code class="language-javascript">// Código que VIOLA a Lei de Demeter
const cidade = pessoa.getEndereco().getCidade();
</code></pre>
        <p>Este código está violando a lei porque está "navegando" através do objeto <code>Endereco</code> para chegar à cidade. O método atual conhece muito sobre a estrutura interna de <code>Pessoa</code> e <code>Endereco</code>. Se a classe <code>Endereco</code> mudar a forma como armazena a cidade, este código quebrará.</p>

        <h3>Seguindo a Lei</h3>
        <pre><code class="language-javascript">// Código que SEGUE a Lei de Demeter
// A classe Pessoa agora tem um método para obter a cidade, encapsulando a lógica.
const cidade = pessoa.getCidadeDoEndereco(); 
</code></pre>
        <p>Seguir a Lei de Demeter resulta em um software mais manutenível e adaptável. O código se torna menos acoplado, pois os objetos não precisam conhecer a estrutura interna de outros objetos.</p>
    `
};

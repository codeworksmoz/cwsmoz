import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-composition-over-inheritance",
    title: "Composição em Vez de Herança",
    youtubeVideoId: "wfMtDGfHWpA",
    content: `
        <h2>Um Princípio Fundamental do Design Orientado a Objetos</h2>
        <p><strong>"Prefira composição em vez de herança"</strong> é uma diretriz de design que promove a criação de sistemas mais flexíveis e desacoplados.</p>
        
        <h3>O Problema com a Herança (Herança de Implementação)</h3>
        <p>A herança cria uma relação <strong>"é um"</strong>. Embora poderosa, ela pode levar a problemas:</p>
        <ul>
            <li><strong>Acoplamento Forte:</strong> Subclasses são fortemente acopladas às suas superclasses. Uma mudança na superclasse pode quebrar inesperadamente as subclasses.</li>
            <li><strong>Hierarquias Frágeis:</strong> Com o tempo, as hierarquias de classes podem se tornar profundas e complexas, difíceis de entender e manter (o "problema da base frágil").</li>
            <li><strong>Inflexibilidade:</strong> Uma classe só pode herdar de uma superclasse na maioria das linguagens, limitando a reutilização de código de múltiplas fontes.</li>
        </ul>
        
        <h3>A Solução da Composição</h3>
        <p>Composição cria uma relação <strong>"tem um"</strong>. Em vez de uma classe herdar o comportamento de outra, ela contém uma instância de outra classe e delega tarefas a ela.</p>
        <pre><code class="language-typescript">// Exemplo
// Em vez de Pato herdar de Voador...
interface Voador {
    voar(): void;
}

class VoaComAsas implements Voador {
    voar() { console.log("Estou voando!"); }
}

class NaoVoa implements Voador {
    voar() { console.log("Eu não posso voar."); }
}

class Pato {
    private comportamentoDeVoo: Voador;

    constructor(comportamento: Voador) {
        this.comportamentoDeVoo = comportamento;
    }

    executarVoo() {
        this.comportamentoDeVoo.voar();
    }
}

const patoReal = new Pato(new VoaComAsas());
patoReal.executarVoo(); // "Estou voando!"

const patoDeBorracha = new Pato(new NaoVoa());
patoDeBorracha.executarVoo(); // "Eu não posso voar."
</code></pre>
        <p>Isso permite que você altere o comportamento de um objeto em tempo de execução e combine comportamentos de diferentes fontes, levando a um design muito mais flexível e robusto. Este é o princípio por trás do Padrão de Projeto Strategy.</p>
    `
};

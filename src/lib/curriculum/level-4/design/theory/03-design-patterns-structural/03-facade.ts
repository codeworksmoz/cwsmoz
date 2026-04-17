import type { TheoryLesson } from '../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-facade",
    title: "Padrão Facade",
    content: `
        <h2>Simplificando Interfaces Complexas</h2>
        <p>O <strong>Facade</strong> (ou Fachada) é um padrão de projeto estrutural que fornece uma interface simplificada para uma biblioteca, um framework ou qualquer outro conjunto complexo de classes.</p>
        
        <h3>Problema que Resolve</h3>
        <p>Imagine que você precisa integrar sua aplicação com uma biblioteca sofisticada que tem dezenas de classes e interfaces. Para fazer uma única tarefa, você pode precisar instanciar vários objetos, chamar métodos na ordem correta, etc. Isso torna o código cliente fortemente acoplado à complexidade da biblioteca.</p>
        <p>O padrão Facade propõe a criação de uma nova classe que atua como uma "fachada" para o subsistema complexo. Essa fachada fornece uma interface simples e de alto nível, escondendo toda a complexidade por trás dela. O código cliente interage apenas com a fachada, e não com as dezenas de classes do subsistema.</p>
        
        <h3>Estrutura</h3>
        <ol>
            <li>A classe <strong>Facade</strong> fornece acesso conveniente a uma parte específica da funcionalidade do subsistema. Ela sabe para onde direcionar a requisição do cliente e como operar todas as partes móveis.</li>
            <li>O <strong>Subsistema Complexo</strong> consiste em várias classes que não sabem da existência da fachada. Elas operam umas com as outras diretamente para fazer seu trabalho.</li>
            <li>O <strong>Cliente</strong> usa a fachada em vez de chamar os objetos do subsistema diretamente.</li>
        </ol>

        <pre><code class="language-typescript">// Partes do subsistema complexo
class ConversorVideo { /* ... */ }
class CompressorAudio { /* ... */ }
class GerenciadorDeLegendas { /* ... */ }

// A classe Facade
class FacadeConversorVideo {
    protected conversor: ConversorVideo;
    protected compressor: CompressorAudio;
    protected legendas: GerenciadorDeLegendas;

    constructor() {
        this.conversor = new ConversorVideo();
        this.compressor = new CompressorAudio();
        this.legendas = new GerenciadorDeLegendas();
    }

    // A fachada fornece um método simples para uma tarefa complexa.
    public converterVideo(arquivo: string, formato: string): void {
        console.log('Iniciando conversão...');
        const videoConvertido = this.conversor.converter(arquivo, formato);
        const audioComprimido = this.compressor.comprimir(videoConvertido);
        this.legendas.adicionar(videoConvertido);
        console.log('Conversão concluída!');
        // ...salva o arquivo final.
    }
}

// Uso pelo cliente
const conversor = new FacadeConversorVideo();
conversor.converterVideo("meu_filme.mp4", "avi");
</code></pre>
        
        <h3>Quando Usar?</h3>
        <p>Use o padrão Facade quando você precisa ter uma interface limitada, porém direta, para um subsistema complexo. É especialmente útil quando você quer estruturar um subsistema em camadas, usando fachadas para definir pontos de entrada para cada nível.</p>
    `
};

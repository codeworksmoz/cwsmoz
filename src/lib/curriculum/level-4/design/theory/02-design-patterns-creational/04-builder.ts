import type { TheoryLesson } from '../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-builder",
    title: "Padrão Builder",
    content: `
        <h2>Construindo Objetos Complexos Passo a Passo</h2>
        <p>O <strong>Builder</strong> é um padrão de projeto criacional que permite construir objetos complexos passo a passo. O padrão permite que você produza diferentes tipos e representações de um objeto usando o mesmo processo de construção.</p>
        
        <h3>Problema que Resolve</h3>
        <p>Imagine um objeto complexo que requer uma inicialização trabalhosa com muitos campos e objetos aninhados. O construtor desse objeto pode se tornar um monstro com dezenas de parâmetros, a maioria dos quais você nem sempre precisa. Isso é conhecido como "construtor telescópico".</p>
        <p>O padrão Builder extrai a lógica de construção do objeto para fora de sua própria classe e a move para objetos separados chamados "builders".</p>
        
        <h3>Estrutura</h3>
        <ol>
            <li>A interface <strong>Builder</strong> especifica métodos para criar as diferentes partes do objeto do produto.</li>
            <li>Os <strong>Builders Concretos</strong> fornecem implementações diferentes para as etapas de construção. Eles podem construir produtos que não seguem a mesma interface.</li>
            <li>Os <strong>Produtos</strong> são os objetos resultantes. Produtos construídos por diferentes builders não precisam pertencer à mesma hierarquia de classe ou interface.</li>
            <li>A classe <strong>Director</strong> define a ordem na qual as etapas de construção são chamadas, para que você possa criar e reutilizar configurações específicas de produtos. (Opcional)</li>
        </ol>

        <pre><code class="language-typescript">// Exemplo: Construindo uma Casa
class Casa {
    public paredes: number = 0;
    public portas: number = 0;
    public janelas: number = 0;
    public temPiscina: boolean = false;
}

interface Builder {
    reset(): void;
    construirParedes(n: number): void;
    construirPortas(n: number): void;
    construirJanelas(n: number): void;
    construirPiscina(): void;
}

class CasaBuilder implements Builder {
    private produto!: Casa;

    constructor() { this.reset(); }
    public reset(): void { this.produto = new Casa(); }

    public construirParedes(n: number): void { this.produto.paredes = n; }
    public construirPortas(n: number): void { this.produto.portas = n; }
    public construirJanelas(n: number): void { this.produto.janelas = n; }
    public construirPiscina(): void { this.produto.temPiscina = true; }

    public getProduto(): Casa {
        const resultado = this.produto;
        this.reset();
        return resultado;
    }
}

// Uso
const builder = new CasaBuilder();
builder.construirParedes(4);
builder.construirPortas(2);
builder.construirPiscina();
const casaDeLuxo = builder.getProduto();
</code></pre>
        <p>Note como a construção fluente (encadeamento de métodos) é uma consequência natural deste padrão.</p>
        
        <h3>Quando Usar?</h3>
        <p>Use o padrão Builder para se livrar de construtores telescópicos e quando você quer que seu código seja capaz de criar diferentes representações de algum produto (por exemplo, uma casa de pedra e uma de madeira).</p>
    `
};

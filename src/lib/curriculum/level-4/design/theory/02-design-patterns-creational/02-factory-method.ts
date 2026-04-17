import type { TheoryLesson } from '../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-factory-method",
    title: "Padrão Factory Method",
    content: `
        <h2>Deixando as Subclasses Decidirem o que Criar</h2>
        <p>O <strong>Factory Method</strong> é um padrão de projeto criacional que fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objetos que serão criados.</p>
        
        <h3>Problema que Resolve</h3>
        <p>Imagine que você está criando uma aplicação de logística. A primeira versão só lida com transporte por caminhões. Seu código está cheio de referências à classe <code>Caminhao</code>. Agora, você precisa adicionar transporte marítimo. O que fazer? Reescrever todo o código para lidar com a classe <code>Navio</code>? Isso seria um pesadelo.</p>
        <p>O Factory Method sugere que você substitua chamadas diretas de construção de objetos (usando o operador <code>new</code>) por chamadas a um método especial de "fábrica".</p>
        
        <h3>Estrutura</h3>
        <ol>
            <li>A <strong>Classe Criadora</strong> declara o método de fábrica que deve retornar um objeto de uma classe Produto.</li>
            <li>As <strong>Classes Criadoras Concretas</strong> sobrescrevem o método de fábrica base para retornar um tipo diferente de produto.</li>
            <li>A <strong>Interface do Produto</strong> declara as operações que todos os produtos concretos devem implementar.</li>
            <li>Os <strong>Produtos Concretos</strong> fornecem várias implementações da interface do produto.</li>
        </ol>

        <pre><code class="language-typescript">interface Transporte {
    entregar(): void;
}

class Caminhao implements Transporte {
    public entregar(): void {
        console.log('Entregando por terra em uma caixa.');
    }
}

class Navio implements Transporte {
    public entregar(): void {
        console.log('Entregando por mar em um contêiner.');
    }
}

abstract class Logistica {
    // A classe criadora declara o método fábrica que deve retornar um objeto.
    public abstract criarTransporte(): Transporte;

    public planejarEntrega(): string {
        const transporte = this.criarTransporte();
        return \`Logística: O mesmo código criador funcionou com \${transporte.entregar()}\`;
    }
}

class LogisticaRodoviaria extends Logistica {
    public criarTransporte(): Transporte {
        return new Caminhao();
    }
}

class LogisticaMaritima extends Logistica {
    public criarTransporte(): Transporte {
        return new Navio();
    }
}
</code></pre>

        <h3>Quando Usar?</h3>
        <p>Use o Factory Method quando você não sabe de antemão os tipos e dependências exatas dos objetos com os quais seu código deve trabalhar. O padrão permite que o código cliente trabalhe com uma interface genérica de produto, enquanto as subclasses concretas se encarregam da criação.</p>
    `
};

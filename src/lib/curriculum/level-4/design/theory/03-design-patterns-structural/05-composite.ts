import type { TheoryLesson } from '../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-composite",
    title: "Padrão Composite",
    content: `
        <h2>Tratando Objetos e Composições de Objetos Uniformemente</h2>
        <p>O <strong>Composite</strong> é um padrão de projeto estrutural que permite compor objetos em estruturas de árvore e, em seguida, trabalhar com essas estruturas como se fossem objetos individuais.</p>
        
        <h3>Problema que Resolve</h3>
        <p>Imagine que você está criando uma aplicação de desenho gráfico. Você pode ter objetos simples, como <code>Círculo</code> e <code>Quadrado</code>, mas também objetos complexos, como um <code>Grupo</code> de formas, que pode conter outras formas (incluindo outros grupos). Como você lida com isso?</p>
        <p>O padrão Composite sugere que você defina uma interface comum para objetos simples (folhas) e complexos (contêineres). Isso permite que o código cliente trate todos os objetos na composição da mesma forma, sem precisar saber se está lidando com um objeto simples ou com uma estrutura complexa.</p>
        
        <h3>Estrutura</h3>
        <ol>
            <li>A interface do <strong>Componente</strong> descreve as operações que são comuns tanto para elementos simples quanto para complexos.</li>
            <li>O <strong>Leaf (Folha)</strong> é um elemento básico de uma árvore que não tem sub-elementos.</li>
            <li>O <strong>Container (Contêiner)</strong> é um elemento que tem sub-elementos: folhas ou outros contêineres. Um contêiner não sabe as classes concretas de seus filhos. Ele trabalha com todos os sub-elementos apenas através da interface do componente.</li>
            <li>O <strong>Cliente</strong> trabalha com todos os elementos através da interface do componente.</li>
        </ol>

        <pre><code class="language-typescript">// A interface do componente
abstract class ComponenteGrafico {
    public abstract desenhar(): void;
}

// O componente "folha" (simples)
class Circulo extends ComponenteGrafico {
    public desenhar(): void {
        console.log('Desenhando um círculo.');
    }
}

// O componente "contêiner" (complexo)
class Grupo extends ComponenteGrafico {
    private filhos: ComponenteGrafico[] = [];

    public adicionar(componente: ComponenteGrafico): void {
        this.filhos.push(componente);
    }

    public desenhar(): void {
        console.log('Desenhando um grupo:');
        for (const filho of this.filhos) {
            filho.desenhar(); // Delega o desenho para os filhos
        }
    }
}

// Uso pelo cliente
const circulo1 = new Circulo();
const circulo2 = new Circulo();
const grupo = new Grupo();
grupo.adicionar(circulo1);
grupo.adicionar(circulo2);

const grupoPrincipal = new Grupo();
grupoPrincipal.adicionar(grupo);
grupoPrincipal.adicionar(new Circulo());

// O cliente pode chamar 'desenhar' em qualquer objeto, seja simples ou complexo.
grupoPrincipal.desenhar();
</code></pre>
        
        <h3>Quando Usar?</h3>
        <p>Use o padrão Composite quando você tem que implementar uma estrutura de objetos que se parece com uma árvore. O padrão permite que você trate objetos individuais e composições de objetos de maneira uniforme.</p>
    `
};

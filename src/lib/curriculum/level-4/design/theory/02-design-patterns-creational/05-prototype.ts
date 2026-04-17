import type { TheoryLesson } from '../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-prototype",
    title: "Padrão Prototype",
    content: `
        <h2>Copiando Objetos Existentes</h2>
        <p>O <strong>Prototype</strong> é um padrão de projeto criacional que permite copiar objetos existentes sem tornar seu código dependente de suas classes.</p>
        
        <h3>Problema que Resolve</h3>
        <p>Digamos que você tenha um objeto e queira criar uma cópia exata dele. Como você faria isso? Primeiro, você teria que criar um novo objeto da mesma classe. Então, você teria que percorrer todos os campos do objeto original e copiar seus valores para o novo objeto.</p>
        <p>O problema é que nem todos os objetos podem ser copiados dessa forma, pois alguns campos do objeto podem ser privados e não visíveis de fora do próprio objeto. Além disso, seu código se tornaria dependente da classe do objeto que você está copiando. Se a classe mudar, você pode ter que mudar seu código.</p>
        <p>O padrão Prototype delega o processo de clonagem para os próprios objetos que estão sendo clonados.</p>

        <h3>Estrutura</h3>
        <p>O padrão declara uma interface comum para todos os objetos que suportam clonagem. Essa interface geralmente tem um único método, como <code>clone()</code>.</p>
        
        <pre><code class="language-typescript">interface Prototype {
    clone(): this;
}

class Forma implements Prototype {
    public x: number;
    public y: number;
    public cor: string;

    constructor(source?: Forma) {
        if (source) {
            this.x = source.x;
            this.y = source.y;
            this.cor = source.cor;
        }
    }

    // O método clone pode ter diferentes implementações.
    // A mais simples é criar um novo objeto e passar o objeto atual para o construtor.
    public clone(): this {
        return new (this.constructor as any)(this);
    }
}

// Uso
const circulo1 = new Forma();
circulo1.x = 10;
circulo1.y = 20;
circulo1.cor = "vermelho";

const circulo2 = circulo1.clone(); 
// circulo2 é uma cópia exata de circulo1
</code></pre>
        <p>É importante diferenciar entre uma cópia superficial (shallow copy) e uma cópia profunda (deep copy). Se um objeto contém outros objetos, uma cópia superficial copiará apenas a referência para o objeto aninhado, enquanto uma cópia profunda criará uma cópia do objeto aninhado também.</p>
        
        <h3>Quando Usar?</h3>
        <p>Use o padrão Prototype quando seu código não deve depender das classes concretas de objetos que você precisa copiar, ou quando você quer reduzir o número de subclasses que diferem apenas na maneira como inicializam seus respectivos objetos.</p>
    `
};

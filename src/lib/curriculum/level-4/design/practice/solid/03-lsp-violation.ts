import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'sd-prac-lsp',
    title: 'Identificação: Princípio da Substituição de Liskov (LSP)',
    statement: 'O código abaixo apresenta uma violação clássica do LSP com o exemplo Retângulo/Quadrado. Explique por que a classe `Quadrado` viola o LSP e como isso quebra a função `aumentarLargura`.',
    template: `class Retangulo {
    protected largura: number;
    protected altura: number;

    public setLargura(largura: number): void {
        this.largura = largura;
    }
    public setAltura(altura: number): void {
        this.altura = altura;
    }
    public getArea(): number {
        return this.largura * this.altura;
    }
}

class Quadrado extends Retangulo {
    public setLargura(largura: number): void {
        this.largura = largura;
        this.altura = largura; // Um quadrado deve ter lados iguais
    }
    public setAltura(altura: number): void {
        this.largura = altura;
        this.altura = altura; // Um quadrado deve ter lados iguais
    }
}

function aumentarLargura(ret: Retangulo) {
    ret.setAltura(5);
    ret.setLargura(10); 
    // Nós esperamos que a área seja 5 * 10 = 50.
    console.log(\`Área esperada: 50, Área calculada: \${ret.getArea()}\`);
    return ret.getArea();
}

const ret = new Retangulo();
const quad = new Quadrado();

console.log("Testando com Retangulo:");
aumentarLargura(ret);

console.log("\\nTestando com Quadrado:");
aumentarLargura(quad);


// --- SUA EXPLICAÇÃO ABAIXO ---

// Por que a classe Quadrado viola o LSP?
// ...

// Como isso quebra a função aumentarLargura?
// ...
`,
    youtubeVideoId: 'Nlyit_a33-M',
    detailedExplanation: `
        <h2>Subtipos Devem ser Substituíveis por seus Tipos Base</h2>
        <p>O LSP afirma que se <code>S</code> é um subtipo de <code>T</code>, então objetos do tipo <code>T</code> podem ser substituídos por objetos do tipo <code>S</code> sem alterar as propriedades desejáveis do programa. Neste caso, <code>Quadrado</code> é um subtipo de <code>Retangulo</code>.</p>
        <h3>Analisando a Violação</h3>
        <ol>
            <li>A função <code>aumentarLargura</code> espera um objeto do tipo <code>Retangulo</code>. Ela assume um comportamento de retângulo: mudar a largura não afeta a altura.</li>
            <li>Quando passamos um objeto <code>Quadrado</code>, que é um <code>Retangulo</code>, a função quebra.</li>
            <li>Dentro da função, <code>setLargura(10)</code> na classe <code>Quadrado</code> também altera a altura para 10, um efeito colateral inesperado para quem espera o comportamento de um <code>Retangulo</code>.</li>
            <li>Como resultado, a asserção implícita de que a área será 50 falha, pois a área se torna 10 * 10 = 100.</li>
        </ol>
        <p>A subclasse <code>Quadrado</code> não pode ser substituída por sua classe pai <code>Retangulo</code> sem quebrar a lógica do cliente. Isso é uma violação do LSP.</p>
    `
};

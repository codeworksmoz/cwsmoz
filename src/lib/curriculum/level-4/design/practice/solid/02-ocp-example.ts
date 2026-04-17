import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'sd-prac-ocp',
    title: 'Implementação: Princípio Aberto/Fechado (OCP)',
    statement: 'Você tem uma classe `CalculadoraDeArea` que calcula a área de retângulos. Estenda a funcionalidade para calcular a área de círculos também, mas sem modificar a classe `CalculadoraDeArea` existente. Use uma abordagem baseada em interfaces e classes separadas.',
    template: `interface Forma {
    area(): number;
}

class Retangulo implements Forma {
    public largura: number;
    public altura: number;

    constructor(largura: number, altura: number) {
        this.largura = largura;
        this.altura = altura;
    }

    public area(): number {
        return this.largura * this.altura;
    }
}

class CalculadoraDeArea {
    public somarAreas(formas: Forma[]): number {
        let areaTotal = 0;
        for (const forma of formas) {
            areaTotal += forma.area();
        }
        return areaTotal;
    }
}


// --- SEU CÓDIGO ABAIXO ---

// 1. Crie uma classe 'Circulo' que implemente a interface 'Forma'.
//    - O construtor deve receber o raio.
//    - O método area() deve retornar a área do círculo (Math.PI * raio * raio).

// 2. Demonstre o uso: crie um array com um Retangulo e um Circulo
//    e use a CalculadoraDeArea para somar suas áreas.

`,
    youtubeVideoId: 'Nlyit_a33-M',
    detailedExplanation: `
        <h2>Aberto para Extensão, Fechado para Modificação</h2>
        <p>A classe <code>CalculadoraDeArea</code> está "fechada para modificação" porque não precisamos alterá-la. Ela já trabalha com qualquer objeto que siga o contrato da interface <code>Forma</code>.</p>
        <p>Ela está "aberta para extensão" porque podemos adicionar novas formas (como <code>Circulo</code>, <code>Triangulo</code>, etc.) a qualquer momento, desde que elas implementem a interface <code>Forma</code>, e a calculadora funcionará com elas sem problemas.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li>Defina a classe <code>Circulo</code>. Ela deve ter a palavra-chave <code>implements Forma</code>.</li>
            <li>Adicione um construtor que aceite <code>raio</code> como parâmetro.</li>
            <li>Implemente o método <code>area()</code> dentro da classe <code>Circulo</code> para calcular a área corretamente.</li>
            <li>No final, crie instâncias de <code>Retangulo</code> e <code>Circulo</code>, coloque-as em um array e passe para uma instância de <code>CalculadoraDeArea</code> para ver o resultado.</li>
        </ol>
    `
};

import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'sd-prac-dip',
    title: 'Implementação: Princípio da Inversão de Dependência (DIP)',
    statement: 'A classe de alto nível `Interruptor` depende diretamente da classe de baixo nível `Lampada`. Refatore este código para que ambas dependam de uma abstração (interface), invertendo a dependência.',
    template: `// CÓDIGO ORIGINAL COM ACOPLAMENTO
class Lampada {
    public ligar() {
        console.log("Lâmpada ligada.");
    }
    public desligar() {
        console.log("Lâmpada desligada.");
    }
}

class Interruptor {
    private lampada: Lampada; // Dependência concreta!

    constructor() {
        this.lampada = new Lampada();
    }

    public acionar(): void {
        // Lógica para ligar/desligar...
        this.lampada.ligar();
    }
}

// --- SEU CÓDIGO DE REATORAÇÃO ABAIXO ---

// 1. Crie uma interface 'DispositivoAcionavel' com os métodos 'ligar' e 'desligar'.
// 2. Faça a classe 'LampadaRefatorada' implementar esta interface.
// 3. Modifique a classe 'InterruptorRefatorado' para depender da interface,
//    não da classe concreta. Use injeção de dependência no construtor.

`,
    youtubeVideoId: 'Nlyit_a33-M',
    detailedExplanation: `
        <h2>Dependa de Abstrações, Não de Implementações</h2>
        <p>O DIP afirma que módulos de alto nível não devem depender de módulos de baixo nível; ambos devem depender de abstrações. Isso desacopla o código e o torna muito mais flexível.</p>
        <h3>Passo a Passo da Refatoração</h3>
        <ol>
            <li>Crie a interface <code>interface DispositivoAcionavel { ligar(): void; desligar(): void; }</code>.</li>
            <li>Faça a classe <code>LampadaRefatorada</code> implementar a nova interface: <code>class LampadaRefatorada implements DispositivoAcionavel</code>.</li>
            <li>Na classe <code>InterruptorRefatorado</code>, mude a propriedade para depender da abstração: <code>private dispositivo: DispositivoAcionavel;</code>.</li>
            <li>Modifique o construtor para receber um objeto do tipo <code>DispositivoAcionavel</code>: <code>constructor(dispositivo: DispositivoAcionavel)</code>. Isso é chamado de <strong>Injeção de Dependência</strong>.</li>
            <li>Agora, o interruptor pode controlar qualquer dispositivo que implemente a interface, não apenas lâmpadas. Você poderia criar uma classe <code>Ventilador</code> que implementa <code>DispositivoAcionavel</code> e passá-la para o mesmo interruptor.</li>
        </ol>
    `
};

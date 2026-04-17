import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'sd-refactor-extract-method',
    title: 'Refatoração: Extrair Método (Extract Method)',
    statement: 'Refatore o método `imprimirFatura` abaixo. O bloco de código que calcula o total da fatura é complexo e pode ser extraído para seu próprio método para melhorar a legibilidade.',
    template: `class Fatura {
    public nomeCliente: string;
    public itens: { nome: string, valor: number }[];

    constructor(nome: string, itens: any[]) {
        this.nomeCliente = nome;
        this.itens = itens;
    }

    public imprimirFatura() {
        let total = 0;
        console.log(\`Fatura para: \${this.nomeCliente}\`);

        // --- INÍCIO DO BLOCO A SER EXTRAÍDO ---
        for (const item of this.itens) {
            total += item.valor;
        }
        // --- FIM DO BLOCO A SER EXTRAÍDO ---

        console.log(\`Total: R$ \${total.toFixed(2)}\`);
    }
}

// --- SEU CÓDIGO DE REATORAÇÃO ABAIXO ---
// Recrie a classe Fatura com o método extraído.

class FaturaRefatorada {
    // ...
}
`,
    youtubeVideoId: '8bYmm4hV_d4',
    detailedExplanation: `
        <h2>Melhorando a Legibilidade</h2>
        <p>O "Extract Method" é uma das técnicas de refatoração mais comuns. A ideia é pegar um fragmento de código que pode ser agrupado, movê-lo para um novo método e substituir o código antigo por uma chamada ao novo método.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li>Crie um novo método privado na classe, por exemplo, <code>private calcularTotal(): number</code>.</li>
            <li>Copie o bloco de código do loop <code>for</code> para dentro do novo método <code>calcularTotal</code>.</li>
            <li>Faça o novo método retornar o valor do <code>total</code> calculado.</li>
            <li>No método original <code>imprimirFatura</code>, substitua o bloco do loop por uma chamada ao novo método: <code>const total = this.calcularTotal();</code>.</li>
        </ol>
        <p>O método <code>imprimirFatura</code> agora é muito mais curto e fácil de entender. Sua única responsabilidade é orquestrar a impressão, delegando o cálculo para outro método.</p>
    `
};

import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'sd-ts-strategy',
    title: 'Padrão Strategy em TypeScript',
    statement: 'Implemente o padrão Strategy para um sistema de pagamento que pode alternar entre diferentes métodos de pagamento (Cartão de Crédito, PayPal) em tempo de execução.',
    template: `// A interface da Estratégia
interface EstrategiaDePagamento {
    pagar(valor: number): void;
}

// Estratégias Concretas
class PagamentoCartaoDeCredito implements EstrategiaDePagamento {
    public pagar(valor: number): void {
        console.log(\`Pagando R$ \${valor} com Cartão de Crédito.\`);
    }
}

class PagamentoPayPal implements EstrategiaDePagamento {
    public pagar(valor: number): void {
        console.log(\`Pagando R$ \${valor} com PayPal.\`);
    }
}

// O Contexto
class CarrinhoDeCompras {
    private estrategia: EstrategiaDePagamento;

    // O construtor deve receber uma estratégia inicial
    // SEU CÓDIGO DO CONSTRUTOR AQUI

    // Crie um método 'setEstrategia' para mudar a estratégia
    // SEU CÓDIGO DO SETTER AQUI

    // Crie um método 'finalizarCompra' que usa a estratégia para pagar
    // SEU CÓDIGO DO MÉTODO DE FINALIZAÇÃO AQUI
}


// Código cliente (não modificar)
const carrinho = new CarrinhoDeCompras(new PagamentoCartaoDeCredito());
console.log("Tentativa 1: Finalizando com cartão de crédito.");
carrinho.finalizarCompra(150);

console.log("\\nTentativa 2: Mudando para PayPal.");
carrinho.setEstrategia(new PagamentoPayPal());
carrinho.finalizarCompra(50);
`,
    youtubeVideoId: 'F-4pOWin-sw',
    detailedExplanation: `
        <h2>Tornando Algoritmos Intercambiáveis</h2>
        <p>O padrão Strategy permite definir uma família de algoritmos, encapsular cada um deles e torná-los intercambiáveis. Isso permite que o algoritmo varie independentemente dos clientes que o utilizam.</p>
        <h3>Passo a Passo da Implementação</h3>
        <ol>
            <li><strong>Construtor:</strong> O construtor da classe <code>CarrinhoDeCompras</code> deve receber um objeto do tipo <code>EstrategiaDePagamento</code> e armazená-lo em uma propriedade privada <code>this.estrategia</code>.</li>
            <li><strong>setEstrategia(estrategia):</strong> Este método deve simplesmente atualizar o valor da propriedade <code>this.estrategia</code> com a nova estratégia recebida como parâmetro.</li>
            <li><strong>finalizarCompra(valor):</strong> Este método deve chamar o método <code>pagar(valor)</code> na estratégia atualmente armazenada (<code>this.estrategia.pagar(valor)</code>).</li>
        </ol>
        <p>O <code>CarrinhoDeCompras</code> não sabe os detalhes de como o pagamento é processado; ele apenas delega essa responsabilidade para o objeto de estratégia que ele possui no momento.</p>
    `
};

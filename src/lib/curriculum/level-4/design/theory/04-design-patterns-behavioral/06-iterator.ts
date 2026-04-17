import type { TheoryLesson } from '../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-iterator",
    title: "Padrão Iterator",
    content: `
        <h2>Percorrendo Coleções sem Expor sua Estrutura</h2>
        <p>O <strong>Iterator</strong> é um padrão de projeto comportamental que permite percorrer elementos de uma coleção sem expor sua representação interna (seja uma lista, uma pilha, uma árvore, etc.).</p>
        
        <h3>Problema que Resolve</h3>
        <p>Imagine que você tem uma coleção complexa, como um grafo ou uma árvore. Se você expor a estrutura interna dessa coleção para o código cliente, o cliente ficará fortemente acoplado a essa implementação específica. Se você decidir mudar a estrutura de dados (por exemplo, de um array para uma lista ligada), terá que reescrever todo o código cliente que percorre a coleção.</p>
        <p>O padrão Iterator extrai o comportamento de travessia de uma coleção para um objeto separado chamado "iterador". O iterador encapsula toda a lógica de travessia e mantém o controle da posição atual na coleção.</p>
        
        <h3>Estrutura</h3>
        <ol>
            <li>A <strong>Interface do Iterador</strong> declara as operações necessárias para a travessia: obter o próximo elemento, verificar se há mais elementos, etc.</li>
            <li>Os <strong>Iteradores Concretos</strong> implementam algoritmos específicos para percorrer uma coleção.</li>
            <li>A <strong>Interface da Coleção</strong> declara um ou mais métodos para obter iteradores compatíveis com a coleção.</li>
            <li>As <strong>Coleções Concretas</strong> retornam novas instâncias de um iterador concreto específico para aquela coleção, sempre que o cliente as solicita.</li>
        </ol>

        <pre><code class="language-typescript">interface Iterador<T> {
    proximo(): T;
    temProximo(): boolean;
}

class IteradorDePalavras implements Iterador<string> {
    private colecao: string[];
    private posicao: number = 0;

    constructor(colecao: string[]) {
        this.colecao = colecao;
    }

    public proximo(): string {
        return this.colecao[this.posicao++];
    }

    public temProximo(): boolean {
        return this.posicao < this.colecao.length;
    }
}

class ColecaoDePalavras {
    private items: string[] = [];

    public getItems(): string[] { return this.items; }
    public addItem(item: string): void { this.items.push(item); }
    public getIterador(): Iterador<string> {
        return new IteradorDePalavras(this.items);
    }
}

// Uso
const colecao = new ColecaoDePalavras();
colecao.addItem("Primeira");
colecao.addItem("Segunda");
colecao.addItem("Terceira");

const iterador = colecao.getIterador();
while (iterador.temProximo()) {
    console.log(iterador.proximo());
}
</code></pre>
        <p>Muitas linguagens de programação modernas (incluindo JavaScript com seu protocolo de iteração) têm o padrão Iterator integrado em suas bibliotecas padrão.</p>

        <h3>Quando Usar?</h3>
        <p>Use o padrão Iterator quando sua coleção tiver uma estrutura de dados complexa, mas você quer esconder sua complexidade do cliente. O padrão também é útil para permitir que múltiplas travessias ocorram simultaneamente sobre a mesma coleção.</p>
    `
};

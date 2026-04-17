import type { TheoryLesson } from '../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-strategy",
    title: "Padrão Strategy",
    content: `
        <h2>Tornando Algoritmos Intercambiáveis</h2>
        <p>O <strong>Strategy</strong> é um padrão de projeto comportamental que permite definir uma família de algoritmos, colocar cada um deles em uma classe separada e tornar seus objetos intercambiáveis.</p>
        
        <h3>Problema que Resolve</h3>
        <p>Imagine que você está criando uma aplicação de mapas. Você quer calcular uma rota. Inicialmente, você implementa um algoritmo para rotas de carro. Depois, precisa adicionar rotas a pé e de transporte público. Você poderia adicionar um grande <code>if/else</code> ou <code>switch</code> no seu método <code>calcularRota()</code>, mas isso tornaria a classe grande, difícil de manter e violaria o Princípio Aberto/Fechado.</p>
        <p>O padrão Strategy sugere que você pegue essa família de algoritmos (carro, a pé, etc.) e coloque cada um em sua própria classe, todas implementando uma interface comum (ex: <code>EstrategiaDeRota</code>). O objeto original, chamado de contexto, não implementa o algoritmo, mas tem uma referência a uma das estratégias e delega o trabalho a ela.</p>
        
        <h3>Estrutura</h3>
        <ol>
            <li>O <strong>Contexto</strong> mantém uma referência a uma das estratégias concretas e se comunica com este objeto através da interface da estratégia.</li>
            <li>A <strong>Interface da Estratégia</strong> é comum a todas as estratégias concretas. Ela declara um método que o contexto usa para executar o algoritmo.</li>
            <li>As <strong>Estratégias Concretas</strong> implementam o algoritmo seguindo a interface da estratégia.</li>
        </ol>

        <pre><code class="language-typescript">// A interface da Estratégia
interface EstrategiaDeRota {
    calcularRota(origem: string, destino: string): void;
}

// Estratégias Concretas
class RotaDeCarro implements EstrategiaDeRota {
    public calcularRota(origem: string, destino: string): void {
        console.log(\`Calculando rota de carro de \${origem} para \${destino}\`);
    }
}
class RotaAPe implements EstrategiaDeRota {
    public calcularRota(origem: string, destino: string): void {
        console.log(\`Calculando rota a pé de \${origem} para \${destino}\`);
    }
}

// O Contexto
class Navegador {
    private estrategia: EstrategiaDeRota;

    constructor(estrategia: EstrategiaDeRota) {
        this.estrategia = estrategia;
    }

    public setEstrategia(estrategia: EstrategiaDeRota) {
        this.estrategia = estrategia;
    }

    public construirRota(origem: string, destino: string): void {
        this.estrategia.calcularRota(origem, destino);
    }
}

// Uso
const navegador = new Navegador(new RotaDeCarro());
navegador.construirRota("Casa", "Trabalho");

navegador.setEstrategia(new RotaAPe());
navegador.construirRota("Parque", "Museu");
</code></pre>
        
        <h3>Quando Usar?</h3>
        <p>Use o padrão Strategy quando você quer usar diferentes variantes de um algoritmo dentro de um objeto e ser capaz de trocar de algoritmos em tempo de execução. É uma ótima maneira de seguir o Princípio Aberto/Fechado e é a base por trás do princípio "Prefira composição em vez de herança".</p>
    `
};

import type { TheoryLesson } from '../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-template-method",
    title: "Padrão Template Method",
    content: `
        <h2>Definindo o Esqueleto de um Algoritmo</h2>
        <p>O <strong>Template Method</strong> é um padrão de projeto comportamental que define o esqueleto de um algoritmo em uma superclasse, mas permite que as subclasses substituam etapas específicas do algoritmo sem alterar sua estrutura.</p>
        
        <h3>Problema que Resolve</h3>
        <p>Imagine que você está criando uma ferramenta de análise de dados. O fluxo de trabalho é sempre o mesmo: abrir um arquivo, processar os dados e gerar um relatório. No entanto, a forma como o arquivo é aberto e os dados são processados pode variar (para arquivos CSV, JSON, XML, etc.).</p>
        <p>Você poderia criar uma classe para cada tipo de arquivo, mas muito do código (como a lógica de gerar o relatório) seria duplicado. O Template Method resolve isso.</p>
        
        <h3>Estrutura</h3>
        <p>Você cria uma classe base abstrata e declara o "método template" final (que não pode ser sobrescrito). Este método chama uma série de outros métodos, alguns dos quais podem ser abstratos (devem ser implementados pelas subclasses) e outros que podem ter uma implementação padrão (hooks), que podem ou não ser sobrescritos.</p>
        
        <ol>
            <li>A <strong>Classe Abstrata</strong> declara os métodos que compõem o algoritmo, implementa o esqueleto do algoritmo (o método template) e declara os métodos de passo que são abstratos ou têm uma implementação padrão.</li>
            <li>As <strong>Classes Concretas</strong> sobrescrevem os passos do algoritmo, mas não o método template em si.</li>
        </ol>

        <pre><code class="language-typescript">abstract class AnalisadorDeDados {
    // O método template define o esqueleto do algoritmo.
    public analisar(): void {
        this.abrirArquivo();
        this.processarDados();
        this.gerarRelatorio();
    }

    // Estes métodos precisam ser implementados pelas subclasses.
    protected abstract abrirArquivo(): void;
    protected abstract processarDados(): void;

    // Este é um passo padrão que não muda.
    protected gerarRelatorio(): void {
        console.log('Gerando relatório padrão...');
    }
}

class AnalisadorCSV extends AnalisadorDeDados {
    protected abrirArquivo(): void {
        console.log('Abrindo arquivo CSV.');
    }
    protected processarDados(): void {
        console.log('Processando dados do CSV.');
    }
}

class AnalisadorJSON extends AnalisadorDeDados {
    protected abrirArquivo(): void {
        console.log('Abrindo arquivo JSON.');
    }
    protected processarDados(): void {
        console.log('Processando dados do JSON.');
    }
}

// Uso
const analisador = new AnalisadorCSV();
analisador.analisar();
</code></pre>
        
        <h3>Quando Usar?</h3>
        <p>Use o Template Method quando você quer que os clientes estendam apenas etapas específicas de um algoritmo, mas não sua estrutura geral. É uma técnica fundamental na criação de frameworks, onde o framework define a arquitetura e o esqueleto, e o usuário implementa os detalhes.</p>
    `
};

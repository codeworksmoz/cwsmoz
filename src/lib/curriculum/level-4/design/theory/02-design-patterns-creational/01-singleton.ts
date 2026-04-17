import type { TheoryLesson } from '../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-singleton",
    title: "Padrão Singleton",
    content: `
        <h2>Garantindo uma Instância Única</h2>
        <p>O <strong>Singleton</strong> é um padrão de projeto criacional que garante que uma classe tenha apenas uma instância e fornece um ponto de acesso global a essa instância.</p>
        
        <h3>Problema que Resolve</h3>
        <p>O padrão Singleton resolve dois problemas de uma vez:</p>
        <ol>
            <li><strong>Garantir que uma classe tenha apenas uma única instância.</strong> Isso é útil para controlar o acesso a algum recurso compartilhado, por exemplo, um banco de dados ou um arquivo de log.</li>
            <li><strong>Fornecer um ponto de acesso global a essa instância.</strong> Ele permite que você acesse o objeto de qualquer lugar no programa, evitando a poluição do namespace global com variáveis.</li>
        </ol>

        <h3>Implementação</h3>
        <p>A implementação envolve um construtor privado (para evitar a criação de instâncias com o operador <code>new</code>) e um método estático que atua como o ponto de acesso global, criando a instância se ela ainda não existir.</p>
        
        <pre><code class="language-typescript">// Exemplo de implementação em TypeScript
class Singleton {
    private static instance: Singleton;

    private constructor() {
        // O construtor é privado.
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public algumaLogicaDeNegocio() {
        // ...
    }
}

// O código cliente funciona assim:
const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();

if (s1 === s2) {
    console.log('Singleton funciona, ambas as variáveis contêm a mesma instância.');
} else {
    console.log('Singleton falhou, variáveis contêm instâncias diferentes.');
}
</code></pre>

        <h3>Quando Usar?</h3>
        <p>Use o padrão Singleton quando uma classe em seu programa deve ter apenas uma única instância disponível para todos os clientes; por exemplo, um único objeto de banco de dados compartilhado por diferentes partes do programa.</p>
        <p><strong>Cuidado:</strong> O padrão Singleton é um dos padrões mais conhecidos, mas também um dos mais criticados. Ele pode introduzir acoplamento e dificultar os testes. Use-o com moderação.</p>
    `
};
